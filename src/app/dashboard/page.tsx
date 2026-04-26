'use client'

import { useAuthStore } from '../libs/stores/useAuthStore'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function DashboardPage() {
  const { isLoggedIn } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login')
    }
  }, [isLoggedIn, router])

  return (
    <main className='p-10'>
      <h1 className='text-3xl font-bold mb-4'>Dashboard</h1>
      <div className='bg-white p-6 rounded-lg shadow-sm border border-slate-200'>
        <p className='text-slate-700'>
          Welcome to the private zone! Only authenticated users can see this.
        </p>
      </div>
    </main>
  )
}
