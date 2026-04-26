export default function Loading() {
  return (
    <div className='flex h-[80vh] w-full flex-col items-center justify-center gap-4'>
      <div
        className='h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600'
        role='status'
        aria-label='loading'
      />
      <p className='text-sm font-medium text-slate-600 animate-pulse'>
        Loading your dashboard...
      </p>
    </div>
  )
}
