import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import prisma from "../lib/prisma";

async function getTodos(limit: number) {
  const session = await getServerSession(authOptions);
  // @ts-ignore
  const userId: string = session?.user?.id;

  if (!userId) return [0, []] as [number, []];

  return await prisma.$transaction([
    prisma.todo.count(),
    prisma.todo.findMany({
      // @ts-ignore
      where: { userId },
      take: limit,
      orderBy: { id: "desc" },
    }),
  ]);
}

export default getTodos;
