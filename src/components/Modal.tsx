"use client";

import { Modal } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function MyModal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <Modal
      opened={true}
      onClose={() => router.back()}
    >
      {children}
    </Modal>
  );
}
