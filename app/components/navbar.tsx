"use client";

import { useEffect, useState } from "react";
import { MessageSquareIcon, MoonIcon } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize darkMode based on system preference
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  // Toggle 'dark' class on <html> when darkMode state changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="h-[10%] w-full flex justify-between p-4">
      <span className="flex items-center space-x-2">
        <MessageSquareIcon />
        <span>AI Chatbot</span>
      </span>
      <div className="flex items-center space-x-4">
        <span className="space-x-2">
          <button>chat</button>
          <button>history</button>
        </span>
        <button onClick={() => setDarkMode(!darkMode)}>
          <MoonIcon />
        </button>
      </div>
    </div>
  );
}