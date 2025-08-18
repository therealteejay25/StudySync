"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure we only render after client hydration
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const toggle = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div
      className="bg-gray-600 rounded-full p-1 w-7 h-7 relative cursor-pointer"
      onClick={toggle}
    >
      <FaSun className="absolute h-5 w-5 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 transition-all duration-300" />
      <FaMoon className="absolute h-5 w-5 rotate-90 scale-0 dark:-rotate-0 dark:scale-100 transition-all duration-300" />
    </div>
  );
};

export default ThemeToggle;
