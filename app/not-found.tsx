import Link from 'next/link'
import { AOILogo } from '@/components/logo'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-aoi-navy text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <AOILogo />
        </div>

        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl font-semibold mb-2">Page Not Found</p>
        <p className="text-gray-300 mb-8">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>

        <Link
          href="/"
          className="inline-block bg-aoi-gold text-aoi-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-aoi-gold/90 transition-colors"
        >
          Back to Home
        </Link>

        <div className="mt-12 space-y-2 text-sm text-gray-400">
          <p>Not sure where to start?</p>
          <div className="flex justify-center gap-4">
            <Link href="/assessment" className="hover:text-aoi-gold transition-colors">
              Take Assessment
            </Link>
            <span>•</span>
            <Link href="/course" className="hover:text-aoi-gold transition-colors">
              Explore Course
            </Link>
            <span>•</span>
            <Link href="/about" className="hover:text-aoi-gold transition-colors">
              About AOI
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
