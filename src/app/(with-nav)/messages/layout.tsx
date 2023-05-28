import { Metadata } from "next";
import React, { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Messages",
};

export default function layout({ children }: PropsWithChildren) {
  return children;
}
