import deleteTodo from "@/actions/deleteTodo";
import { revalidatePath } from "next/cache";

export default function Todo({ todo }: any) {
  return (
    <form>
      <section>
        <p className="text-center p-1">
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
