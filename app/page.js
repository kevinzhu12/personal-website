"use client";
import headshot from "../public/headshot.png";
import quote_search from "../public/quote_search.png";
import quick_def from "../public/quick_def.png";
import Image from "next/image";
import TypingAnimation from "@/components/magicui/typing-animation";
import { MagicCard } from "@/components/magicui/magic-card";
import { Separator } from "@/components/ui/separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import jabber_ai from "../public/jabber_ai.png";
import journeygenie from "../public/journeygenie.png";
import llnl from "../public/llnl.png";
import media_lab_logo from "../public/media_lab_logo.jpeg";
import swiftly from "../public/swiftly.png";
import anichat from "../public/anichat.png";
import circa from "../public/circa.png";
import mantis from "../public/mantis.png";
import csail from "../public/csail.jpg";
import scale_ai from "../public/scale_ai.png";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <main className="font-garamond">
      {/* ABOUT ME */}
      <section className="space-y-5">
        <div className="space-y-3">
          <h1 className="text-4xl font-garamond text-coffee-600 dark:text-dark-text tracking-tight">
            <span className="">Kevin Zhu</span>
          </h1>
          <Separator className="bg-cream-200 dark:bg-dark-hover" />
          <p className="text-lg font-garamond text-coffee-600 dark:text-dark-text leading-relaxed">
            I'm studying CS and AI at MIT. This spring, I'm taking a gap semester to work on research at Bridgewater AIA Labs in NYC.
          </p>
          <p className="text-lg font-garamond text-coffee-600 dark:text-dark-text leading-relaxed">
            I previously interned at Scale AI, where I worked on growth engineering and research with SEAL. I also invest in early-stage startups at Dorm Room Fund and help organize HackMIT.
          </p>
        </div>

        <div className="flex space-x-8">
          <a
            href="https://www.linkedin.com/in/kevin-zhu1284/"
            target="_blank"
            className="text-coffee-500 hover:text-coffee-600 dark:text-white dark:hover:text-dark-muted transition-colors"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://github.com/kevinzhu12"
            target="_blank"
            className="text-coffee-500 hover:text-coffee-600 dark:text-white dark:hover:text-dark-muted transition-colors"
            aria-label="Github"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a
            href="mailto:kbzhu@mit.edu"
            target="_blank"
            className="text-coffee-500 hover:text-coffee-600 dark:text-white dark:hover:text-dark-muted transition-colors"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
        </div>
      </section>
    </main>
  );
}
