import Link from 'next/link'

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col items-center justify-center p-8 text-center bg-slate-50'>
      <h1 className='text-5xl font-bold text-slate-900 mb-6'>
        Welcome to My Next.js Playground
      </h1>
      <p className='text-xl text-slate-600 mb-8 max-w-md'>
        This is a clean, modular landing page. I&apos;m building this to master
        the Next.js App Router, layout architecture, and client state
        management.
      </p>

      <div className='flex gap-4'>
        <Link
          href='/login'
          className='px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition'
        >
          Get Started
        </Link>
        <Link
          href='/dashboard'
          className='px-6 py-3 border text-slate-900 border-slate-300 rounded-lg font-semibold hover:bg-slate-100 transition'
        >
          View Dashboard
        </Link>
      </div>
    </main>
  )
}
