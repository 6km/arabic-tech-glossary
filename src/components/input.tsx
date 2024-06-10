import React from 'react'

export default function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="text"
      className="h-10 w-[280px] rounded-[6px] border border-[#D7DCE2] bg-[#E6EAEF] px-4 outline-none placeholder:text-[#9CA3AB]"
      style={{
        boxShadow: '0 8px 8px rgba(0,0,0,.1)',
      }}
      {...props}
    />
  )
}
