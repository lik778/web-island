import prisma from "@/lib/db";
import type { Prisma } from "@prisma/client";

export default async function getSoraList() {
  const res = await prisma.sora.findMany({
    orderBy: [
      {
        id: 'asc',
      }
    ]
  })
  return res;
}

export type SoraWithList = Prisma.PromiseReturnType<typeof getSoraList>
