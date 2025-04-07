"use client";

// React and Next.js imports
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// UI Components
import MagicCardWrapper from "../components/magic-card-wrapper";
import { Separator } from "@/components/ui/separator";
import { Sun, Moon } from "lucide-react";
import TypingAnimation from "@/components/magicui/typing-animation";

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

export default function Projects() {
  return (
    <main>
      <section id="projects-section" className="space-y-5">
        <div className="space-y-3">
          <h2 className="text-4xl font-garamond text-coffee-600 dark:text-white tracking-tight">
            Projects
          </h2>
          <Separator className="bg-coffee-400 dark:bg-dark-hover" />
        </div>

        <div className="space-y-4">
          <div className="flex">
            <div className="pr-2 py-3">
              <a
                href="https://devpost.com/software/mirror-lmd54a"
                target="_blank"
                className="hover:opacity-80"
              >
                <h2 className="text-xl font-bold text-[#1A1A1A] dark:text-white">
                  Mirror
                </h2>
              </a>
              <h3 className="text-base italic text-[#1A1A1A] dark:text-white mt-1">
                personal assistant on smart glasses (Mistral AI Prize Winner)
              </h3>
              <p className="text-sm text-[#1A1A1A] dark:text-white mt-1">
                Built a Mistral-powered personal assistant on AugmentOS and Even
                Realities G1 at{" "}
                <a
                  href="https://x.com/clairebookworm1/status/1891929538101166183"
                  target="_blank"
                  className="text-accent-blue hover:text-accent-hover underline-offset-4 hover:underline transition-colors"
                >
                  TreeHacks
                </a>
                .
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="pr-2 py-3">
              <a
                href="https://devpost.com/software/jabber-ai"
                target="_blank"
                className="hover:opacity-80"
              >
                <h2 className="text-xl font-bold text-[#1A1A1A] dark:text-white">
                  Jabber
                </h2>
              </a>
              <h3 className="text-base italic text-[#1A1A1A] dark:text-white mt-1">
                AI project planning assistant
              </h3>
              <p className="text-sm text-[#1A1A1A] dark:text-white mt-1">
                Used Hume AI's EVI to create voice interaction. GPT then
                processes user transcripts into organized notecards on a
                whiteboard space.
              </p>
            </div>
          </div>
        </div>
      </section>
      <SharedFooter />
    </main>
  );
}
