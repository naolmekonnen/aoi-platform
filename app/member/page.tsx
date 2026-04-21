import { cookies } from 'next/headers'
import { createClient } from '@supabase/supabase-js'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import LogoutButton from './LogoutButton'

export default async function DashboardPage() {
  // Get user from Supabase using anon key
  // so we can read the auth cookie
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        persistSession: false
      }
    }
  )

  // Get session from cookie
  const cookieStore = await cookies()
  const allCookies = cookieStore.getAll()

  // Find the Supabase auth token cookie
  const authCookie = allCookies.find(c =>
    c.name.includes('auth-token') ||
    c.name.includes('sb-')
  )

  // Use service role to get user data safely
  const adminSupabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  // Try to get user from the session
  const { data: { session } } =
    await supabase.auth.getSession()

  if (!session?.user) {
    redirect('/auth/login')
  }

  const userId = session.user.id
  const userEmail = session.user.email || ''

  // Fetch all user data
  const [
    profileRes,
    quizRes,
    purchasesRes,
    certRes,
    progressRes,
    advisoryRes
  ] = await Promise.allSettled([
    adminSupabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single(),
    adminSupabase
      .from('quiz_results')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(1),
    adminSupabase
      .from('purchases')
      .select('*')
      .eq('user_id', userId),
    adminSupabase
      .from('cert_attempts')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(1),
    adminSupabase
      .from('course_progress')
      .select('*')
      .eq('user_id', userId)
      .single(),
    adminSupabase
      .from('advisory_requests')
      .select('*')
      .eq('email', userEmail)
      .order('created_at', { ascending: false })
      .limit(1)
  ])

  const profile = profileRes.status === 'fulfilled'
    ? profileRes.value.data : null
  const quizResults = quizRes.status === 'fulfilled'
    ? quizRes.value.data : []
  const quizData = quizResults?.[0] || null
  const purchases = purchasesRes.status === 'fulfilled'
    ? purchasesRes.value.data || [] : []
  const certAttempts = certRes.status === 'fulfilled'
    ? certRes.value.data : []
  const certData = certAttempts?.[0] || null
  const progress = progressRes.status === 'fulfilled'
    ? progressRes.value.data : null
  const advisoryRequest = advisoryRes.status === 'fulfilled'
    ? advisoryRes.value.data?.[0] || null : null

  const firstName = profile?.first_name
    || userEmail.split('@')[0]
    || 'there'

  const hasCoursePurchase = purchases.some(
    (p: any) => p.product === 'course'
  )
  const hasCertPurchase = purchases.some(
    (p: any) => p.product === 'cert'
  )

  const completedLessons =
    progress?.modules_completed?.length || 0
  const totalLessons = 16
  const coursePercent = Math.round(
    (completedLessons / totalLessons) * 100
  )

  return (
    <main className="min-h-screen bg-[#F4F6F9]">
      <div className="bg-[#0A2342] px-5 sm:px-8 py-6">
        <div className="max-w-5xl mx-auto flex
          items-center justify-between">
          <div>
            <h1 className="text-white font-bold
              text-2xl">
              Welcome back, {firstName} 👋
            </h1>
            <p className="text-white/60 text-sm mt-1">
              {userEmail}
            </p>
          </div>
          <LogoutButton />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5
        sm:px-8 py-8 space-y-6">

        {/* Next Step */}
        <div className="bg-white rounded-2xl p-8
          border-l-4 border-[#C9A84C] shadow-sm">
          <p className="text-xs font-semibold
            uppercase tracking-widest
            text-[#C9A84C] mb-2">
            YOUR NEXT STEP
          </p>
          {!quizData && (
            <div>
              <h2 className="text-[#0A2342] font-bold
                text-xl mb-1">
                Take the Free Assessment
              </h2>
              <p className="text-gray-500 text-sm mb-4">
                Find out your AI readiness score in
                3 minutes
              </p>
              <Link href="/assessment"
                className="inline-flex bg-[#C9A84C]
                  text-[#0A2342] font-bold py-3 px-6
                  rounded-xl hover:brightness-95
                  transition-all text-sm">
                Take Assessment →
              </Link>
            </div>
          )}
          {quizData && !hasCoursePurchase &&
           quizData.score <= 70 && (
            <div>
              <h2 className="text-[#0A2342] font-bold
                text-xl mb-1">
                Enroll in the AI Readiness Course
              </h2>
              <p className="text-gray-500 text-sm mb-4">
                Your score of {quizData.score}/100 shows
                there are gaps to close
              </p>
              <Link href="/course"
                className="inline-flex bg-[#C9A84C]
                  text-[#0A2342] font-bold py-3 px-6
                  rounded-xl hover:brightness-95
                  transition-all text-sm">
                Enroll Now — $29 →
              </Link>
            </div>
          )}
          {quizData && !hasCertPurchase &&
           quizData.score > 70 && (
            <div>
              <h2 className="text-[#0A2342] font-bold
                text-xl mb-1">
                Get Your AI Operator Certification
              </h2>
              <p className="text-gray-500 text-sm mb-4">
                Your score of {quizData.score}/100 means
                you are ready to certify
              </p>
              <Link href="/certification"
                className="inline-flex bg-[#C9A84C]
                  text-[#0A2342] font-bold py-3 px-6
                  rounded-xl hover:brightness-95
                  transition-all text-sm">
                Get Certified — $49 →
              </Link>
            </div>
          )}
          {hasCoursePurchase &&
           completedLessons < totalLessons && (
            <div>
              <h2 className="text-[#0A2342] font-bold
                text-xl mb-1">
                Continue Your Course
              </h2>
              <p className="text-gray-500 text-sm mb-4">
                {coursePercent}% complete —
                keep the momentum going
              </p>
              <Link href="/course"
                className="inline-flex bg-[#C9A84C]
                  text-[#0A2342] font-bold py-3 px-6
                  rounded-xl hover:brightness-95
                  transition-all text-sm">
                Continue Course →
              </Link>
            </div>
          )}
          {hasCertPurchase && !certData && (
            <div>
              <h2 className="text-[#0A2342] font-bold
                text-xl mb-1">
                Take Your Certification Exam
              </h2>
              <p className="text-gray-500 text-sm mb-4">
                Your exam is ready — go get certified
              </p>
              <Link href="/certification/exam"
                className="inline-flex bg-[#C9A84C]
                  text-[#0A2342] font-bold py-3 px-6
                  rounded-xl hover:brightness-95
                  transition-all text-sm">
                Start Exam →
              </Link>
            </div>
          )}
          {certData?.passed && (
            <div>
              <h2 className="text-[#0A2342] font-bold
                text-xl mb-1">
                Book Your Free Strategy Call
              </h2>
              <p className="text-gray-500 text-sm mb-4">
                You are certified — time to implement
                AI in your business
              </p>
              <Link href="/advisory"
                className="inline-flex bg-[#C9A84C]
                  text-[#0A2342] font-bold py-3 px-6
                  rounded-xl hover:brightness-95
                  transition-all text-sm">
                Book Free Call →
              </Link>
            </div>
          )}
        </div>

        {/* Status Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2
          lg:grid-cols-4 gap-4">

          <div className="bg-white rounded-2xl p-6
            shadow-sm border border-gray-100">
            <p className="text-xs font-semibold
              uppercase tracking-widest
              text-gray-400 mb-3">Assessment</p>
            {quizData ? (
              <>
                <p className="text-4xl font-black
                  text-[#0A2342]">
                  {quizData.score}
                  <span className="text-base
                    font-normal text-gray-400">
                    /100
                  </span>
                </p>
                <p className="text-sm text-gray-500
                  mt-1 mb-3">{quizData.level}</p>
                <div className="space-y-1 text-xs
                  text-gray-500 mb-3">
                  <p>Awareness: {quizData.awareness_score || '—'}</p>
                  <p>Business: {quizData.business_score || '—'}</p>
                  <p>Prompting: {quizData.prompt_score || '—'}</p>
                  <p>Workflow: {quizData.workflow_score || '—'}</p>
                </div>
                <Link href={`/results/${quizData.id}`}
                  className="text-xs text-[#C9A84C]
                    font-semibold hover:underline">
                  View Full Report →
                </Link>
              </>
            ) : (
              <>
                <p className="text-gray-400 text-sm
                  mb-3">Not taken yet</p>
                <Link href="/assessment"
                  className="text-xs text-[#C9A84C]
                    font-semibold hover:underline">
                  Take Now →
                </Link>
              </>
            )}
          </div>

          <div className="bg-white rounded-2xl p-6
            shadow-sm border border-gray-100">
            <p className="text-xs font-semibold
              uppercase tracking-widest
              text-gray-400 mb-3">Course</p>
            {hasCoursePurchase ? (
              <>
                <p className="text-4xl font-black
                  text-[#0A2342]">
                  {coursePercent}
                  <span className="text-base
                    font-normal text-gray-400">%</span>
                </p>
                <p className="text-sm text-gray-500
                  mt-1 mb-3">
                  {completedLessons}/{totalLessons} lessons
                </p>
                <div className="w-full bg-gray-100
                  rounded-full h-2 mb-3">
                  <div className="bg-[#C9A84C] h-2
                    rounded-full"
                    style={{width:`${coursePercent}%`}}
                  />
                </div>
                <Link href="/course"
                  className="text-xs text-[#C9A84C]
                    font-semibold hover:underline">
                  {coursePercent === 100
                    ? 'Completed ✓'
                    : 'Continue →'}
                </Link>
              </>
            ) : (
              <>
                <p className="text-gray-400 text-sm
                  mb-3">Not enrolled</p>
                <Link href="/course"
                  className="text-xs text-[#C9A84C]
                    font-semibold hover:underline">
                  Enroll — $29 →
                </Link>
              </>
            )}
          </div>

          <div className="bg-white rounded-2xl p-6
            shadow-sm border border-gray-100">
            <p className="text-xs font-semibold
              uppercase tracking-widest
              text-gray-400 mb-3">Certification</p>
            {certData?.passed ? (
              <>
                <p className="text-2xl font-black
                  text-[#C9A84C]">Certified ✓</p>
                <p className="text-sm text-gray-500
                  mt-1 mb-3">
                  Score: {certData.score}/30
                </p>
                <Link href="/certification"
                  className="text-xs text-[#C9A84C]
                    font-semibold hover:underline">
                  Download Certificate →
                </Link>
              </>
            ) : hasCertPurchase ? (
              <>
                <p className="text-gray-700 text-sm
                  font-semibold mb-3">
                  Exam ready
                </p>
                {certData && !certData.passed && (
                  <p className="text-xs text-red-500
                    mb-2">
                    Last attempt: {certData.score}/30
                  </p>
                )}
                <Link href="/certification/exam"
                  className="text-xs text-[#C9A84C]
                    font-semibold hover:underline">
                  Start Exam →
                </Link>
              </>
            ) : (
              <>
                <p className="text-gray-400 text-sm
                  mb-3">Not purchased</p>
                <Link href="/certification"
                  className="text-xs text-[#C9A84C]
                    font-semibold hover:underline">
                  Get Certified — $49 →
                </Link>
              </>
            )}
          </div>

          <div className="bg-white rounded-2xl p-6
            shadow-sm border border-gray-100">
            <p className="text-xs font-semibold
              uppercase tracking-widest
              text-gray-400 mb-3">Strategy Call</p>
            <p className="text-gray-700 text-sm
              font-semibold mb-1">Free 30 min</p>
            <p className="text-gray-400 text-xs mb-3">
              Map your AI opportunity with an expert
            </p>
            <Link href="/advisory"
              className="text-xs text-[#C9A84C]
                font-semibold hover:underline">
              Book Free Call →
            </Link>
          </div>
        </div>

        {/* AI Transformation Form Status */}
        <div className="bg-white rounded-2xl p-6
          shadow-sm border border-gray-100">
          <p className="text-xs font-semibold
            uppercase tracking-widest
            text-gray-400 mb-3">AI TRANSFORMATION FORM</p>
          {advisoryRequest ? (
            <>
              <p className="text-green-700 text-sm
                font-semibold mb-1">Request Submitted ✓</p>
              <p className="text-gray-400 text-xs mb-3">
                Submitted on {new Date(advisoryRequest.created_at).toLocaleDateString()}
              </p>
              <p className="text-xs text-gray-500">
                Our team will contact you within 24 hours to schedule your free consultation call.
              </p>
            </>
          ) : (
            <>
              <p className="text-gray-700 text-sm
                font-semibold mb-1">Free AI Strategy Session</p>
              <p className="text-gray-400 text-xs mb-3">
                Get a personalized AI implementation roadmap
              </p>
              <Link href="/advisory"
                className="text-xs text-[#C9A84C]
                  font-semibold hover:underline">
                Submit Request →
              </Link>
            </>
          )}
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-2xl p-6
          shadow-sm border border-gray-100">
          <p className="text-xs font-semibold
            uppercase tracking-widest
            text-gray-400 mb-4">QUICK LINKS</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Take Assessment', href: '/assessment' },
              { label: 'AI Course', href: '/course' },
              { label: 'Certification', href: '/certification' },
              { label: 'Book Free Call', href: '/advisory' },
              { label: 'AI Solutions', href: '/services' },
              { label: 'Case Studies', href: '/case-studies' },
            ].map(link => (
              <Link key={link.href} href={link.href}
                className="px-4 py-2 bg-[#F4F6F9]
                  text-[#0A2342] rounded-lg text-sm
                  font-medium hover:bg-[#C9A84C]/10
                  transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}
