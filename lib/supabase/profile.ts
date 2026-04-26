import { createServerSupabase, createServiceSupabase } from './server'

export interface ProfileData {
  id: string
  email: string
  first_name?: string | null
  last_name?: string | null
  job_title?: string | null
  company?: string | null
  phone?: string | null
}

export async function findProfileByEmail(email: string) {
  const supabase = await createServerSupabase()
  const { data, error } = await supabase
    .from('profiles')
    .select('id, first_name, last_name, job_title, company, phone')
    .eq('email', email)
    .limit(1)
    .maybeSingle()
  if (error) throw new Error(error.message)
  return data as ProfileData | null
}

export async function ensureProfileByEmail({
  email, firstName, lastName, jobTitle, company, phone,
}: {
  email: string
  firstName?: string
  lastName?: string
  jobTitle?: string
  company?: string
  phone?: string
}) {
  const supabase = createServiceSupabase()
  const existing = await findProfileByEmail(email)
  if (existing?.id) {
    const updatedFields: Record<string, unknown> = {}
    if (firstName) updatedFields.first_name = firstName
    if (lastName) updatedFields.last_name = lastName
    if (jobTitle) updatedFields.job_title = jobTitle
    if (company) updatedFields.company = company
    if (phone) updatedFields.phone = phone
    if (Object.keys(updatedFields).length > 0) {
      const { error: updateError } = await supabase
        .from('profiles').update(updatedFields).eq('id', existing.id)
      if (updateError) throw new Error(updateError.message)
    }
    return { ...existing, email }
  }
  const randomPassword = Math.random().toString(36).slice(2, 12) + '!A0'
  const { data: userData, error: userError } = await supabase.auth.admin.createUser({
    email,
    email_confirm: true,
    password: randomPassword,
    user_metadata: { first_name: firstName, last_name: lastName, job_title: jobTitle, company, phone },
  })
  if (userError || !userData?.user?.id) {
    throw new Error(userError?.message ?? 'Unable to create Supabase user')
  }
  const userId = userData.user.id
  const { error: insertError } = await supabase.from('profiles').insert([{
    id: userId, email, first_name: firstName, last_name: lastName,
    job_title: jobTitle, company, phone,
  }])
  if (insertError) throw new Error(insertError.message)
  return { id: userId, email, first_name: firstName, last_name: lastName, job_title: jobTitle, company, phone }
}