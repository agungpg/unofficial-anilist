'use client'
import { ReactNode } from 'react'
import React from 'react'

export default ({ children }: { children: ReactNode }) => {
  return (
    <main className='flex min-h-screen bg-[#1A1A1A] flex-col items-center justify-between  lg:py-10 md:py-10'>
      <div className='container'>{children}</div>
    </main>
  )
}
