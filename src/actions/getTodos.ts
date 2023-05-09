import prisma from "../../prisma/prisma";

async function getTodos(limit: number) {
  const todos = await prisma.todos.findMany({
    take: limit,
  });

  return todos;
}

export default getTodos;
