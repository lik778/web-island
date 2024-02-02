"use client"
import { useState } from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import { Icons } from "./icons"
import { MobileSidebar } from "./mobile-sidebar"

interface MainNavProps {
  items?: NavItem[]
  navItems: any
}

export function MainNav({ items, navItems }: MainNavProps) {
  const [showMobileSidebar, setShowMobileSidebar] = useState<boolean>(false)
  return (
    <>
      <div className="flex items-center gap-6 md:gap-10">
        <div className="sm:hidden" onClick={() => setShowMobileSidebar(!showMobileSidebar)}>
          <Icons.menu />
        </div>
        {items?.length ? (
          <nav className="gap-6 md:flex">
            {items?.map(
              (item, index) =>
                !(item.href as string).includes('https') ? (
                  <Link
                    key={index}
                    href={item.href as string}
                    className={cn(
                      "flex items-center text-sm font-semibold text-muted-foreground hover:font-medium",
                      item.disabled && "cursor-not-allowed opacity-80"
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
        ) : null}
      </div>
      { showMobileSidebar && <MobileSidebar navItems={navItems} setShowMobileSidebar={setShowMobileSidebar} /> }
    </>
  )
}
