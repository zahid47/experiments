import prisma from "../../prisma/prisma";

async function getTodos(limit: number) {
  return await prisma.todo.findMany({
    take: limit,
    orderBy: {
      id: "desc",
    },
  });
}

export default getTodos;
