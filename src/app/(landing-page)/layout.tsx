import React, { PropsWithChildren } from "react";

export default function layout({ children }: PropsWithChildren) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="flex-1">
        <div className=" flex-1 items-start ">
          <main className="relative ">{children}</main>
        </div>
      </div>
    </div>
  );
}
