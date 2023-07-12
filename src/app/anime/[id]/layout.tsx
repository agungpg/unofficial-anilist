import React from "react"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex min-h-screen bg-[#1A1A1A] flex-col items-center justify-between">
      <div className='container'>
        {children}
      </div>
    </main>
  )
}
