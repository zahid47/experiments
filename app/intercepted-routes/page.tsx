import getTodos from "@/actions/getTodos";
import CreateTodoForm from "@/app/intercepted-routes/_components/CreateTodoForm";
import Profile from "@/app/intercepted-routes/_components/Profile";
import Slider from "@/app/intercepted-routes/_components/Slider";
import Todos from "@/app/intercepted-routes/_components/Todos";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const limit = Number(searchParams.limit) || 0;
  const session = await getServerSession(authOptions);

  //TODO: should not call getTodos if session is not valid
  const data = await getTodos(limit);
  const total = data[0];
  const todos = data[1];

  return (
    <main>
      <h1 className="p-6 text-center text-xl">Todos</h1>
      <Profile />
      {!!session && (
        <>
          <section className="flex flex-col items-center justify-center">
            <CreateTodoForm />
          </section>
          <section className="flex flex-col items-center justify-center">
            <p className="p-4 text-sm">Show how many? (Total: {total})</p>
            <Slider currentValue={limit} max={total} />
          </section>
          <section className="pt-12">
            <Todos todos={todos} />
          </section>
        </>
      )}
    </main>
  );
}
