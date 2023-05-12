import getTodos from "@/actions/getTodos";
import Slider from "@/components/Slider";
import Todos from "@/components/Todos";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const limit = Number(searchParams.limit) || 1;
  const todos = await getTodos(limit);

  return (
    <main>
      <h1 className="text-center text-xl p-6">Todos</h1>
      <section className="flex flex-col justify-center items-center">
        <p className="text-sm p-4">Show how many?</p>
        <Slider currentValue={limit} />
      </section>
      <section className="pt-12">
        <Todos todos={todos} />
      </section>
    </main>
  );
}
