"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { authOptions } from "@/lib/authOptions";
import prisma from "../lib/prisma";

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
