"use client"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { Category } from "@prisma/client"
import { User } from "@prisma/client"


export interface SidebarProps {
  className?: string,
  navItems: Pick<Category, "title" | "icon" | "id">[],
  user?:  {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
} | undefined
}

export function Sidebar({ className, navItems }: SidebarProps) {
  const [activeTabId, setActiveTabId] = useState(navItems[0].id);
  useEffect(() => {
    // 获取父元素和目标子元素
    const parentElement = document.getElementById('link-content');
    const targetElement = document.getElementById(activeTabId);

    // 确保两个元素都存在
    if (parentElement && targetElement) {
      // 获取目标元素的位置
      const targetPosition = targetElement.getBoundingClientRect().top;
      // 获取父元素的位置
      const parentPosition = parentElement.getBoundingClientRect().top;
      // 计算目标元素相对于父元素的位置
      const offsetPosition = targetPosition - parentPosition;
      // 考虑已经存在的滚动偏移
      const currentPosition = parentElement.scrollTop;
      // 滚动到目标元素的位置
      parentElement.scrollTop = currentPosition + offsetPosition - 10;
    }
  }, [activeTabId]);

  return (
      <nav className="after:h-[calc(100vh - 65px)] block min-h-screen max-w-60 flex-row flex-nowrap  bg-background font-semibold sm:px-6 sm:pb-6">
        {/* <a href="" className="mx-6 hidden h-16 flex-col items-center justify-center sm:flex">
          <Image
            src="https://afu-1255830993.cos.ap-shanghai.myqcloud.com/chato/test/upload/chato_image/avater/cb5c88616c60ebdbfd7fbfd990d7ef9e.png"
            alt=""
            width={200}
            height={60}
          />
        </a> */}
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
                            <span className="truncate">{category.title}</span>
                          </div>
                        </div>
                      )
                    })}
            </div>
        </div>
      </nav>
  )
}
