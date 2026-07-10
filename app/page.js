"use client";

import { Separator } from "@/components/ui/separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="font-garamond">
      <section className="space-y-5">
        <div className="space-y-3">
          <h1 className="text-4xl font-garamond text-coffee-600 dark:text-dark-text tracking-tight">
            Kevin Zhu
          </h1>
          <Separator className="bg-cream-200 dark:bg-dark-hover" />
          <p className="text-lg font-garamond text-coffee-600 dark:text-dark-text leading-relaxed">
            I'm currently studying CS at MIT! This summer, I'm working on
            artifacts in Codex at OpenAI.
          </p>
          <div className="space-y-3 text-lg font-garamond text-coffee-600 dark:text-dark-text leading-relaxed">
            <p>Previously:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-coffee-400 dark:marker:text-dark-muted">
              <li>
                Worked on LLM post-training at Bridgewater AIA Labs (on-leave
                from MIT)
              </li>
              <li>
                Worked on growth engineering and scalable oversight research at
                Scale AI (SEAL)
              </li>
              <li>Invested in early-stage startups at Dorm Room Fund</li>
              <li>Helped lead fundraising for HackMIT 2025</li>
            </ul>
          </div>
        </div>

        <div className="flex space-x-8">
          <a
            href="https://www.linkedin.com/in/kevin-zhu1284/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-coffee-500 hover:text-coffee-600 dark:text-white dark:hover:text-dark-muted transition-colors"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://github.com/kevinzhu12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-coffee-500 hover:text-coffee-600 dark:text-white dark:hover:text-dark-muted transition-colors"
            aria-label="Github"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a
            href="mailto:kbzhu@mit.edu"
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
