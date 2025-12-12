"use client";

import { useEffect } from "react";

export default function ClientBody({ children }: { children: React.ReactNode }) {
  // Ensure the body has the `antialiased` class on the client without
  // rendering an extra wrapper element (avoids hydration mismatches).
  useEffect(() => {
    const prev = document.body.className;
    if (!document.body.classList.contains("antialiased")) {
      document.body.classList.add("antialiased");
    }
    return () => {
      // restore previous state if we changed it
      if (prev && prev !== "antialiased") document.body.className = prev;
      else document.body.classList.remove("antialiased");
    };
  }, []);

  return <>{children}</>;
}
