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
      className="ml-2 rounded-lg bg-blue-500 px-4 py-2 hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
      type="submit"
      disabled={pending}
    >
      {children}
    </button>
  );
}
