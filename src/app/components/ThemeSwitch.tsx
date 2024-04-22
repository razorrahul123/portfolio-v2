"use client";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  console.log("mounted: ", mounted);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div>Loading</div>;
  }

  if (resolvedTheme === "dark") {
    return <SunIcon onClick={() => setTheme("light")} />;
  }

  if (resolvedTheme === "light") {
    return (
      <MoonIcon className="text-blue-600" onClick={() => setTheme("dark")} />
    );
  }
}
