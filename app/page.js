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
import scale_ai from "../public/scale_ai.jpg";

import { Sun, Moon } from "lucide-react";

import { useState, useEffect } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [gradientColor, setGradientColor] = useState("#F0F0F0");

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      setGradientColor("#333333");
    } else {
      document.documentElement.classList.remove("dark");
      setGradientColor("#F0F0F0");
    }
  }, [isDarkMode]); // This effect will run whenever isDarkMode changes

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    console.log(isDarkMode);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects-section");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPastWork = () => {
    const pastWorkSection = document.getElementById("past-work-section");
    if (pastWorkSection) {
      pastWorkSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="space-y-10 my-10 dark:text-white">
      {/* DARK MODE TOGGLE AND NAVIGATION LINKS */}
      <div className="flex items-center space-x-6">
        <button
          onClick={toggleTheme}
          className="relative focus:outline-none"
          aria-label="Toggle dark mode"
        >
          <Moon
            className={`w-8 h-8 text-blue-300 transition-opacity duration-300 ${
              isDarkMode ? "opacity-0" : "opacity-100"
            }`}
          />
          <Sun
            className={`w-8 h-8 text-yellow-500 absolute top-0 left-0 transition-opacity duration-300 ${
              isDarkMode ? "opacity-100" : "opacity-0"
            }`}
          />
        </button>
        <button
          onClick={scrollToPastWork}
          className="font-bold text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 focus:outline-none"
        >
          Past Work
        </button>
        <button
          onClick={scrollToProjects}
          className="font-bold text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 focus:outline-none"
        >
          Projects
        </button>
      </div>

      {/* ABOUT ME */}
      <section className="">
        <div className="flex flex-col space-y-2">
          <Image
            className="rounded-full"
            src={headshot}
            width={150}
            height={150}
          />
          <h3 className="text-3xl font-bold pt-3">Hi, I'm Kevin. 👋</h3>
          <div className=" min-h-full text-xs leading-8 md:text-xl">
            <ul className="list-disc">
              <li>
                Studying computer science and math at{" "}
                <a
                  href="https://www.mit.edu"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                >
                  MIT
                </a>
              </li>
              <li>
                Investing in early-stage startups @{" "}
                <a
                  href="https://www.dormroomfund.com/"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                >
                  Dorm Room Fund
                </a>
              </li>
              <li>
                Organizing{" "}
                <a
                  href="https://hackmit.org/"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                >
                  HackMIT
                </a>
                !
              </li>
              <li>Previously built AI companions at Tomo AI</li>
              <li>
                ML research at{" "}
                <a
                  href="https://www.llnl.gov/"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                >
                  Lawrence Livermore National Lab
                </a>{" "}
                and{" "}
                <a
                  href="https://www.media.mit.edu/"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                >
                  MIT Media Lab
                </a>
              </li>
            </ul>
            {/* Currently studying computer science and math at{" "}
            <a
              href="https://www.mit.edu"
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              MIT
            </a>
            . Currently building Mantis and doing AI research at the Kellis Lab
            in MIT CSAIL. I also help organize HackMIT. Previously built AI
            companions at Tomo AI and did ML research at{" "}
            <a
              href="https://www.llnl.gov/"
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              Lawrence Livermore National Lab
            </a>
            and the
            <a
              href="https://www.media.mit.edu/"
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              MIT Media Lab
            </a>
            . */}
          </div>
        </div>

        <div className="flex flex-row max-w-48 justify-between mt-4">
          <a
            href="https://www.linkedin.com/in/kevin-zhu1284/"
            target="_blank"
            className="text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" size="2x" />
          </a>
          <a
            href="https://github.com/kevinzhu12"
            target="_blank"
            className="text-black hover:text-gray-700  dark:text-white dark:hover:text-gray-300"
            aria-label="Github"
          >
            <FontAwesomeIcon icon={faGithub} className="w-6 h-6" size="2x" />
          </a>
          <a
            href="mailto:kbzhu@mit.edu"
            target="_blank"
            className="text-black hover:text-gray-700  dark:text-white dark:hover:text-gray-300"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" size="2x" />
          </a>
          {/* <a
            href="/Kevin_Zhu_Resume.pdf"
            target="_blank"
            className="text-black pl-1 hover:text-gray-700  dark:text-white dark:hover:text-gray-300"
            aria-label="Resume"
          >
            <FontAwesomeIcon icon={faFile} className="w-5 h-6" size="2x" />
          </a> */}
        </div>
      </section>

      {/* PAST WORK */}
      <section id="past-work-section">
        <h2 className="text-3xl font-bold">Past Work</h2>

        <Separator className="mb-5 mt-3" />
        <div className=" space-y-5">
          <MagicCard
            className="cursor-pointer shadow-sm bg-white"
            gradientSize={500}
            gradientColor={gradientColor}
          >
            <a target="_blank">
              <div className="flex">
                <Image
                  src={scale_ai}
                  // className=" rounded-lg"
                  width={108}
                  height={108}
                />
                <div className="pl-5 pr-2 py-4">
                  <h2 className="text-lg font-bold">Scale AI</h2>

                  <h3 className=" text-md ">
                    Incoming Software Engineer Intern
                  </h3>
                  <h2 className="text-md">May 2025 - Aug 2025</h2>
                </div>
              </div>
            </a>
          </MagicCard>

          <MagicCard
            className="cursor-pointer shadow-sm bg-white"
            gradientSize={500}
            gradientColor={gradientColor}
          >
            <a target="_blank">
              <div className="flex">
                <Image
                  src={csail}
                  // className=" rounded-lg"
                  width={108}
                  height={108}
                />
                <div className="pl-5 pr-2 py-4">
                  <h2 className="text-lg font-bold">MIT CSAIL - Kellis Lab</h2>

                  <h3 className=" text-md ">Researcher</h3>
                  <h2 className="text-md">Sep 2024 - Present</h2>
                </div>
              </div>
            </a>
          </MagicCard>

          <MagicCard
            className="cursor-pointer shadow-sm bg-white"
            gradientSize={500}
            gradientColor={gradientColor}
          >
            <a target="_blank">
              <div className="flex">
                <Image
                  src={anichat}
                  // className=" rounded-lg"
                  width={108}
                  height={108}
                />
                <div className="pl-5 pr-2 py-4">
                  <h2 className="text-lg font-bold">Tomo AI</h2>

                  <h3 className=" text-md ">Software Engineer</h3>
                  <h2 className="text-md">Jan 2024 - Present</h2>
                  {/* <p className="">
                Developed predictive model for phenotypic measures and
                athletic performance using LASSO. Identified significant
                biomarkers through feature selection.
              </p> */}
                </div>
              </div>
            </a>
          </MagicCard>
          <MagicCard
            className="cursor-pointer shadow-sm bg-white"
            gradientSize={500}
            gradientColor={gradientColor}
          >
            <a target="_blank">
              <div className="flex">
                <Image
                  src={llnl}
                  // className=" rounded-lg"
                  width={108}
                  height={108}
                />
                <div className="pl-5 pr-2 py-4">
                  <h2 className="text-lg font-bold">
                    Lawrence Livermore National Laboratory
                  </h2>

                  <h3 className=" text-md ">Data Science Intern</h3>
                  <h2 className="text-md">May - Aug 2024</h2>
                  {/* <p className="">
                Developed predictive model for phenotypic measures and
                athletic performance using LASSO. Identified significant
                biomarkers through feature selection.
              </p> */}
                </div>
              </div>
            </a>
          </MagicCard>
          <MagicCard
            className="cursor-pointer shadow-sm bg-white"
            gradientSize={500}
            gradientColor={gradientColor}
          >
            <a target="_blank">
              <div className="flex">
                <Image
                  src={swiftly}
                  // className=" rounded-lg"
                  width={108}
                  height={108}
                />
                <div className="pl-5 pr-2 py-4">
                  <h2 className="text-lg font-bold">Swiftly</h2>

                  <h3 className=" text-md ">Tech Consultant</h3>
                  <h2 className="text-md">Jan - May 2024</h2>
                  {/* <p className="">
                Developed predictive model for phenotypic measures and
                athletic performance using LASSO. Identified significant
                biomarkers through feature selection.
              </p> */}
                </div>
              </div>
            </a>
          </MagicCard>
          <MagicCard
            className="cursor-pointer shadow-sm bg-white"
            gradientSize={500}
            gradientColor={gradientColor}
          >
            <a target="_blank">
              <div className="flex">
                <Image
                  src={media_lab_logo}
                  // className=" rounded-lg"
                  width={108}
                  height={108}
                />
                <div className="pl-5 pr-2 py-4">
                  <h2 className="text-lg font-bold">MIT Media Lab</h2>

                  <h3 className=" text-md ">Researcher</h3>
                  <h2 className="text-md">Nov 2023 - Feb 2024</h2>
                  {/* <p className="">
                Developed predictive model for phenotypic measures and
                athletic performance using LASSO. Identified significant
                biomarkers through feature selection.
              </p> */}
                </div>
              </div>
            </a>
          </MagicCard>
        </div>
      </section>

      {/* PROJECTS/RESEARCH */}
      <section id="projects-section">
        <h2 className="text-3xl font-bold">Projects/Research</h2>

        <Separator className="mb-5 mt-3" />
        <div className=" space-y-5">
          <MagicCard
            className="cursor-pointer flex-col shadow-sm bg-white"
            gradientSize={500}
            gradientColor={gradientColor}
          >
            <a
              href="https://perplexity-clone-kappa.vercel.app/"
              target="_blank"
            >
              <div className="flex">
                {/* <Image src={mantis} width={150} height={150} /> */}
                <div className="pl-5 pr-2 py-4">
                  <h2 className="text-2xl font-bold">PerplexiClone</h2>
                  <h3 className=" text-xl italic">AI-powered search engine</h3>
                  <p className="">
                    Built a Perplexity clone using Exa and OpenAI.
                  </p>
                </div>
              </div>
            </a>
          </MagicCard>
          <MagicCard
            className="cursor-pointer flex-col shadow-sm bg-white"
            gradientSize={500}
            gradientColor={gradientColor}
          >
            <a href="https://home.withmantis.com/" target="_blank">
              <div className="flex">
                <Image
                  src={mantis}
                  // className=" rounded-lg"
                  width={150}
                  height={150}
                />
                <div className="pl-5 pr-2 py-4">
                  <h2 className="text-2xl font-bold">Mantis</h2>
                  <h3 className=" text-xl italic">
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
                  <p className="">
                    Data visualization and cognitive cartography tool using LLMs
                    to visualize and interact with textual data
                  </p>
                </div>
              </div>
            </a>
          </MagicCard>
          <MagicCard
            className="cursor-pointer flex-col shadow-sm bg-white"
            gradientSize={500}
            gradientColor={gradientColor}
          >
            <a
              href="https://github.com/orgs/CircaLearn/repositories"
              target="_blank"
            >
              <div className="flex">
                {/* <Image
                  src={circa}
                  // className=" rounded-lg"
                  width={150}
                  height={150}
                /> */}
                <div className="pl-5 pr-2 py-4">
                  <h2 className="text-2xl font-bold">Circa</h2>
                  <h3 className=" text-xl italic">
                    LLM-powered flashcard learning platform
                  </h3>
                  <p className="">
                    Currently building Circa with{" "}
                    <a
                      href="https://hectorastrom.com/"
                      target="_blank"
                      className="text-blue-500 hover:underline"
                    >
                      Hector Astrom
                    </a>
                    !
                  </p>
                </div>
              </div>
            </a>
          </MagicCard>

          <MagicCard
            className="cursor-pointer flex-col shadow-sm bg-white"
            gradientSize={500}
            gradientColor={gradientColor}
          >
            <a href="https://devpost.com/software/jabber-ai" target="_blank">
              <div className="flex">
                <Image
                  src={jabber_ai}
                  // className=" rounded-lg"
                  width={150}
                  height={150}
                />
                <div className="pl-5 pr-2 py-4">
                  <h2 className="text-2xl font-bold">Jabber AI</h2>
                  <h3 className=" text-xl italic">
                    AI project planning assistant
                  </h3>
                  <p className="">
                    Used Hume AI's EVI to create voice interaction. GPT then
                    processes user transcripts into organized notecards on a
                    whiteboard space.
                  </p>
                </div>
              </div>
            </a>
          </MagicCard>

          <MagicCard
            className="cursor-pointer flex-col shadow-sm bg-white"
            gradientSize={500}
            gradientColor={gradientColor}
          >
            <a>
              <div className=" flex">
                <Image
                  src={journeygenie}
                  className=""
                  width={150}
                  height={150}
                />
                <div className="pl-5 pr-2 py-4">
                  <h2 className="text-2xl font-bold">JourneyGenie</h2>
                  <h3 className=" text-xl italic">
                    generate road trip itineraries and map directions{" "}
                  </h3>
                  <p className="">
                    Used GPT to generate trip itineraries from user input.
                    Displayed itinerary on map with Google Maps API.
                    <span className=" text-blue-500"> *in progress</span>
                  </p>
                </div>
              </div>
            </a>
          </MagicCard>

          <MagicCard
            className="cursor-pointer flex-col shadow-sm bg-white"
            gradientSize={500}
            gradientColor={gradientColor}
          >
            <a href="https://github.com/kevinzhu12/quick-def" target="_blank">
              <div className="flex">
                <Image src={quick_def} className=" " width={150} height={150} />
                <div className="pl-5 pr-2 py-4">
                  <h2 className="text-2xl font-bold">QuickDef</h2>
                  <h3 className=" text-xl italic">
                    chrome extension to explain text using GPT
                  </h3>
                  <p className="">
                    A chrome extension that generates real-time explanations
                    with a popup interface.
                  </p>
                </div>
              </div>
            </a>
          </MagicCard>

          <MagicCard
            className="cursor-pointer flex-col shadow-sm bg-white"
            gradientSize={500}
            gradientColor={gradientColor}
          >
            <a href="https://quote-search3.vercel.app/" target="_blank">
              <div className="flex">
                <Image
                  src={quote_search}
                  className=""
                  width={150}
                  height={150}
                />
                <div className="pl-5 pr-2 py-4">
                  <h2 className="text-2xl font-bold">Quote Search</h2>
                  <h3 className=" text-xl italic">
                    efficient search engine for precise quotes
                  </h3>
                  <p className="">
                    Used Fuse.js fuzzy-search library for approximate keyword
                    matching. Built incremental streaming feature to update
                    search results with each keystroke.
                  </p>
                </div>
              </div>
            </a>
          </MagicCard>
        </div>
      </section>

      {/* <section className="">
        <h2 className="text-3xl font-bold">Thoughts</h2>
        <Separator className="mb-5 mt-3" />
        <div className=" space-y-5">
          <MagicCard
            className="cursor-pointer flex-col shadow-sm bg-white"
            children={
              <div className="rounded-xl p-5">
                <div className="flex flex-row justify-between">
                  <h2 className="text-lg">8/2/24</h2>
                  <h2 className="text-lg">8/2/24</h2>
                </div>
              </div>
            }
            gradientSize={500}
            gradientColor={gradientColor}
          ></MagicCard>
        </div>
      </section> */}
      {/* FOOTER */}
      <div className="">
        <Separator className="my-5" />
        <div className="flex flex-row max-w-md mx-auto justify-between gap-10 text-sm text-gray-700">
          <a href="#" className="scroll-smooth dark:text-gray-300">
            Back to Top
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-zhu1284/"
            target="_blank"
            className="dark:text-gray-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/kevinzhu12"
            target="_blank"
            className="dark:text-gray-300"
          >
            Github
          </a>
          <a
            href="mailto:kbzhu@mit.edu"
            target="_blank"
            className="scroll-smooth dark:text-gray-300"
          >
            Email
          </a>
          {/* <a
            href="/Kevin_Zhu_Resume.pdf"
            target="_blank"
            className="dark:text-gray-300"
          >
            Resume
          </a> */}
        </div>
      </div>
    </main>
  );
}
