import { SignedIn, SignedOut, SignOutButton, UserButton } from "@clerk/nextjs";
import { LayoutDashboardIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import SignInOauthButton from "../SignInOAuthButton/SignInOauthButton";

const TopBar = () => {
  const isAdmin = false;
  return (
    <div className="flex items-center w-full justify-between p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md z-10">
      <div className=" flex gap-2  items-center">Spotify</div>
      <div className="flex items-center">
        {isAdmin && (
          <Link href={"/admin"}>
            <LayoutDashboardIcon className="size-4 mr-2" />
            Admin Dashboard
          </Link>
        )}
        <SignedOut>
          <SignInOauthButton />
        </SignedOut>
        <SignedIn>
          <div className="flex items-center gap-2">

          <UserButton />
          <SignOutButton/>
          </div>
        </SignedIn>
      </div>
    </div>
  );
};
export default TopBar;
