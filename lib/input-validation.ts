/**
 * Input sanitization and validation utilities
 * Prevent XSS, validate formats, and enforce length limits
 */

/**
 * Sanitize text input by trimming and removing potentially dangerous characters
 */
export function sanitizeText(input: string, maxLength: number = 500): string {
  if (!input) return ''
  
  return input
    .trim()
    .slice(0, maxLength)
    .replace(/[<>]/g, '') // Remove HTML-like characters
}

/**
 * Validate email format using regex
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254
}

/**
 * Sanitize and validate email
 */
export function sanitizeEmail(email: string): string {
  return email.trim().toLowerCase().slice(0, 254)
}

/**
 * Sanitize name (first/last name, etc.)
 */
export function sanitizeName(name: string, maxLength: number = 100): string {
  return sanitizeText(name, maxLength)
}

/**
 * Sanitize job title
 */
export function sanitizeJobTitle(title: string): string {
  return sanitizeText(title, 100)
}

/**
 * Sanitize company name
 */
export function sanitizeCompanyName(company: string): string {
  return sanitizeText(company, 100)
}

/**
 * Sanitize long text (like message bodies)
 */
export function sanitizeLongText(text: string, maxLength: number = 2000): string {
  return sanitizeText(text, maxLength)
}

/**
 * Validate password strength
 * At least 8 characters, with mix of upper, lower, and number
 */
export function validatePassword(password: string): {
  valid: boolean
  errors: string[]
} {
  const errors: string[] = []

  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long')
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter')
  }

  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter')
  }

  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number')
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}

/**
 * Validate form data for signup
 */
export function validateSignupData(data: {
  email: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
  jobTitle?: string
  company?: string
}): {
  valid: boolean
  errors: Record<string, string>
} {
  const errors: Record<string, string> = {}

  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Valid email is required'
  }

  if (!data.password || data.password.length < 8) {
    errors.password = 'Password must be at least 8 characters'
  }

  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match'
  }

  if (!data.firstName || sanitizeName(data.firstName).length === 0) {
    errors.firstName = 'First name is required'
  }

  if (!data.lastName || sanitizeName(data.lastName).length === 0) {
    errors.lastName = 'Last name is required'
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  }
}

/**
 * Validate advisory form data
 */
export function validateAdvisoryFormData(data: {
  name: string
  email: string
  company: string
  message: string
}): {
  valid: boolean
  errors: Record<string, string>
} {
  const errors: Record<string, string> = {}

  if (!data.name || sanitizeName(data.name).length === 0) {
    errors.name = 'Name is required'
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Valid email is required'
  }

  if (!data.company || sanitizeCompanyName(data.company).length === 0) {
    errors.company = 'Company is required'
  }

  if (!data.message || sanitizeLongText(data.message).length === 0) {
    errors.message = 'Message is required'
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  }
}
