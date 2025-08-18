"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggle = () => setDarkMode(prev => !prev);

  return (
    <div className="min-h-screen flex flex-col transition-colors bg-background dark:bg-darkbackground text-textdark dark:text-textlight">
      <div className="h-full bg w-full">
        {/* Pass the function, not the result */}
      <Navbar toggle={toggle} darkMode={darkMode} />
      <Hero />
      </div>
    </div>
  );
}
