
import { Button } from "@/components/ui/button";
import Link from "next/link";
import getSoraList from './list'

import SoraVideoBox from '@/components/sora-video'



export default async function SoraPage() {
  const soraList = await getSoraList()


  return <div className="cursor-pointer flex w-full h-full flex-col items-center justify-start overflow-y-scroll pt-10">
    <h1 className="text-center text-4xl font-extrabold !leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
      从文本创建视频
    </h1>
    <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-slate-600 dark:text-slate-400">
      <code className="font-mono font-medium text-sky-500 dark:text-sky-400">Sora </code>
      是一个<code className="font-mono font-medium text-sky-500 dark:text-sky-400"> 人工智能模型</code>，
      可以根据文本指令创建逼真和富有想象力的场景。
    </p>

    <div className="mt-6 flex justify-center space-x-6 text-sm sm:mt-10">
    <Button
      variant="default"
      size="default"
    >
      <Link target="_blank"  href="https://openai.com/research/video-generation-models-as-world-simulators">
          技术报告
      </Link>
    </Button>
    </div>
    <p className="mx-auto mt-6 max-w-3xl text-center  text-sm sm:text-lg text-slate-600 dark:text-slate-400">
      该页面上的所有视频均由<code className="font-mono font-medium text-sky-500 dark:text-sky-400"> Sora </code>
      直接生成，无需修改。
    </p>

    <div className="grid w-full max-w-[900px] grid-cols-12 grid-rows-2 gap-2 px-8 py-12 max-sm:pt-8">
      {
        soraList.map(item => {
          return <SoraVideoBox soraItem={item} />
        })
      }
    </div>

  </div>
}


