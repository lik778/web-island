import { Sidebar } from "@/components/sidebar"
import getNavLinks from "./links"
import { LinkContent } from "@/components/link-content"
import { SiteFooter } from "@/components/site-footer";

export const revalidate = 24 * 60 * 60;

export default async function IndexPage() {
  const navResources = await getNavLinks();
  const navItems = navResources.map((n: { title: any; icon: any; id: any }) => {
    return {
      title: n.title,
      icon: n.icon,
      id: n.id,
    }
  })
  return <div className="flex h-full">
        <div className="hidden w-[16rem] flex-shrink-0 transition-all duration-300 ease-in-out sm:block">
         <Sidebar navItems={navItems} />
        </div>
        <div id="link-content" className="h-full overflow-y-scroll scroll-smooth">
          {/* @ts-expect-error Async Server Component */}
          <LinkContent navResources={navResources} />
          <SiteFooter/>
        </div>
      </div>
}
