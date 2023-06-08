"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
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
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
