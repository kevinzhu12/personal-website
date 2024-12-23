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
    <main>
      <section id="past-work-section" className="space-y-5">
        <div className="space-y-3">
          <h2 className="text-4xl font-cal text-coffee-600 dark:text-white tracking-tight">
            Past Work
          </h2>
          <Separator className="bg-cream-200" />
        </div>

        <div className="space-y-5">
          <MagicCardWrapper
            className="cursor-pointer flex-col shadow-sm bg-white hover:bg-cream-50 
              dark:bg-dark-card dark:hover:bg-dark-hover transition-colors duration-200"
          >
            <a target="_blank">
              <div className="flex">
                <Image
                  src={csail}
                  width={108}
                  height={108}
                  className="object-cover"
                />
                <div className="pl-5 pr-2 py-4">
                  <h2 className="text-lg font-bold">MIT CSAIL - Kellis Lab</h2>
                  <h3 className="text-md italic">Researcher</h3>
                  <p className="text-sm">Sep 2024 - Present</p>
                </div>
              </div>
            </a>
          </MagicCardWrapper>

          <MagicCardWrapper
            className="cursor-pointer flex-col shadow-sm bg-white hover:bg-cream-50 
              dark:bg-dark-card dark:hover:bg-dark-hover transition-colors duration-200"
          >
            <a target="_blank">
              <div className="flex">
                <Image src={anichat} width={108} height={108} />
                <div className="pl-5 pr-2 py-4">
                  <h2 className="text-lg font-bold">Tomo AI</h2>
                  <h3 className="text-md italic">Software Engineer</h3>
                  <p className="text-sm">Jan 2024 - Present</p>
                </div>
              </div>
            </a>
          </MagicCardWrapper>
          <MagicCardWrapper
            className="cursor-pointer flex-col shadow-sm bg-white hover:bg-cream-50 
              dark:bg-dark-card dark:hover:bg-dark-hover transition-colors duration-200"
          >
            <a target="_blank">
              <div className="flex">
                <Image src={llnl} width={108} height={108} />
                <div className="pl-5 pr-2 py-4">
                  <h2 className="text-lg font-bold">
                    Lawrence Livermore National Laboratory
                  </h2>
                  <h3 className="text-md italic">Data Science Intern</h3>
                  <p className="text-sm">May - Aug 2024</p>
                </div>
              </div>
            </a>
          </MagicCardWrapper>
          <MagicCardWrapper
            className="cursor-pointer flex-col shadow-sm bg-white hover:bg-cream-50 
              dark:bg-dark-card dark:hover:bg-dark-hover transition-colors duration-200"
          >
            <a target="_blank">
              <div className="flex">
                <Image src={swiftly} width={108} height={108} />
                <div className="pl-5 pr-2 py-4">
                  <h2 className="text-lg font-bold">Swiftly</h2>
                  <h3 className="text-md italic">Tech Consultant</h3>
                  <p className="text-sm">Jan - May 2024</p>
                </div>
              </div>
            </a>
          </MagicCardWrapper>
          <MagicCardWrapper
            className="cursor-pointer flex-col shadow-sm bg-white hover:bg-cream-50 
              dark:bg-dark-card dark:hover:bg-dark-hover transition-colors duration-200"
          >
            <a target="_blank">
              <div className="flex">
                <Image src={media_lab_logo} width={108} height={108} />
                <div className="pl-5 pr-2 py-4">
                  <h2 className="text-lg font-bold">MIT Media Lab</h2>
                  <h3 className="text-md italic">Researcher</h3>
                  <p className="text-sm">Nov 2023 - Feb 2024</p>
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
