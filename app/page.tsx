import Link from "next/link";

export default async function Page({}: {}) {
  return (
    <main>
      <div className="flex h-screen items-center justify-center gap-4">
        <Link href="/intercepted-routes">
          <div className="flex h-48 w-48 cursor-pointer items-center justify-center rounded-xl bg-gray-800 text-center hover:bg-gray-700">
            Intercepted Routes
          </div>
        </Link>

        <Link href="/multistep-form">
          <div className="flex h-48 w-48 cursor-pointer items-center justify-center rounded-xl bg-gray-800 text-center hover:bg-gray-700">
            Multistep form
          </div>
        </Link>

        <Link href="/grid-dnd">
          <div className="flex h-48 w-48 cursor-pointer items-center justify-center rounded-xl bg-gray-800 text-center hover:bg-gray-700">
            Grid DnD
          </div>
        </Link>

        <Link href="/sort-checkboxes">
          <div className="flex h-48 w-48 cursor-pointer items-center justify-center rounded-xl bg-gray-800 text-center hover:bg-gray-700">
            Sort Checkboxes
          </div>
        </Link>
      </div>
    </main>
  );
}
