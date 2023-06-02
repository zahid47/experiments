"use server";

import { revalidatePath } from "next/cache";
import prisma from "../../prisma/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

async function deleteTodo(id: number) {
  try {
    const session = await getServerSession(authOptions);

    // @ts-ignore
    const userId = session?.user?.id;

    if (!userId) return;

    await prisma.todo.delete({
      where: {
        id,
      },
    });

    revalidatePath("/");
  } catch (error) {
    console.error(error);
  }
}

export default deleteTodo;
