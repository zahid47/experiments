import React from "react";
import Todo from "./Todo";

export default function Todos({ todos }: any) {
  if (!todos.length) {
    return <p className="text-center">No todos yet!</p>;
  }

  return (
    <ul>
      {todos.map((todo: any) => (
        <li key={todo.id}>
          <Todo todo={todo} />
        </li>
      ))}
    </ul>
  );
}
