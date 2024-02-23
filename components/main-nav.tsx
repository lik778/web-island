"use client"
import { useState, useMemo } from "react"
import { usePathname } from 'next/navigation'
import Link from "next/link"
import useLayout from '@/composables/useLayout'

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import { Icons } from "./icons"
import { MobileSidebar } from "./mobile-sidebar"
import { siteConfig } from '@/config/site'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface MainNavProps {
  items?: NavItem[]
  navItems: any
}

export function MainNav({ items, navItems }: MainNavProps) {
  const isMoble = useLayout()
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  // const [showMobileSidebar, setShowMobileSidebar] = useState<boolean>(false)
  const isActive = (href: string) => pathname === href;
  // onClick={() => setShowMobileSidebar(!showMobileSidebar)}
  const title = useMemo(() => {
    const filterMainNavItem = siteConfig.mainNav.filter((item) => item.href === pathname)
    if (filterMainNavItem.length > 0) {
      return filterMainNavItem[0].title
    }
    return ''
  }, [pathname])
  return (
    <>
      <div className="flex items-center gap-6 md:gap-10">
        <div className="sm:hidden" >
          <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
            <DropdownMenuTrigger asChild>
              <Icons.menu onClick={() => setMenuOpen(!menuOpen)} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                {
                  items?.map((item, index) => (
                    <DropdownMenuItem
                    onClick={() => setMenuOpen(false)}
                    className={ isActive(item.href as string) ? 'bg-sky-500 dark:bg-sky-400' : '' }
                    >
                        {
                          !(item.href as string).includes('https') ? (
                            <Link
                              key={index}
                              href={item.href as string}
                              className={cn(
                                "flex items-center text-sm font-semibold text-muted-foreground hover:font-medium",
                                item.disabled && "cursor-not-allowed opacity-80",
                                isActive(item.href as string)  && 'text-black dark:text-white'
                              )}
                            >
                              {item.title}
                            </Link>
                          ) : <a
                            href={item.href}
                            className={cn(
                              "flex items-center text-sm font-semibold text-muted-foreground hover:font-medium",
                              item.disabled && "cursor-not-allowed opacity-80"
                            )}
                            target="_blank"
                            rel="noreferrer">
                            {item.title}
                          </a>
                        }
                    </DropdownMenuItem>
                  ))
                }
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {
        items?.length && !isMoble ? (
          <nav className="gap-6 md:flex">
            {items?.map(
              (item, index) =>
                !(item.href as string).includes('https') ? (
                  <Link
                    key={index}
                    href={item.href as string}
                    className={cn(
                      "flex items-center text-sm font-semibold text-muted-foreground hover:font-medium",
                      item.disabled && "cursor-not-allowed opacity-80",
                      isActive(item.href as string)  && 'text-black dark:text-white'
                    )}
                  >
                    {item.title}
                  </Link>
                ) : <a
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-semibold text-muted-foreground hover:font-medium",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                  target="_blank"
                  rel="noreferrer">
                  {item.title}
                </a>
            )}
          </nav>
        ) : title }
      </div>
      {/* { showMobileSidebar && <MobileSidebar navItems={navItems} setShowMobileSidebar={setShowMobileSidebar} /> } */}
    </>
  )
}
