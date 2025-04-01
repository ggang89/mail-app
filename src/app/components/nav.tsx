"use client";

import LinkComponent from "./link-component";

export default function Nav() {
  return (
    <div className="bg-gray-300 flex m-auto my-5 justify-center items-center w-[400px] h-18 rounded-full">
      <nav className="flex justify-center gap-7">
        <LinkComponent title="Home" href="/" />

        <LinkComponent title="About" href="/about" />
      </nav>
    </div>
  );
}
