import { cn } from '@/lib/utils'

type LogoProps = React.HTMLAttributes<HTMLDivElement>

export default function Logo({
  children: _,
  className,
  ...restProps
}: LogoProps) {
  return (
    <div className={cn(className)} {...restProps}>
      <img src="/vite.svg" alt="logo" />
    </div>
  )
}
