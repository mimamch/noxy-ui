import { Metadata } from "next";
import React, { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Orders",
};

export default function layout({ children }: PropsWithChildren) {
  return children;
}
