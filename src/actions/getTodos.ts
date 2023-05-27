import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import prisma from "../../prisma/prisma";
import { getServerSession } from "next-auth";

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
