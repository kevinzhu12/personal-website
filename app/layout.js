import { Inter } from "next/font/google";
import "./globals.css";
import { Sun, Moon } from "lucide-react";

import Footer from "./components/Footer";

import DockComponent from "./components/DockComponent";

import Link from "next/link";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

import ThemeToggle from "./components/theme-toggle";

import NavLink from "./components/nav-link";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kevin Zhu",
  description: "My Website",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <div className="max-w-3xl mx-auto px-6 my-4">
          {/* Navbar */}
          <nav className="flex items-center justify-between py-8">
            <div className="space-x-12">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/past-work">Work</NavLink>
              <NavLink href="/projects">Projects</NavLink>
            </div>
            <ThemeToggle />
          </nav>

          {/* Main content */}
          {children}
        </div>
      </body>
    </html>
  );
}
