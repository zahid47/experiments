"use client";

import { DndContext } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import { useDraggable } from "@dnd-kit/core";
import { useDroppable } from "@dnd-kit/core";
import { useState } from "react";

interface DnDProps {
  id: number | string;
  children: React.ReactNode;
}

function Draggable(props: DnDProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      className="h-48 w-48 rounded-xl bg-zinc-600 flex items-center justify-center cursor-grab"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {props.children}
    </div>
  );
}

function Droppable(props: DnDProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });

  const style = {
    background: isOver ? "#10b981" : undefined,
  };

  return (
    <div
      className="h-48 w-48 rounded-xl bg-zinc-800 flex items-center justify-center"
      ref={setNodeRef}
      style={style}
    >
      {props.children}
    </div>
  );
}

export default function Page() {
  const containers = Array.from({ length: 36 }, (_, i) => i + 1);
  const [bookParent, setBookParent] = useState(containers[0]);
  const [keyParent, setKeyParent] = useState(containers[1]);

  const draggableBook = (
    <Draggable id="draggable-book">
      <span className="text-zinc-800 text-center text-3xl">📖</span>
    </Draggable>
  );

  const draggableKey = (
    <Draggable id="draggable-key">
      <span className="text-zinc-800 text-center text-3xl">🗝️</span>
    </Draggable>
  );

  function handleDragEnd(event: DragEndEvent) {
    const { over, active } = event;

    if (over) {
      if (active.id === "draggable-book") {
        if (over.id === keyParent){
          setKeyParent(bookParent);
        }
        setBookParent(Number(over.id));
        return;
      }
      if (active.id === "draggable-key") {
        if (over.id === bookParent){
          setBookParent(keyParent);
        }
        setKeyParent(Number(over.id));
        return;
      }
    }
  }

  return (
    <div className="grid grid-cols-9 gap-4 p-4">
      <DndContext autoScroll={false} onDragEnd={handleDragEnd}>
        {containers.map((id) => (
          <Droppable key={id} id={id}>
            {bookParent === id ? (
              draggableBook
            ) : keyParent === id ? (
              draggableKey
            ) : (
              <span className="text-zinc-200 text-center text-3xl">
                📁 {id}
              </span>
            )}
          </Droppable>
        ))}
      </DndContext>
    </div>
  );
}
