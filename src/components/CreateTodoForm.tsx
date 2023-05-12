import createTodo from "@/actions/createTodo";

export default function CreateTodoForm() {
  return (
    <form action={createTodo}>
      <input
        className="rounded-lg px-4 py-2 text-slate-800 focus:outline-none focus:ring-4 focus:ring-blue-500"
        type="text"
        name="title"
        placeholder="Take out the trash..."
      />
      <button className="bg-blue-500 rounded-lg px-4 py-2 ml-2 hover:bg-blue-600">
        Add Todo
      </button>
    </form>
  );
}
