"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Navbar = () => {
  return (
    <nav className="sticky dark:bg-neutral-950 bg-white text-black dark:text-white shadow-md dark:shadow-white/10 inset-x-0 top-0 z-10">
      <div className="container py-4 flex items-center justify-between max-md:px-3">
        <Link
          href="/"
          className="bg-clip-text text-transparent primary-gr md:text-2xl font-bold"
        >
          Tech Wizards
        </Link>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            as={Link}
            href="/auth"
            className="glow shadow-md md:px-8 px-5 rounded-[4px]"
            size="sm"
          >
            Sign in
          </Button>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};
