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
                href="https://perplexity-clone-kappa.vercel.app/"
                target="_blank"
                className="hover:opacity-80"
              >
                <h2 className="text-xl font-bold text-[#1A1A1A] dark:text-white">
                  PerplexiClone
                </h2>
              </a>
              <h3 className="text-base italic text-[#1A1A1A] dark:text-white mt-1">
                AI-powered search engine
              </h3>
              <p className="text-sm text-[#1A1A1A] dark:text-white mt-1">
                Built a Perplexity clone using Exa and OpenAI.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="pr-2 py-3">
              <a
                href="https://home.withmantis.com/"
                target="_blank"
                className="hover:opacity-80"
              >
                <h2 className="text-xl font-bold text-[#1A1A1A] dark:text-white">
                  Mantis
                </h2>
              </a>
              <h3 className="text-base italic text-[#1A1A1A] dark:text-white mt-1">
                Working on Mantis with{" "}
                <a
                  href="https://compbio.mit.edu/index.html"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  Kellis Lab
                </a>{" "}
                at{" "}
                <a
                  href="https://www.csail.mit.edu/"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  MIT CSAIL
                </a>
              </h3>
              <p className="text-sm text-[#1A1A1A] dark:text-white mt-1">
                Data visualization and cognitive cartography tool using LLMs to
                visualize and interact with textual data.
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
                  Jabber AI
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

          <div className="flex">
            <div className="pr-2 py-3">
              <h2 className="text-xl font-bold text-[#1A1A1A] dark:text-white">
                JourneyGenie
              </h2>
              <h3 className="text-base italic text-[#1A1A1A] dark:text-white mt-1">
                generate road trip itineraries and map directions
              </h3>
              <p className="text-sm text-[#1A1A1A] dark:text-white mt-1">
                Used GPT to generate trip itineraries from user input. Displayed
                itinerary on map with Google Maps API.
                <span className="text-blue-500"> *in progress</span>
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="pr-2 py-3">
              <a
                href="https://github.com/kevinzhu12/quick-def"
                target="_blank"
                className="hover:opacity-80"
              >
                <h2 className="text-xl font-bold text-[#1A1A1A] dark:text-white">
                  QuickDef
                </h2>
              </a>
              <h3 className="text-base italic text-[#1A1A1A] dark:text-white mt-1">
                chrome extension to explain text using GPT
              </h3>
              <p className="text-sm text-[#1A1A1A] dark:text-white mt-1">
                A chrome extension that generates real-time explanations with a
                popup interface.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="pr-2 py-3">
              <a
                href="https://quote-search3.vercel.app/"
                target="_blank"
                className="hover:opacity-80"
              >
                <h2 className="text-xl font-bold text-[#1A1A1A] dark:text-white">
                  Quote Search
                </h2>
              </a>
              <h3 className="text-base italic text-[#1A1A1A] dark:text-white mt-1">
                efficient search engine for precise quotes
              </h3>
              <p className="text-sm text-[#1A1A1A] dark:text-white mt-1">
                Used Fuse.js fuzzy-search library for approximate keyword
                matching. Built incremental streaming feature to update search
                results with each keystroke.
              </p>
            </div>
          </div>
        </div>
      </section>
      <SharedFooter />
    </main>
  );
}
