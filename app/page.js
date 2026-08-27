"use client";

import { Separator } from "@/components/ui/separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import LinkPreviewCard from "./components/link-preview-card";

export default function Home() {
  return (
    <main>
      <section className="space-y-5">
        <div className="space-y-3">
          <h1 className="text-4xl text-coffee-600 dark:text-dark-text tracking-tight">
            Kevin Zhu
          </h1>
          <Separator className="bg-cream-200 dark:bg-dark-hover" />
          <p className="text-lg text-coffee-600 dark:text-dark-text leading-relaxed">
            I'm currently studying CS at MIT! This summer, I'm working on
            artifacts in Codex at OpenAI.
          </p>
          <div className="space-y-3 text-lg text-coffee-600 dark:text-dark-text leading-relaxed">
            <p>Previously:</p>
            <ul className="list-disc pl-5 space-y-3 marker:text-coffee-400 dark:marker:text-dark-muted">
              <li>
                Worked on RL post-training at Bridgewater AIA Labs (on-leave
                from MIT)
                <LinkPreviewCard
                  href="https://thinkingmachines.ai/news/learning-to-replicate-expert-judgment-in-financial-tasks/"
                  title="Learning to Replicate Expert Judgment in Financial Tasks"
                  image="https://thinkingmachines.ai/news/learning-to-replicate-expert-judgment-in-financial-tasks/images/cover-social.png"
                  domain="Bridgewater AIA Labs and Thinking Machines"
                  xHref="https://x.com/kevinbzhu/status/2072045347061268955?s=20"
                />
              </li>
              <li>
                Worked on growth engineering and CoT monitoring research at
                Scale AI (SEAL)
                <LinkPreviewCard
                  href="https://labs.scale.com/papers/mrt"
                  title="Reliable Weak-to-Strong Monitoring for LLMs"
                  image="https://labs.scale.com/og?title=Reliable%20Weak-to-Strong%20Monitoring%20for%20LLMs&subtitle=Scale%20Labs&theme=light"
                  domain="Scale AI"
                  xHref="https://x.com/kevinbzhu/status/1961422873307840832?s=20"
                />
              </li>
              <li>Invested in early-stage startups at Dorm Room Fund</li>
              <li>Helped lead fundraising for HackMIT 2025</li>
            </ul>
          </div>
        </div>

        <div className="flex translate-y-1 space-x-8">
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
            href="https://x.com/kevinbzhu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-coffee-500 hover:text-coffee-600 dark:text-white dark:hover:text-dark-muted transition-colors"
            aria-label="X"
          >
            <FontAwesomeIcon icon={faXTwitter} size="lg" />
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
