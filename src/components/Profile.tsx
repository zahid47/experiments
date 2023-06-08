"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Wizard from "./Wizard";

export default function Profile() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="flex flex-col justify-center items-center mb-12">
      {user ? (
        <section>
          <p className="text-xl font-bold mb-4">
            Signed in as {user.email} <br />
          </p>

          <div className="flex flex-row justify-center items-center gap-2">
            <Wizard />
            
            <Link
              className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg"
              href={"/secret"}
            >
              Secret place
            </Link>

            <button
              className="bg-amber-500 hover:bg-amber-700 text-white py-2 px-4 rounded-lg"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </div>
        </section>
      ) : (
        <section>
          <button
            className="bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 rounded-lg"
            onClick={() => signIn("github")}
          >
            Login with GitHub
          </button>
        </section>
      )}
    </div>
  );
}
