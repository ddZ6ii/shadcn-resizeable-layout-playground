import { Logo, ModeToggle } from '@/components/ui'
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'

const headerClassName = 'col-span-2 flex h-fit justify-between px-4 pt-4 pb-2'

type HeaderProps = React.HTMLAttributes<HTMLDivElement>

export default function Header({ className, ...restProps }: HeaderProps) {
  const { isMobile } = useSidebar()

  if (isMobile) {
    return (
      <header className={cn(headerClassName, className)} {...restProps}>
        <div className="flex items-center gap-4">
          <Logo />
          <SidebarTrigger
            size="lg"
            className={cn(
              'text-sidebar-foreground/70 border-text-sidebar-foreground/70 rounded-full border p-1! px-4!',
              className,
            )}
          />
        </div>
        <ModeToggle />
      </header>
    )
  }

  return (
    <header className={cn(headerClassName, className)} {...restProps}>
      <Logo />
      <ModeToggle />
    </header>
  )
}
