import cn from 'classnames'
import { forwardRef } from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => {
  return (
    <button
      className={cn(
        'flex h-10 w-10 select-none items-center justify-center rounded-[6px] border border-[#D7DCE2] bg-[#E3E5E8] pt-[4px] leading-10 text-[#0F172A]',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = 'Button'

export default Button
