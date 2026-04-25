"use client";

import { useEffect } from "react";

export default function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const section = document.getElementById(hash);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return null;
}
