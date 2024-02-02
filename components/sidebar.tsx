"use client"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { Category } from "@prisma/client"


export interface SidebarProps {
  className?: string,
  navItems: Pick<Category, "title" | "icon" | "id">[],
}

export function Sidebar({ className, navItems }: SidebarProps) {
  const [activeTabId, setActiveTabId] = useState(navItems[0].id);
  useEffect(() => {
    const ele = document.getElementById(activeTabId);
    const elePosition = (ele?.getBoundingClientRect().top || 0);
    const offsetPosition = elePosition + window.pageYOffset - 75;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }, [activeTabId]);
  return (
      <nav className="after:h-[calc(100vh - 65px)] block min-h-screen max-w-60 flex-row flex-nowrap  bg-background font-semibold sm:px-6 sm:pb-6">
        <a href="" className="mx-6 hidden h-16 flex-col items-center justify-center sm:flex">
          <Image
            src="https://afu-1255830993.cos.ap-shanghai.myqcloud.com/chato/test/upload/chato_image/avater/cb5c88616c60ebdbfd7fbfd990d7ef9e.png"
            alt=""
            width={200}
            height={60}
          />
        </a>
        <div className="flex-start relative z-40 flex h-auto w-full flex-1 flex-col overflow-y-auto overflow-x-hidden rounded pt-4 opacity-100">
            <div className={cn("flex list-none flex-col pb-12 md:min-w-full md:flex-col", className)}>
                    { navItems.map((category) => {
                      return (
                        <div
                          className={`mb-2 block cursor-pointer rounded-lg hover:bg-gray-100 hover:text-purple-500 ${activeTabId === category.id ? "bg-gray-100 text-purple-500" : "text-primary"}`}
                          key={category.id}
                          onClick={() => setActiveTabId(category.id)}
                        >
                          <div className="scale relative  flex items-center gap-2 rounded-r-lg p-2 transition-colors ease-in-out before:transition-colors hover:no-underline sm:border-l-0 sm:pl-6 sm:before:absolute sm:before:left-[-5px] sm:before:top-[2px] sm:before:h-[calc(100%-4px)] sm:before:w-[10px] sm:before:rounded-full sm:before:transition-colors">
                            <div className="relative flex shrink-0">
                              <Image
                                src={category.icon}
                                alt=""
                                className="block"
                                width={20}
                                height={20}
                              />
                            </div>
                            <span className="overflow-hidden text-ellipsis whitespace-nowrap">{category.title}</span>
                          </div>
                        </div>
                      )
                    })}
            </div>
        </div>
      </nav>
  )
}
