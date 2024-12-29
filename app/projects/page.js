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
          <h2 className="text-4xl font-cal text-coffee-600 dark:text-white tracking-tight">
            Projects
          </h2>
          <Separator className="bg-cream-200" />
        </div>

        <div className="space-y-5">
          <MagicCardWrapper
            className="cursor-pointer flex-col shadow-sm bg-white hover:bg-cream-50 
              dark:bg-dark-card dark:hover:bg-dark-hover transition-colors duration-200"
          >
            <a
              href="https://perplexity-clone-kappa.vercel.app/"
              target="_blank"
            >
              <div className="flex">
                {/* <Image
                  src={mantis}
                  width={150}
                  height={150}
                /> */}
                <div className="pl-5 pr-2 py-4">
                  <h2 className="text-lg font-bold">PerplexiClone</h2>
                  <h3 className="text-md italic">AI-powered search engine</h3>
                  <p className="text-sm">
                    Built a Perplexity clone using Exa and OpenAI.
                  </p>
                </div>
              </div>
            </a>
          </MagicCardWrapper>

          <MagicCardWrapper
            className="cursor-pointer flex-col shadow-sm bg-white hover:bg-cream-50 
              dark:bg-dark-card dark:hover:bg-dark-hover transition-colors duration-200"
          >
            <a href="https://home.withmantis.com/" target="_blank">
              <div className="flex">
                {/* <Image
                  src={mantis}
                  width={150}
                  height={150}
                /> */}
                <div className="pl-5 pr-2 py-4">
                  <h2 className="text-lg font-bold">Mantis</h2>
                  <h3 className="text-md italic">
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
                  <p className="text-sm">
                    Data visualization and cognitive cartography tool using LLMs
                    to visualize and interact with textual data.
                  </p>
                </div>
              </div>
            </a>
          </MagicCardWrapper>

          <MagicCardWrapper
            className="cursor-pointer flex-col shadow-sm bg-white hover:bg-cream-50 
              dark:bg-dark-card dark:hover:bg-dark-hover transition-colors duration-200"
          >
            <a href="https://devpost.com/software/jabber-ai" target="_blank">
              <div className="flex">
                {/* <Image
                  src={jabber_ai}
                  width={150}
                  height={150}
                /> */}
                <div className="pl-5 pr-2 py-4">
                  <h2 className="text-lg font-bold">Jabber AI</h2>
                  <h3 className="text-md italic">
                    AI project planning assistant
                  </h3>
                  <p className="text-sm">
                    Used Hume AI's EVI to create voice interaction. GPT then
                    processes user transcripts into organized notecards on a
                    whiteboard space.
                  </p>
                </div>
              </div>
            </a>
          </MagicCardWrapper>

          <MagicCardWrapper
            className="cursor-pointer flex-col shadow-sm bg-white hover:bg-cream-50 
              dark:bg-dark-card dark:hover:bg-dark-hover transition-colors duration-200"
          >
            <a>
              <div className="flex">
                {/* <Image
                  src={journeygenie}
                  width={150}
                  height={150}
                /> */}
                <div className="pl-5 pr-2 py-4">
                  <h2 className="text-lg font-bold">JourneyGenie</h2>
                  <h3 className="text-md italic">
                    generate road trip itineraries and map directions{" "}
                  </h3>
                  <p className="text-sm">
                    Used GPT to generate trip itineraries from user input.
                    Displayed itinerary on map with Google Maps API.
                    <span className="text-blue-500"> *in progress</span>
                  </p>
                </div>
              </div>
            </a>
          </MagicCardWrapper>

          <MagicCardWrapper
            className="cursor-pointer flex-col shadow-sm bg-white hover:bg-cream-50 
              dark:bg-dark-card dark:hover:bg-dark-hover transition-colors duration-200"
          >
            <a href="https://github.com/kevinzhu12/quick-def" target="_blank">
              <div className="flex">
                {/* <Image
                  src={quick_def}
                  width={150}
                  height={150}
                /> */}
                <div className="pl-5 pr-2 py-4">
                  <h2 className="text-lg font-bold">QuickDef</h2>
                  <h3 className="text-md italic">
                    chrome extension to explain text using GPT
                  </h3>
                  <p className="text-sm">
                    A chrome extension that generates real-time explanations
                    with a popup interface.
                  </p>
                </div>
              </div>
            </a>
          </MagicCardWrapper>

          <MagicCardWrapper
            className="cursor-pointer flex-col shadow-sm bg-white hover:bg-cream-50 
              dark:bg-dark-card dark:hover:bg-dark-hover transition-colors duration-200"
          >
            <a href="https://quote-search3.vercel.app/" target="_blank">
              <div className="flex">
                {/* <Image
                  src={quote_search}
                  width={150}
                  height={150}
                /> */}
                <div className="pl-5 pr-2 py-4">
                  <h2 className="text-lg font-bold">Quote Search</h2>
                  <h3 className="text-md italic">
                    efficient search engine for precise quotes
                  </h3>
                  <p className="text-sm">
                    Used Fuse.js fuzzy-search library for approximate keyword
                    matching. Built incremental streaming feature to update
                    search results with each keystroke.
                  </p>
                </div>
              </div>
            </a>
          </MagicCardWrapper>
        </div>
      </section>
      <SharedFooter />
    </main>
  );
}
