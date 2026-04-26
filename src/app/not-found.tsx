import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-slate-50 text-center px-4'>
      {/* Huge 404 text using tracking to make it look wide/cool */}
      <h2 className='text-[150px] md:text-[200px] font-black tracking-tighter text-slate-200 select-none'>
        404
      </h2>

      {/* Main message */}
      <div className='absolute'>
        <h1 className='text-4xl font-bold text-slate-900'>
          Page Lost in Space
        </h1>
        <p className='mt-4 text-lg text-slate-600 max-w-md'>
          The page you are looking for has drifted off into the digital void.
          Let&apos;s get you back to safety.
        </p>

        {/* Action button */}
        <Link
          href='/'
          className='mt-8 inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200'
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
