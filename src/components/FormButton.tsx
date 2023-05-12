"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function FormButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-blue-500 rounded-lg px-4 py-2 ml-2 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
      type="submit"
      disabled={pending}
    >
      {children}
    </button>
  );
}
