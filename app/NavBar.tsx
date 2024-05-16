"use client";

import { SessionProvider, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex bg-slate-200 p-5 space-x-3">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users">Users</Link>
      {status === "loading" && <div>Loading...</div>}
      {status === "authenticated" && (
        <div>
          {session.user!.name}
          <Link href="/api/auth/signout" className="ml-3">
            Sign out
          </Link>
        </div>
      )}
      {status === "unauthenticated" && (
        <div>
          <Link href="/api/auth/signin">Login</Link>
          <Link href="/register" className="ml-3">
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
