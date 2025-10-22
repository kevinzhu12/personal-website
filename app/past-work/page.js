"use client";

// React and Next.js imports
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// UI Components
import { MagicCard } from "@/components/magicui/magic-card";
import { Separator } from "@/components/ui/separator";
import { Sun, Moon } from "lucide-react";
import TypingAnimation from "@/components/magicui/typing-animation";
import MagicCardWrapper from "../components/magic-card-wrapper";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";

// Images
import mantis from "@/public/mantis.png";
import quote_search from "@/public/quote_search.png";
import quick_def from "@/public/quick_def.png";
import jabber_ai from "@/public/jabber_ai.png";
import journeygenie from "@/public/journeygenie.png";
import llnl from "@/public/llnl.png";
import media_lab_logo from "@/public/media_lab_logo.jpeg";
import swiftly from "@/public/swiftly.png";
import anichat from "@/public/anichat.png";
import circa from "@/public/circa.png";
import csail from "@/public/csail.jpg";
import scale_ai from "@/public/scale_ai.png";

import SharedFooter from "../components/shared-footer";

export default function PastWork() {
  return (
    <main className="font-garamond">
      <section id="past-work-section" className="space-y-5">
        <div className="space-y-3">
          <h2 className="text-4xl font-garamond text-coffee-600 dark:text-white tracking-tight">
            Past Work
          </h2>
          <Separator className="bg-cream-200 dark:bg-dark-hover" />
        </div>

        <div className="space-y-5">
          <div className="flex justify-between items-start">
            <div className="pr-2 py-3">
              <h2 className="text-xl font-bold text-[#1A1A1A] dark:text-white">
                Scale AI
              </h2>
              <h3 className="text-base italic text-[#1A1A1A] dark:text-white mt-1">
                Software Engineer Intern / Research Intern (SEAL)
              </h3>
            </div>
            <p className="text-sm text-[#1A1A1A] dark:text-white py-3">
              May - Aug 2025
            </p>
          </div>
          <div className="flex justify-between items-start">
            <div className="pr-2 py-3">
              <h2 className="text-xl font-bold text-[#1A1A1A] dark:text-white">
                Voloridge Investment Management
              </h2>
              <h3 className="text-base italic text-[#1A1A1A] dark:text-white mt-1">
                Trading Engineer Intern
              </h3>
            </div>
            <p className="text-sm text-[#1A1A1A] dark:text-white py-3">
              Jan - Feb 2025
            </p>
          </div>

          <div className="flex justify-between items-start">
            <div className="pr-2 py-3">
              <h2 className="text-xl font-bold text-[#1A1A1A] dark:text-white">
                Tomo AI
              </h2>
              <h3 className="text-base italic text-[#1A1A1A] dark:text-white mt-1">
                Software Engineer
              </h3>
            </div>
            <p className="text-sm text-[#1A1A1A] dark:text-white py-3">
              Jan - Sep 2024
            </p>
          </div>

          <div className="flex justify-between items-start">
            <div className="pr-2 py-3">
              <h2 className="text-xl font-bold text-[#1A1A1A] dark:text-white">
                Lawrence Livermore National Laboratory
              </h2>
              <h3 className="text-base italic text-[#1A1A1A] dark:text-white mt-1">
                Data Science Intern
              </h3>
            </div>
            <p className="text-sm text-[#1A1A1A] dark:text-white py-3">
              May - Aug 2024
            </p>
          </div>
        </div>
      </section>
      {/* <SharedFooter />*/}
    </main>
  );
}
