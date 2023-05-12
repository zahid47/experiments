import prisma from "../../prisma/prisma";

async function getTodos(limit: number) {
  return await prisma.todo.findMany({
    take: limit,
  });
}

export default getTodos;
