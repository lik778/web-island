"use client"

import { useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Sora } from "@prisma/client"

export interface SoraVideoBoxProps {
  soraItem: Sora,
}

export default  function SoraVideoBox({ soraItem }: SoraVideoBoxProps) {
  const [soraUrl, setSoraUrl] = useState(soraItem.url)
  const [soraVideoVisible, setSoraVideoVisible] = useState(false)

  const onHandleSoraClick = (url: string) => {
    setSoraVideoVisible(true)
    setSoraUrl(url)
  }

  return (
    <SoraDialog soraItem={soraItem}>
        <div
          className="relative col-span-12 box-border  w-full overflow-hidden rounded-2xl sm:col-span-4"
          >
            <div
            className="h-[300px] w-full"
            style={{
              backgroundImage: `url(${soraItem.icon})`,
              backgroundSize: 'cover',
            }}
            onClick={() => onHandleSoraClick(soraItem.url)}
            />
            <div className="z-999 absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-3  text-xs text-white ">
              <p className="line-clamp-5">{soraItem.description}</p>
            </div>
          </div>
    </SoraDialog>
  )
}

function SoraDialog({ children, soraItem }: { children: React.ReactNode, soraItem: Sora}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
      {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
          <DialogDescription>
            <p>
            {soraItem.description}
            </p>
            <p className="mt-4">
            {soraItem.title}
            </p>
          </DialogDescription>
        </DialogHeader>
        <video
        width="100%"
        height="auto"
        controls
        autoPlay
        muted
        preload="auto"
        poster={soraItem.icon}
        >
          <source src={soraItem.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </DialogContent>
    </Dialog>
  )
}
