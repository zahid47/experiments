"use server";

import { revalidatePath } from "next/cache";
import prisma from "../../prisma/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { z } from "zod";

const todoSchema = z.object({
  userId: z.string(),
  title: z.string().min(1).max(100),
});

async function createTodo(data: FormData) {
  try {
    const session = await getServerSession(authOptions);
    const title = data.get("title");
    // @ts-ignore
    const userId = session?.user?.id;

    const validatedData = todoSchema.parse({ userId, title });

    await prisma.todo.create({
      data: validatedData,
    });

    revalidatePath("/");
  } catch (error) {
    console.error(error);
  }
}

export default createTodo;
