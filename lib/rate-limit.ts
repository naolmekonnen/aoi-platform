/**
 * Simple in-memory rate limiting for API routes
 * Tracks requests by IP address
 */

interface RateLimitEntry {
  count: number
  resetTime: number
}

// Store rate limit data in memory
const rateLimitStore = new Map<string, RateLimitEntry>()

/**
 * Check if a request should be rate limited
 * @param ip IP address or identifier
 * @param maxRequests Maximum number of requests allowed
 * @param windowMs Time window in milliseconds
 * @returns true if request is allowed, false if rate limited
 */
export function checkRateLimit(
  ip: string,
  maxRequests: number,
  windowMs: number
): boolean {
  const now = Date.now()
  const entry = rateLimitStore.get(ip)

  // No entry exists - allow request and create entry
  if (!entry) {
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + windowMs,
    })
    return true
  }

  // Window has expired - reset
  if (now > entry.resetTime) {
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + windowMs,
    })
    return true
  }

  // Increment count
  entry.count++

  // Check if over limit
  if (entry.count > maxRequests) {
    return false
  }

  return true
}

/**
 * Get remaining requests in current window
 */
export function getRateLimitRemaining(
  ip: string,
  maxRequests: number,
  windowMs: number
): number {
  const now = Date.now()
  const entry = rateLimitStore.get(ip)

  if (!entry || now > entry.resetTime) {
    return maxRequests
  }

  return Math.max(0, maxRequests - entry.count)
}

/**
 * Get time until rate limit resets (in ms)
 */
export function getRateLimitReset(ip: string): number {
  const entry = rateLimitStore.get(ip)
  if (!entry) return 0

  const remaining = entry.resetTime - Date.now()
  return Math.max(0, remaining)
}

/**
 * Extract client IP from request headers
 */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }

  const xRealIp = request.headers.get('x-real-ip')
  if (xRealIp) {
    return xRealIp
  }

  // Fallback - this is a limitation in Next.js
  return 'unknown'
}

/**
 * Clean up old entries from rate limit store (call periodically)
 */
export function cleanupRateLimitStore() {
  const now = Date.now()
  for (const [ip, entry] of rateLimitStore.entries()) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(ip)
    }
  }
}

// Cleanup every 5 minutes
if (typeof global !== 'undefined') {
  if (!('rateLimitCleanupInterval' in global)) {
    ;(global as any).rateLimitCleanupInterval = setInterval(() => {
      cleanupRateLimitStore()
    }, 5 * 60 * 1000)
  }
}
