"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const path = usePathname();
  return (
    <div className="bg-gray-300 flex m-auto my-5 justify-center items-center w-[400px] h-18 rounded-full">
      <nav className="flex justify-center gap-7">
        <Link
          href="/"
          className={`${
            path === "/" ? "text-amber-800" : "text-white"
          } font-bold text-2xl`}
        >
          Home
          {path === "/" ? "😀" : ""}
        </Link>

        <Link
          href="/about"
          className={`${
            path === "/about" ? "text-amber-800" : "text-white"
          } font-bold text-2xl`}
        >
          About
          {path === "/about" ? "😀" : ""}
        </Link>
      </nav>
    </div>
  );
}
