"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children, className = "" }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-base text-coffee-400 hover:text-coffee-600 dark:text-white dark:hover:text-dark-muted hover:underline underline-offset-4 transition-colors ${
        isActive ? "underline text-coffee-600 dark:text-white" : ""
      } ${className}`}
    >
      {children}
    </Link>
  );
}
