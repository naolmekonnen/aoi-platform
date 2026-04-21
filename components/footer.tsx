import Link from 'next/link'
import { AOILogo } from './logo'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0A2342] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <AOILogo dark />
            <p className="text-[#C9A84C] text-xs font-medium tracking-widest mt-2 uppercase">
              Automate. Operate. Implement.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mt-3 max-w-xs">
              AOI exists to close the AI capability gap — installing AI systems in businesses and certifying the professionals who lead them.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#C9A84C] font-semibold mb-4">Platform</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><Link href="/assessment" className="hover:text-[#C9A84C] transition">Assessment</Link></li>
                  <li><Link href="/course" className="hover:text-[#C9A84C] transition">Course</Link></li>
                  <li><Link href="/certification" className="hover:text-[#C9A84C] transition">Certification</Link></li>
                  <li><Link href="/transformation" className="hover:text-[#C9A84C] transition">AI Transformation</Link></li>
                  <li><Link href="/services" className="hover:text-[#C9A84C] transition">Solutions</Link></li>
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#C9A84C] font-semibold mb-4">Company</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><Link href="/about" className="hover:text-[#C9A84C] transition">About</Link></li>
                  <li><Link href="/case-studies" className="hover:text-[#C9A84C] transition">Case Studies</Link></li>
                  <li><Link href="/privacy" className="hover:text-[#C9A84C] transition">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-[#C9A84C] transition">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[#C9A84C] font-semibold mb-4">Contact</p>
            <p className="font-semibold text-white mb-2">naolmekonnen@gmail.com</p>
            <p className="text-sm text-gray-300">
              Questions about the platform or advisory services? We respond within 1 hour.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#081d33] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400">
          <p>© {currentYear} AI Operator Institute. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-[#C9A84C] transition">Privacy Policy</Link>
            <span className="text-gray-600">|</span>
            <Link href="/terms" className="hover:text-[#C9A84C] transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
