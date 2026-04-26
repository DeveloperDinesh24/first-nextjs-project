'use client'

import { useAuthStore } from '../../libs/stores/useAuthStore'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function DashboardPage() {
  const { isLoggedIn, logout } = useAuthStore()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login')
    }
  }, [isLoggedIn, router])

  return (
    <main className='p-10'>
      <div className='w-full h-10 flex items-center justify-between mb-6'>
        <h1 className='text-3xl font-bold mb-4'>Dashboard</h1>
        <button
          onClick={handleLogout}
          className='bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition'
        >
          Logout
        </button>
      </div>
      <div className='bg-white p-6 rounded-lg shadow-sm border border-slate-200'>
        <p className='text-slate-700'>
          Welcome to the private zone! Only authenticated users can see this.
        </p>
      </div>
    </main>
  )
}
