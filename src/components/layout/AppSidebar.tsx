import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'

type Item = {
  id: number
  title: string
  url: string
}

const ITEMS: Item[] = [
  {
    id: 1,
    title: 'Item 1',
    url: '#',
  },
  {
    id: 2,
    title: 'Item 2',
    url: '#',
  },
  {
    id: 3,
    title: 'Item 3',
    url: '#',
  },
  {
    id: 4,
    title: 'Item 4',
    url: '#',
  },
]

export default function AppSidebar() {
  const { isMobile, state } = useSidebar()

  return (
    <Sidebar collapsible="icon" className="h-full">
      {!isMobile && (
        <SidebarHeader className="items-end p-0 pr-4">
          <SidebarMenu>
            <SidebarMenuItem className="w-full">
              <SidebarMenuButton asChild>
                <SidebarTrigger className="text-sidebar-foreground/70 hover:bg-accent ml-auto w-fit rounded-full" />
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
      )}

      {(state === 'expanded' || isMobile) && (
        <>
          <SidebarContent className={cn(isMobile ? 'p-4' : 'pt-0')}>
            <SidebarGroup className="pt-0">
              <SidebarGroupContent>
                <SidebarGroupLabel className="px-0 whitespace-nowrap">
                  My Items
                </SidebarGroupLabel>
                <SidebarMenu>
                  {ITEMS.map((item) => (
                    <SidebarMenuItem
                      key={item.id}
                      className="text-sidebar-foreground/70"
                    >
                      <SidebarMenuButton
                        className="cursor-pointer"
                        onClick={() => {
                          console.log(`Clicked on ${item.title}`)
                        }}
                      >
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter />
        </>
      )}
    </Sidebar>
  )
}
