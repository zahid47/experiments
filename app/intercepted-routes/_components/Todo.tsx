import { revalidatePath } from "next/cache";
import deleteTodo from "@/actions/deleteTodo";

export default function Todo({ todo }: any) {
  return (
    <form>
      <section>
        <p className="p-1 text-center">
          {todo.title}

          <span className="pl-5">
            <button
              className="text-red-400"
              formAction={async () => {
                "use server";
                deleteTodo(todo.id);
                revalidatePath("/");
              }}
            >
              ⨉
            </button>
          </span>
        </p>
      </section>
    </form>
  );
}
