'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { AOILogo } from '@/components/logo'
import { useAuth } from '@/lib/auth/AuthContext'
import { Eye, EyeOff, CheckCircle, XCircle } from 'lucide-react'

export default function SignupPage() {
  const router = useRouter()
  const { signUp } = useAuth()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    company: '',
    password: '',
    confirmPassword: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})
  const [captchaAnswer, setCaptchaAnswer] = useState('')
  const [captchaQuestion, setCaptchaQuestion] = useState('')

  // Generate simple math CAPTCHA
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    setCaptchaQuestion(`${num1} + ${num2}`)
    return num1 + num2
  }

  const [expectedCaptcha, setExpectedCaptcha] = useState(() => generateCaptcha())

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    if (validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: '',
      })
    }
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}

    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required'
    } else if (formData.firstName.trim().length < 2) {
      errors.firstName = 'First name must be at least 2 characters'
    }

    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required'
    } else if (formData.lastName.trim().length < 2) {
      errors.lastName = 'Last name must be at least 2 characters'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }

    const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required'
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      errors.phone = 'Please enter a valid phone number'
    }

    if (!formData.jobTitle.trim()) {
      errors.jobTitle = 'Job title is required'
    }

    if (!formData.password) {
      errors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters'
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      errors.password = 'Password must contain uppercase, lowercase, and number'
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match'
    }

    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (!validateForm()) {
      setLoading(false)
      return
    }

    // Check CAPTCHA
    if (parseInt(captchaAnswer) !== expectedCaptcha) {
      setError('Incorrect security check answer. Please try again.')
      setCaptchaAnswer('')
      setExpectedCaptcha(generateCaptcha())
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email.trim().toLowerCase(),
          password: formData.password,
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          phone: formData.phone.trim(),
          jobTitle: formData.jobTitle.trim(),
          company: formData.company.trim(),
          honeypot: '', // Empty honeypot field
          captchaAnswer: parseInt(captchaAnswer),
          expectedCaptcha
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Signup failed. Please try again.')
        // Regenerate CAPTCHA on error
        setCaptchaAnswer('')
        setExpectedCaptcha(generateCaptcha())
        return
      }

      window.location.replace('/dashboard')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      // Regenerate CAPTCHA on error
      setCaptchaAnswer('')
      setExpectedCaptcha(generateCaptcha())
    } finally {
      setLoading(false)
    }
  }

  const getPasswordStrength = (password: string) => {
    if (!password) return { strength: 0, label: '' }
    let strength = 0
    if (password.length >= 8) strength++
    if (/[a-z]/.test(password)) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/\d/.test(password)) strength++
    if (/[^a-zA-Z\d]/.test(password)) strength++

    const labels = ['', 'Weak', 'Fair', 'Good', 'Strong', 'Very Strong']
    return { strength, label: labels[strength] }
  }

  const passwordStrength = getPasswordStrength(formData.password)

  return (
    <div className="min-h-screen bg-aoi-navy flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
      >
        <div className="flex justify-center mb-6">
          <AOILogo />
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#0A2342] mb-2">Join AOI</h1>
          <p className="text-gray-600">Create your account to start your AI transformation journey</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm flex items-start gap-2">
            <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#0A2342] mb-2">First Name *</label>
              <input
                type="text"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                autoComplete="given-name"
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent outline-none transition-all ${
                  validationErrors.firstName ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                }`}
              />
              {validationErrors.firstName && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <XCircle className="w-4 h-4" />
                  {validationErrors.firstName}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0A2342] mb-2">Last Name *</label>
              <input
                type="text"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                autoComplete="family-name"
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent outline-none transition-all ${
                  validationErrors.lastName ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                }`}
              />
              {validationErrors.lastName && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <XCircle className="w-4 h-4" />
                  {validationErrors.lastName}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0A2342] mb-2">Email Address *</label>
            <input
              type="email"
              name="email"
              placeholder="john.doe@company.com"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent outline-none transition-all ${
                validationErrors.email ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
              }`}
            />
            {validationErrors.email && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <XCircle className="w-4 h-4" />
                {validationErrors.email}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0A2342] mb-2">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              placeholder="(555) 555-5555"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent outline-none transition-all ${
                validationErrors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
              }`}
            />
            {validationErrors.phone && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <XCircle className="w-4 h-4" />
                {validationErrors.phone}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0A2342] mb-2">Job Title *</label>
            <input
              type="text"
              name="jobTitle"
              placeholder="Marketing Director"
              value={formData.jobTitle}
              onChange={handleChange}
              autoComplete="organization-title"
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent outline-none transition-all ${
                validationErrors.jobTitle ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
              }`}
            />
            {validationErrors.jobTitle && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <XCircle className="w-4 h-4" />
                {validationErrors.jobTitle}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0A2342] mb-2">Company</label>
            <input
              type="text"
              name="company"
              placeholder="Acme Corporation"
              value={formData.company}
              onChange={handleChange}
              autoComplete="organization"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent outline-none transition-all hover:border-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0A2342] mb-2">Password *</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Create a strong password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="new-password"
                className={`w-full px-4 py-3 pr-12 border rounded-xl focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent outline-none transition-all ${
                  validationErrors.password ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {formData.password && (
              <div className="mt-2">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        passwordStrength.strength <= 1 ? 'bg-red-500' :
                        passwordStrength.strength <= 2 ? 'bg-yellow-500' :
                        passwordStrength.strength <= 3 ? 'bg-blue-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${(passwordStrength.strength / 5) * 100}%` }}
                    />
                  </div>
                  <span className={`text-xs font-medium ${
                    passwordStrength.strength <= 1 ? 'text-red-600' :
                    passwordStrength.strength <= 2 ? 'text-yellow-600' :
                    passwordStrength.strength <= 3 ? 'text-blue-600' : 'text-green-600'
                  }`}>
                    {passwordStrength.label}
                  </span>
                </div>
                <div className="text-xs text-gray-500 space-y-1">
                  <div className="flex items-center gap-1">
                    {formData.password.length >= 8 ? <CheckCircle className="w-3 h-3 text-green-500" /> : <XCircle className="w-3 h-3 text-gray-400" />}
                    At least 8 characters
                  </div>
                  <div className="flex items-center gap-1">
                    {/[a-z]/.test(formData.password) ? <CheckCircle className="w-3 h-3 text-green-500" /> : <XCircle className="w-3 h-3 text-gray-400" />}
                    Lowercase letter
                  </div>
                  <div className="flex items-center gap-1">
                    {/[A-Z]/.test(formData.password) ? <CheckCircle className="w-3 h-3 text-green-500" /> : <XCircle className="w-3 h-3 text-gray-400" />}
                    Uppercase letter
                  </div>
                  <div className="flex items-center gap-1">
                    {/\d/.test(formData.password) ? <CheckCircle className="w-3 h-3 text-green-500" /> : <XCircle className="w-3 h-3 text-gray-400" />}
                    Number
                  </div>
                </div>
              </div>
            )}
            {validationErrors.password && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <XCircle className="w-4 h-4" />
                {validationErrors.password}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0A2342] mb-2">Confirm Password *</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                autoComplete="new-password"
                className={`w-full px-4 py-3 pr-12 border rounded-xl focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent outline-none transition-all ${
                  validationErrors.confirmPassword ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {validationErrors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <XCircle className="w-4 h-4" />
                {validationErrors.confirmPassword}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0A2342] mb-2">
              Security Check: {captchaQuestion} = ? *
            </label>
            <input
              type="text"
              value={captchaAnswer}
              onChange={(e) => setCaptchaAnswer(e.target.value)}
              placeholder="Enter the answer"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent outline-none transition-all hover:border-gray-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 inline-flex items-center justify-center rounded-full bg-[#C9A84C] px-6 py-4 text-base font-semibold text-[#0A2342] shadow-xl shadow-[#C9A84C]/20 transition hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-[#0A2342] border-t-transparent rounded-full animate-spin"></div>
                Creating Account...
              </div>
            ) : (
              'Create Account'
            )}
          </button>
        </form>

        {/* Honeypot field for bot protection */}
        <div className="hidden">
          <input
            type="text"
            name="honeypot"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-[#C9A84C] hover:text-[#0A2342] font-semibold transition-colors">
              Sign in here
            </Link>
          </p>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-xl">
          <p className="text-xs text-gray-600 text-center">
            By creating an account, you agree to our{' '}
            <Link href="/terms" className="text-[#C9A84C] hover:underline">Terms of Service</Link>
            {' '}and{' '}
            <Link href="/privacy" className="text-[#C9A84C] hover:underline">Privacy Policy</Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
