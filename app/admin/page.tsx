'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/lib/auth/AuthContext'
import { useRouter } from 'next/navigation'
import { AOILogo } from '@/components/logo'
import { Users, CreditCard, FileText, TrendingUp, Shield, LogOut } from 'lucide-react'

interface User {
  id: string
  email: string
  first_name: string
  last_name: string
  job_title: string
  company: string
  created_at: string
}

interface Purchase {
  id: string
  user_id: string
  product: string
  stripe_session_id: string
  created_at: string
  user?: User
}

export default function AdminDashboard() {
  const { user, signOut } = useAuth()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('overview')
  const [users, setUsers] = useState<User[]>([])
  const [purchases, setPurchases] = useState<Purchase[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!user) {
      router.push('/auth/login')
      return
    }

    // Check if user is admin (you might want to add an admin role check)
    // For now, we'll assume the user is admin if they can access this page

    fetchData()
  }, [user, router])

  const fetchData = async () => {
    try {
      setLoading(true)

      // Fetch users
      const usersResponse = await fetch('/api/admin/users')
      if (usersResponse.ok) {
        const usersData = await usersResponse.json()
        setUsers(usersData)
      }

      // Fetch purchases
      const purchasesResponse = await fetch('/api/admin/purchases')
      if (purchasesResponse.ok) {
        const purchasesData = await purchasesResponse.json()
        setPurchases(purchasesData)
      }
    } catch (err) {
      setError('Failed to load admin data')
      console.error('Admin data fetch error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleSignOut = async () => {
    await signOut()
    router.push('/')
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-aoi-gold"></div>
      </div>
    )
  }

  const totalPurchases = purchases.length
  const recentPurchases = purchases.slice(0, 5)

  return (
    <div className="min-h-screen bg-aoi-lightgray">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <AOILogo />
              <div>
                <h1 className="text-xl font-bold text-aoi-navy">Admin Dashboard</h1>
                <p className="text-sm text-aoi-secondary">AOI Platform Management</p>
              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: TrendingUp },
              { id: 'users', label: 'Users', icon: Users },
              { id: 'purchases', label: 'Purchases', icon: CreditCard },
              { id: 'content', label: 'Content', icon: FileText },
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-aoi-navy text-white'
                      : 'text-aoi-secondary hover:text-aoi-navy hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-aoi-gold"></div>
          </div>
        ) : (
          <>
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-center gap-3">
                      <Users className="w-8 h-8 text-aoi-gold" />
                      <div>
                        <p className="text-sm text-aoi-secondary">Total Users</p>
                        <p className="text-2xl font-bold text-aoi-navy">{users.length}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-8 h-8 text-aoi-gold" />
                      <div>
                        <p className="text-sm text-aoi-secondary">Total Purchases</p>
                        <p className="text-2xl font-bold text-aoi-navy">{purchases.length}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-8 h-8 text-aoi-gold" />
                      <div>
                        <p className="text-sm text-aoi-secondary">Total Purchases</p>
                        <p className="text-2xl font-bold text-aoi-navy">{totalPurchases}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-center gap-3">
                      <Shield className="w-8 h-8 text-aoi-gold" />
                      <div>
                        <p className="text-sm text-aoi-secondary">Active Assessments</p>
                        <p className="text-2xl font-bold text-aoi-navy">-</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-aoi-navy">Recent Purchases</h3>
                  </div>
                  <div className="p-6">
                    {recentPurchases.length === 0 ? (
                      <p className="text-aoi-secondary">No recent purchases</p>
                    ) : (
                      <div className="space-y-4">
                        {recentPurchases.map((purchase) => (
                          <div key={purchase.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                            <div>
                              <p className="font-medium text-aoi-navy">
                                {purchase.user?.first_name} {purchase.user?.last_name}
                              </p>
                              <p className="text-sm text-aoi-secondary">{purchase.product}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-aoi-navy">{purchase.product}</p>
                              <p className="text-sm text-aoi-secondary">
                                {new Date(purchase.created_at).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Users Tab */}
            {activeTab === 'users' && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-aoi-navy">All Users</h3>
                  <p className="text-sm text-aoi-secondary mt-1">{users.length} total users</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {users.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-aoi-navy">
                              {user.first_name} {user.last_name}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-aoi-secondary">{user.email}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-aoi-secondary">{user.job_title}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-aoi-secondary">{user.company || '-'}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-aoi-secondary">
                              {new Date(user.created_at).toLocaleDateString()}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Purchases Tab */}
            {activeTab === 'purchases' && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-aoi-navy">All Purchases</h3>
                  <p className="text-sm text-aoi-secondary mt-1">{purchases.length} total purchases</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {purchases.map((purchase) => (
                        <tr key={purchase.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-aoi-navy">
                              {purchase.user?.first_name} {purchase.user?.last_name}
                            </div>
                            <div className="text-sm text-aoi-secondary">{purchase.user?.email}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-aoi-secondary capitalize">{purchase.product}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-aoi-secondary">
                              {new Date(purchase.created_at).toLocaleDateString()}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Content Tab */}
            {activeTab === 'content' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-aoi-navy mb-4">Content Management</h3>
                  <p className="text-aoi-secondary mb-6">
                    Manage platform content, courses, and certifications from this dashboard.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="p-4 border border-gray-200 rounded-lg hover:border-aoi-gold transition-colors">
                      <FileText className="w-8 h-8 text-aoi-gold mb-2" />
                      <h4 className="font-medium text-aoi-navy">Course Content</h4>
                      <p className="text-sm text-aoi-secondary">Manage course materials</p>
                    </button>
                    <button className="p-4 border border-gray-200 rounded-lg hover:border-aoi-gold transition-colors">
                      <Shield className="w-8 h-8 text-aoi-gold mb-2" />
                      <h4 className="font-medium text-aoi-navy">Certifications</h4>
                      <p className="text-sm text-aoi-secondary">Manage certification exams</p>
                    </button>
                    <button className="p-4 border border-gray-200 rounded-lg hover:border-aoi-gold transition-colors">
                      <TrendingUp className="w-8 h-8 text-aoi-gold mb-2" />
                      <h4 className="font-medium text-aoi-navy">Analytics</h4>
                      <p className="text-sm text-aoi-secondary">View content performance</p>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}