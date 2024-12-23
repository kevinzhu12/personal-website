"use client";
import { MagicCard } from "@/components/magicui/magic-card";
import { useEffect, useState } from "react";

export default function MagicCardWrapper({ children, className }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setIsDarkMode(document.documentElement.classList.contains("dark"));
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <MagicCard
      className={className}
      gradientSize={500}
      gradientColor={isDarkMode ? "#333333" : "#EBE5D9"}
      gradientOpacity={isDarkMode ? 0.3 : 1}
    >
      {children}
    </MagicCard>
  );
}
