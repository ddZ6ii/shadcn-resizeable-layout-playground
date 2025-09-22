import { Aside, Layout, Main } from '@/components/layout'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import { useIsMobile } from '@/hooks/use-mobile'
import { ModeContextProvider } from '@/providers'

const baseStyling =
  'h-full w-full overflow-y-auto scrollbar-track-border/50 scrollbar-thumb-foreground/10 scrollbar-thin scrollbar-thumb-rounded-full [scrollbar-gutter:stable]'

export default function App() {
  const isMobile = useIsMobile()

  return (
    <ModeContextProvider defaultMode="system" storageKey="app_theme">
      <Layout>
        <ResizablePanelGroup
          direction={isMobile ? 'vertical' : 'horizontal'}
          className="h-full gap-4"
        >
          <ResizablePanel defaultSize={70} minSize={20} maxSize={80}>
            <Main className={baseStyling} />
          </ResizablePanel>

          <ResizableHandle withHandle />

          <ResizablePanel defaultSize={30} minSize={20} maxSize={80}>
            <Aside className={baseStyling} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </Layout>
    </ModeContextProvider>
  )
}
