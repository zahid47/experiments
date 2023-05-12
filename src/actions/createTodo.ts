"use server";

import { revalidatePath } from "next/cache";
import prisma from "../../prisma/prisma";

async function createTodo(data: FormData) {
  const title = data.get("title");

  if (!title) return;

  await prisma.todo.create({
    data: {
      title: title.toString(),
    },
  });

  revalidatePath("/");
}

export default createTodo;
