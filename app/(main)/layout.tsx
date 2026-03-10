"use client"
import { AppSidebar } from "@/components/app-sidebar"
import ProtectedRoute from "@/components/auth/ProtectedRoute"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
//
import { usePathname } from "next/navigation"

export default function MainLayout({children}:{children: React.ReactNode}) {
  const pathname = usePathname();
  // const pageTitle = pathname === "/" ? "Dashboard" : pathname.substring(1).charAt(0).toUpperCase() + pathname.substring(2);
  const title = pathname.split("/")[1];
  const pageTitle = title.includes("_") ? title.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") : title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <div>
      <ProtectedRoute>
      <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">multiPOS</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>{pageTitle}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          {/* <p className="bg-green-300 px-2 py-1 rounded-sm font-bold cursor-pointer">Reports Analysis</p> */}
        </header>
       {/* Content — changes per route */}
        <main className="flex flex-1 flex-col gap-4 p-4">
          {children}
        </main>
      </SidebarInset>
     </SidebarProvider>
      </ProtectedRoute>
    </div>
  )
}
