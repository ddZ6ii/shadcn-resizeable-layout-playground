import { Moon, Sun, SunMoon } from 'lucide-react'

import { TooltipButton } from '@/components/ui'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { useMode } from '@/hooks'
import { cn } from '@/lib/utils'

const baseIconClasses = 'h-[1.2rem] w-[1.2rem] transition-all'

export default function ModeToggle() {
  const { mode, changeMode } = useMode()

  return (
    <DropdownMenu modal>
      <DropdownMenuTrigger asChild>
        <TooltipButton
          variant="outline"
          size="icon"
          tooltipText={`Change mode (${mode})`}
          className="rounded-full"
        >
          <Sun
            className={cn(
              baseIconClasses,
              'scale-100 rotate-0 dark:scale-0 dark:-rotate-90',
            )}
          />
          <Moon
            className={cn(
              baseIconClasses,
              'dark-only:scale-100 dark-only:rotate-0 absolute scale-0 rotate-90',
            )}
          />
          <SunMoon
            className={cn(
              baseIconClasses,
              'system:scale-100 system:rotate-0 absolute scale-0 rotate-90',
            )}
          />
          <span className="sr-only">Change mode (current is {mode})</span>
        </TooltipButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => {
            changeMode('light')
          }}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            changeMode('dark')
          }}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            changeMode('system')
          }}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
