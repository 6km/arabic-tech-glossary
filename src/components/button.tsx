import cn from 'classnames'
import { forwardRef } from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => {
  return (
    <button
      className={cn(
        'flex h-10 min-w-10 select-none items-center justify-center rounded-lg border border-[#D7DCE2] bg-[#E6EAEF] px-2 text-sm font-medium text-[#0F172A] shadow-sm transition hover:bg-[#dce2e9] disabled:cursor-not-allowed disabled:opacity-40',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = 'Button'

export default Button
