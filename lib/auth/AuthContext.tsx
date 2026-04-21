'use client'

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { createClient as createSupabaseClient, type Session, type User } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

function getSupabase() {
  if (!supabaseUrl || !supabaseKey) {
    console.warn('Supabase configuration missing')
    return null
  }

  return createSupabaseClient(supabaseUrl, supabaseKey)
}

type AuthContextType = {
  user: User | null
  session: Session | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>
  signUp: (email: string, password: string) => Promise<{ error: Error | null }>
  signOut: () => Promise<{ error: Error | null }>
  resetPassword: (email: string) => Promise<{ error: Error | null }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const supabase = getSupabase()

    if (!supabase) {
      setLoading(false)
      return
    }

    const initialize = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession()

        setSession(session)
        setUser(session?.user ?? null)
      } catch {
        setSession(null)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    initialize()

    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession)
      setUser(newSession?.user ?? null)
      setLoading(false)
    })

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  const value = useMemo(
    () => ({
      user,
      session,
      loading,
      signIn: async (email: string, password: string) => {
        const supabase = getSupabase()
        if (!supabase) return { error: new Error('Supabase not configured') }
        try {
          const { error } = await supabase.auth.signInWithPassword({ email, password })
          return { error }
        } catch (error) {
          return { error: error instanceof Error ? error : new Error('Authentication failed') }
        }
      },
      signUp: async (email: string, password: string) => {
        const supabase = getSupabase()
        if (!supabase) return { error: new Error('Supabase not configured') }
        try {
          const { error } = await supabase.auth.signUp({ email, password })
          return { error }
        } catch (error) {
          return { error: error instanceof Error ? error : new Error('Signup failed') }
        }
      },
      signOut: async () => {
        const supabase = getSupabase()
        if (!supabase) return { error: null }
        try {
          const { error } = await supabase.auth.signOut()
          return { error }
        } catch (error) {
          return { error: error instanceof Error ? error : new Error('Sign out failed') }
        }
      },
      resetPassword: async (email: string) => {
        const supabase = getSupabase()
        if (!supabase) return { error: new Error('Supabase not configured') }
        try {
          const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/auth/login`,
          })
          return { error }
        } catch (error) {
          return { error: error instanceof Error ? error : new Error('Reset link failed') }
        }
      },
    }),
    [user, session, loading]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
