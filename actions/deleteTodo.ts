"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import prisma from "../lib/prisma";

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
