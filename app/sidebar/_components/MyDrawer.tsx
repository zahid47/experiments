"use client";

import { useState } from "react";
import { Drawer } from "vaul";

export function MyDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer.Root shouldScaleBackground open={open}>
      <Drawer.Trigger asChild onClick={() => setOpen(true)}>
        <button>open vault</button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 mt-24 flex h-[96%] flex-col rounded-t-[10px] bg-gray-900">
          <div className="flex-1 rounded-t-[10px] bg-gray-700 p-4">
            <button className="float-right" onClick={() => setOpen(false)}>
              x
            </button>
            <div className="mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-gray-900" />
            <div className="mx-auto max-w-md">
              <Drawer.Title className="mb-4 font-medium">
                Welcome to your personal vault
              </Drawer.Title>
              <p className="mb-2">
                You can upload your files here and access them from anywhere.
                You can upload any type of file, from pictures to videos, as
                long as it's under 10MB. You can also create folders to organize
                your files.
              </p>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
