'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { AOILogo } from './logo'
import { Menu, X, ChevronDown, Zap, RefreshCw, MessageSquare, Settings, Star, Cpu, Users, ArrowRight, Award, Bot, FileText, Database } from 'lucide-react'
import { motion } from 'framer-motion'
import { useAuth } from '@/lib/auth/AuthContext'

const servicesMenu = [
  {
    title: 'AI SYSTEMS',
    items: [
      {
        label: 'Speed to Lead',
        href: '/services/speed-to-lead',
        description: 'Respond to leads in 60 seconds',
        icon: Zap,
      },
      {
        label: 'Customer Reactivation',
        href: '/services/reactivation',
        description: 'Win back past customers',
        icon: RefreshCw,
      },
      {
        label: 'Follow-Up Automation',
        href: '/services/follow-up',
        description: 'Never lose a lead again',
        icon: MessageSquare,
      },
    ],
  },
  {
    title: 'MORE SYSTEMS',
    items: [
      {
        label: 'AI Executive Assistant',
        href: '/services/executive-assistant',
        description: 'AI handles scheduling, email drafting, meeting prep, and routine communications automatically.',
        icon: Bot,
      },
      {
        label: 'Invoice Processing',
        href: '/services/invoice-processing',
        description: 'AI generates invoices, sends payment reminders, and tracks outstanding balances without manual entry.',
        icon: FileText,
      },
      {
        label: 'Data Entry Automation',
        href: '/services/data-entry',
        description: 'AI captures, organizes, and syncs data across your systems — eliminating manual entry and human error.',
        icon: Database,
      },
    ],
  },
]

const learnMenu = [
  { label: 'Free AI Quiz', href: '/assessment', description: 'Get your readiness score', icon: Users },
  { label: 'AI Readiness Course', href: '/course', description: 'Self-guided training', icon: Star },
  { label: 'AI Certification', href: '/certification', description: 'Verified credential', icon: Award },
]

export function Navigation() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [trainingOpen, setTrainingOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(true)
  const [mobileTrainingOpen, setMobileTrainingOpen] = useState(true)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const accountRef = useRef<HTMLDivElement | null>(null)
  const { user } = useAuth()
  const userDisplayName = user?.user_metadata?.first_name || user?.email?.split('@')[0] || 'Member'

  async function handleLogout(closeMenus?: () => void) {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    await supabase.auth.signOut()
    if (closeMenus) closeMenus()
    window.location.href = '/'
  }

  useEffect(() => {
    if (!servicesOpen && !trainingOpen) return

    const handleClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
        setTrainingOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [servicesOpen, trainingOpen])

  useEffect(() => {
    if (!accountOpen) return

    const handleClick = (event: MouseEvent) => {
      if (accountRef.current && !accountRef.current.contains(event.target as Node)) {
        setAccountOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [accountOpen])

  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-16 bg-white border-b border-gray-100 shadow-sm">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <AOILogo />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => {
                setServicesOpen((prev) => !prev)
                setTrainingOpen(false)
              }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A2342] hover:text-[#C9A84C] transition"
            >
              Solutions
              <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {servicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
                className="absolute left-0 top-full z-20 mt-3 w-[820px] rounded-2xl bg-white border border-gray-200 shadow-xl p-6"
              >
                <div className="grid grid-cols-2 gap-6">
                  {servicesMenu.map((column) => (
                    <div key={column.title}>
                      <p className="text-[11px] uppercase tracking-[0.3em] text-[#C9A84C] font-semibold mb-4">
                        {column.title}
                      </p>
                      <div className="space-y-3">
                        {column.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-start gap-3 rounded-2xl border border-gray-100 p-4 hover:bg-slate-50 transition"
                            onClick={() => setServicesOpen(false)}
                          >
                            <item.icon className="w-5 h-5 text-[#C9A84C] mt-1" />
                            <div>
                              <p className="font-semibold text-[#0A2342]">{item.label}</p>
                              <p className="text-sm text-slate-500">{item.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 border-t border-gray-200 pt-4 text-sm">
                  <Link href="/services" className="inline-flex items-center gap-2 font-semibold text-[#0A2342] hover:text-[#C9A84C]">
                    See All Solutions <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            )}
          </div>

          <Link href="/case-studies" className="text-sm font-semibold text-[#0A2342] hover:text-[#C9A84C] transition">
            Case Studies
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => {
                setTrainingOpen((prev) => !prev)
                setServicesOpen(false)
              }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A2342] hover:text-[#C9A84C] transition"
            >
              Training
              <ChevronDown className={`w-4 h-4 transition-transform ${trainingOpen ? 'rotate-180' : ''}`} />
            </button>

            {trainingOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
                className="absolute left-0 top-full z-20 mt-3 w-64 rounded-2xl bg-white border border-gray-200 shadow-xl p-6"
              >
                <div className="space-y-4">
                  {learnMenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-2xl border border-gray-100 p-4 hover:bg-slate-50 transition"
                      onClick={() => setTrainingOpen(false)}
                    >
                      <div className="flex items-start gap-3">
                        <item.icon className="w-5 h-5 text-[#C9A84C] mt-1" />
                        <div>
                          <p className="font-semibold text-[#0A2342]">{item.label}</p>
                          <p className="text-sm text-slate-500">{item.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-4 border-t border-gray-200 pt-4">
                  <Link href="/learn" className="text-sm font-semibold text-[#0A2342] hover:text-[#C9A84C]">
                    All Training →
                  </Link>
                </div>
              </motion.div>
            )}
          </div>

          <Link href="/about" className="text-sm font-semibold text-[#0A2342] hover:text-[#C9A84C] transition">
            About
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          {user ? (
            <div className="relative" ref={accountRef}>
              <button
                type="button"
                onClick={() => {
                  setAccountOpen((prev) => !prev)
                  setServicesOpen(false)
                  setTrainingOpen(false)
                }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A2342] hover:text-[#C9A84C] transition"
              >
                <div className="w-8 h-8 bg-[#C9A84C] rounded-full flex items-center justify-center text-white font-bold">
                  {user.email?.charAt(0).toUpperCase()}
                </div>
                <span>{userDisplayName}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${accountOpen ? 'rotate-180' : ''}`} />
              </button>
              {accountOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="absolute right-0 top-full z-20 mt-3 w-48 rounded-2xl bg-white border border-gray-200 shadow-xl p-4"
                >
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 text-sm text-[#0A2342] hover:bg-gray-50 rounded-lg transition"
                    onClick={() => setAccountOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    type="button"
                    onClick={() => void handleLogout(() => setAccountOpen(false))}
                    className="block w-full text-left px-4 py-2 text-sm text-[#0A2342] hover:bg-gray-50 rounded-lg transition"
                  >
                    Log Out
                  </button>
                </motion.div>
              )}
            </div>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="text-sm font-semibold px-5 py-2.5 rounded-lg border-2 border-[#C9A84C] text-[#0A2342] bg-white hover:bg-[#C9A84C]/10 transition-colors"
              >
                Login
              </Link>
              <Link href="/auth/signup" className="hidden lg:inline-flex items-center justify-center text-sm font-semibold px-5 py-2.5 rounded-lg border-2 border-[#C9A84C] text-[#0A2342] bg-white hover:bg-[#C9A84C]/10 transition-colors">Sign Up</Link>
            </>
          )}
          <Link
            href="/advisory"
            className="inline-flex items-center justify-center rounded-lg bg-[#C9A84C] px-5 py-2.5 text-sm font-bold text-[#0A2342] transition hover:bg-opacity-90"
          >
            Book Free Consultation
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-[#0A2342]"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="fixed inset-x-0 top-16 z-50 bg-[#0A2342] text-white p-6 shadow-2xl"
        >
          <div className="flex items-center justify-between mb-8">
            <AOILogo />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-white"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-4">
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left font-semibold text-white"
              onClick={() => setMobileSolutionsOpen((prev) => !prev)}
            >
              <span>Solutions</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileSolutionsOpen && (
              <div className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4">
                {servicesMenu.flatMap((column) => column.items).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm text-white hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/case-studies"
              className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-white hover:bg-white/10"
              onClick={() => setMobileOpen(false)}
            >
              Case Studies
            </Link>

            <button
              type="button"
              className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left text-sm font-semibold text-white"
              onClick={() => setMobileTrainingOpen((prev) => !prev)}
            >
              <span>Training</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${mobileTrainingOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileTrainingOpen && (
              <div className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4">
                {learnMenu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm text-white hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/about"
              className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-white hover:bg-white/10"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>

            <div className="border-t border-white/10 pt-4">
              {user ? (
                <>
                  <Link
                    href="/dashboard"
                    className="block rounded-2xl border border-white/10 px-4 py-4 text-center text-sm font-semibold text-white hover:bg-white/10"
                    onClick={() => setMobileOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => void handleLogout(() => setMobileOpen(false))}
                    className="block w-full rounded-2xl border border-white/10 px-4 py-4 text-center text-sm font-semibold text-white hover:bg-white/10 mt-3"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/auth/login"
                    className="block rounded-2xl border border-white/10 px-4 py-4 text-center text-sm font-semibold text-white hover:bg-white/10"
                    onClick={() => setMobileOpen(false)}
                  >
                    Login
                  </Link>
                  <Link href="/auth/signup"
                    className="block rounded-2xl border border-white/10 px-4 py-4 text-center text-sm font-semibold text-white hover:bg-white/10 mt-3"
                    onClick={() => setMobileOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
              <Link
                href="/advisory"
                className="mt-3 block rounded-2xl bg-[#C9A84C] px-4 py-4 text-center text-sm font-bold text-[#0A2342] hover:bg-opacity-90"
                onClick={() => setMobileOpen(false)}
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
