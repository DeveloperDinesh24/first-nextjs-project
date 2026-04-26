'use client'

import { useEffect } from 'react'
import { useAuthStore } from '../../../libs/stores/useAuthStore'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const { login, isLoggedIn } = useAuthStore()
  const router = useRouter()

  const handleLogin = () => {
    login()
    router.push('/dashboard')
  }
  useEffect(() => {
    if (isLoggedIn) {
      router.push('/dashboard')
    }
  }, [isLoggedIn, router])

  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <div className='p-8 border rounded-lg shadow-lg bg-white'>
        <h1 className='text-2xl text-slate-800 font-bold mb-4'>Login</h1>
        <p className='mb-6 text-slate-600'>
          Click the button below to simulate authentication.
        </p>

        <button
          onClick={handleLogin}
          className='w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition'
        >
          Sign In
        </button>
      </div>
    </main>
  )
}
