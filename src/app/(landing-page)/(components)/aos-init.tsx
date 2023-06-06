"use client";

import AOS from "aos";
import { useEffect } from "react";

export default function AosInit() {
  useEffect(() => {
    AOS.init({ delay: 200 });
  }, []);

  return null;
}
