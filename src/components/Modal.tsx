"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

export default function MyModal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <Dialog
      defaultOpen
      onOpenChange={() => {
        router.back();
      }}
    >
      <DialogContent>
        <DialogHeader>{children}</DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
