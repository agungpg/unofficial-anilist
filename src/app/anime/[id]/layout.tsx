import React from 'react'

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex min-h-screen bg-[#1A1A1A] flex-col items-center justify-between lg:py-10 md:py-10'>
      <div className='container relative'>{children}</div>
    </main>
  )
}
