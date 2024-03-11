import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
// import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import getNavLinks from "./links"
import { getCurrentUser } from "@/lib/session"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "https://afu-1255830993.cos.ap-shanghai.myqcloud.com/chato/production/upload/chato_image/avater/9ffe570634a835c79564541ac088715f.png",
    shortcut: "https://afu-1255830993.cos.ap-shanghai.myqcloud.com/chato/production/upload/chato_image/avater/9ffe570634a835c79564541ac088715f.png",
    apple: "https://afu-1255830993.cos.ap-shanghai.myqcloud.com/chato/production/upload/chato_image/avater/9ffe570634a835c79564541ac088715f.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const navResources = await getNavLinks();
  const user = await getCurrentUser();
  const navItems = navResources.map((n: { title: any; icon: any; id: any }) => {
    return {
      title: n.title,
      icon: n.icon,
      id: n.id,
    }
  })
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head/>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          {/*
            defaultTheme: system、dark、light
          */}
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="container relative mx-auto h-screen overflow-hidden w-full px-0">
              {/* <div className="w-full"> */}
                <SiteHeader navItems={navItems} user={user} />
                <div style={{height: "calc(100% - 4rem)"}}>
                  {children}
                </div>
              {/* </div> */}
          </div>
            {/* <TailwindIndicator /> */}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
