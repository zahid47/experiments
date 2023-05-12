import React from "react";

export default function Todo({ todo }: any) {
  return (
    <section>
      <p className="text-center p-1">{todo.title}</p>
    </section>
  );
}
