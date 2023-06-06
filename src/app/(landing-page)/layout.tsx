import React, { PropsWithChildren } from "react";
import "aos/dist/aos.css";

export default function layout({ children }: PropsWithChildren) {
  return (
    <div className="relative flex min-h-screen flex-col bg-white dark:text-black">
      <div className="flex-1">
        <div className=" flex-1 items-start ">
          <main className="relative ">{children}</main>
        </div>
      </div>
    </div>
  );
}
