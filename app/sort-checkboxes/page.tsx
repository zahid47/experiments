"use client";

import { useState } from "react";
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Checkbox } from "@/components/ui/checkbox";

interface SortableOptionType {
  id: string;
  position: number;
}

interface SortableOptionProps {
  option: SortableOptionType;
}

export function SortableOption({ option }: SortableOptionProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: option.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div key={option.id} className="flex items-center space-x-2">
        <Checkbox
          checked
          // onCheckedChange={() => {
          //   // first remove the option from selected options
          //   setSelectedOptions((prev) => prev.filter((o) => o !== option));
          //   // then add it back to the options
          //   setOptions((prev) => [...prev, option.id]);
          // }}
        />
        <label className="text-sm font-medium leading-none text-blue-300 hover:cursor-grab peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {option.id}
        </label>
      </div>
    </div>
  );
}

export default function page() {
  const [parent] = useAutoAnimate();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const [options, setOptions] = useState<string[]>([
    "cat",
    "dog",
    "bird",
    "fish",
    "rabbit",
  ]);
  const [selectedOptions, setSelectedOptions] = useState<SortableOptionType[]>([
    {
      id: "zero",
      position: 0,
    },
    {
      id: "two",
      position: 2,
    },
    {
      id: "one",
      position: 1,
    },
  ]);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setSelectedOptions((prev) => {
        const oldIndex = prev.findIndex((o) => o.id === active.id);
        const newIndex = prev.findIndex((o) => o.id === over.id);

        return arrayMove(prev, oldIndex, newIndex).map((o, i) => ({
          ...o,
          position: i,
        }));
      });
    }
  };

  const sortedOptions = selectedOptions.sort((a, b) => a.position - b.position);

  return (
    <div
      // ref={parent}
      className="ml-40 flex h-screen flex-col justify-center gap-2"
    >
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={sortedOptions}
          strategy={verticalListSortingStrategy}
        >
          {sortedOptions.map((option) => (
            <SortableOption key={option.id} option={option} />
          ))}
        </SortableContext>
      </DndContext>

      <pre>{JSON.stringify(sortedOptions)}</pre>

      {/* <hr />

      {options.map((option) => (
        <div key={option} className="flex items-center space-x-2">
          <Checkbox
            onCheckedChange={() => {
              // first remove the option from the list
              setOptions((prev) => prev.filter((o) => o !== option));
              // then add it to the selected options
              setSelectedOptions((prev) => [
                ...prev,
                { position: prev.length, id: option },
              ]);
            }}
          />
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {option}
          </label>
        </div>
      ))} */}
    </div>
  );
}
