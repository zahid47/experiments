import prisma from "@/lib/prisma";
import News from "./News";

export default async function page() {
  const items = await prisma.news.findMany();

  return <News initialNews={items} />;
}
