import Link from "next/link"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
// import { getCurrentUser } from "@/lib/session"
import { UserAccountNav } from "./user-account-nav"
import { SidebarProps } from "./sidebar"

import Image from "next/image"

export function SiteHeader({ navItems, user }: SidebarProps) {
  // const user = await getCurrentUser()
  return (
    <header className="z-40 w-full h-16 bg-background dark:border-slate-50/[0.06] lg:border-b lg:border-slate-900/10">
      <div className="container flex h-full items-center px-4 sm:justify-between sm:space-x-0">
          <a href="/" className="pl-2 pr-[73px] hidden  flex-col items-center justify-center sm:flex">
            <Image
              src="https://afu-1255830993.cos.ap-shanghai.myqcloud.com/chato/test/upload/chato_image/avater/cb5c88616c60ebdbfd7fbfd990d7ef9e.png"
              alt=""
              width={180}
              height={40}
              className="h-16"
            />
          </a>
        <MainNav items={siteConfig.mainNav} navItems={navItems} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <ThemeToggle />
            {
              user ? (
                <UserAccountNav user={user} />
              ) : (
                <Link
                  href="/login"
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "sm" }),
                    "px-4"
                  )}
                >
                  登录
                </Link>
              )
            }
          </nav>
        </div>
      </div>
    </header>
  )
}
