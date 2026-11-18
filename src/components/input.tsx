import cn from 'classnames'
import React from 'react'

export default function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="text"
      className={cn(
        'h-11 rounded-xl border border-[#D7DCE2] bg-[#E6EAEF] px-4 text-[#0F172A] shadow-sm outline-none transition placeholder:text-slate-500 focus:border-[#0F172A]/40 focus:bg-white focus:ring-4 focus:ring-[#0F172A]/10',
        className,
      )}
      {...props}
    />
  )
}
