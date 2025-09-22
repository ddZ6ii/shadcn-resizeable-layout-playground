// import { useState } from 'react'

import { AppSidebar, Header } from '@/components/layout'
import { SidebarProvider } from '@/components/ui/sidebar'

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="h-dvh">
      <SidebarProvider defaultOpen={false} className="flex flex-col">
        <Header />

        <div className="flex h-full w-full grow-1 gap-4 overflow-hidden px-4 pt-2 pb-4">
          <AppSidebar />

          {children}
        </div>
      </SidebarProvider>
    </div>
  )
}
