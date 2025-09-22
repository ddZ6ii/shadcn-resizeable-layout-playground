import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { forwardRef } from 'react'

type TooltipButtonProps = React.ComponentProps<typeof Button> & {
  tooltipText?: React.ReactNode
}

const TooltipButton = forwardRef<HTMLButtonElement, TooltipButtonProps>(
  function TooltipButton({ tooltipText, ...restProps }, ref) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button ref={ref} {...restProps} />
        </TooltipTrigger>
        <TooltipContent>{tooltipText}</TooltipContent>
      </Tooltip>
    )
  },
)

export default TooltipButton
