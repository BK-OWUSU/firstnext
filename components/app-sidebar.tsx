'use client'
import * as React from "react"
import { ChevronRight } from "lucide-react"

import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { data } from "@/lib/data"
import { NavItem } from "@/types/types"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  // Track which group is open by title
  const [openGroup, setOpenGroup] = React.useState<string | null>(() => {
    // On first load, open the group whose child matches current route
    const activeGroup = data.navMain.find((group) =>
      group.items.some((child) => child.url === pathname)
    )
    return activeGroup ? activeGroup.title : null
  })

  // When route changes, update the open group
  React.useEffect(() => {
    const activeGroup = data.navMain.find((group) =>
      group.items.some((child) => child.url === pathname)
    )
    setOpenGroup(activeGroup ? activeGroup.title : null)
  }, [pathname])  // runs every time pathname changes
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent className="gap-0">
        {data.navMain.map((item) => (
          <Collapsible
            key={item.title}
            title={item.title}
            open={openGroup === item.title}  // ← controlled open state
            onOpenChange={(isOpen) => {
              // if opening this group, close others by setting only this one
              // if closing, set to null
              setOpenGroup(isOpen ? item.title : null)
            }}
            className="group/collapsible"
          >
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm"
              >
                <CollapsibleTrigger>
                  {item.title}{" "}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.items.map((child: NavItem) => (
                      <SidebarMenuItem key={child.title}>
                        <SidebarMenuButton asChild isActive={child.url === pathname}>
                          {child.isExternal ? (
                            <a href={child.url} target="_blank" rel="noopener noreferrer">
                              {child.title}
                            </a>
                          ) : (
                            <Link href={child.url}>{child.title}</Link>
                          )}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}