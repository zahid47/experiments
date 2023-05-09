import React from "react";
import Todo from "./Todo";

export default function Todos({ todos }: any) {
  return (
    <section>
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id}>
            <Todo todo={todo} />
          </li>
        ))}
      </ul>
    </section>
  );
}
