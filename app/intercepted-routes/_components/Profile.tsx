"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="mb-12 flex flex-col items-center justify-center">
      {user ? (
        <section>
          <p className="mb-4 text-xl font-bold">
            Signed in as {user.email} <br />
          </p>

          <div className="flex flex-row items-center justify-center gap-2">
            <Link
              className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-700"
              href={"/intercepted-routes/secret"}
            >
              Secret place
            </Link>

            <button
              className="rounded-lg bg-amber-500 px-4 py-2 text-white hover:bg-amber-700"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </div>
        </section>
      ) : (
        <section>
          <button
            className="rounded-lg bg-teal-500 px-4 py-2 text-white hover:bg-teal-700"
            onClick={() => signIn("github")}
          >
            Login with GitHub
          </button>
        </section>
      )}
    </div>
  );
}
