import "@/styles/globals.css";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import Link from "next/link";
import { useRef, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import Shiva from "../../public/Shiva_1x2.png";

import { FaRegFileCode } from "react-icons/fa6";
import { FaFileCode } from "react-icons/fa6";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa6";

import Projects from "./Projects.js";
import Technologies from "./Technologies.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Home from ".";
import Section from "@/components/Section";
import debounce from "@/utils/debounce";
import throttle from "@/utils/throttle";
import {
  /* signika, */
  baloo_2,
  /* nunito,
  ubuntu,
  chakra_petch,
  zen_kaku_gothic_new,
  zen_maru_gothic,
  kosugi_maru,
  kiwi_maru, */
  rocknroll_one,
  /* potta_one,
  rampart_one,
  yuji_syuku,
  new_tegomin,
  kaisei_decol,
  mochiy_pop_one,
  yusei_magic,
  zen_kurenaido,
  shippori_antique_b1, */
} from "@/styles/fonts";
import FocusTrap from "focus-trap-react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  /* const router = useRouter() */

  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const technologiesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const projectsYPos = useRef(0);
  const technologiesYPos = useRef(0);
  const aboutYPos = useRef(0);
  const contactYPos = useRef(0);

  function NavList({ isModal }) {
    const navList = [
      {
        name: "Home",
        path: "#home",
        id: 1,
        ref: homeRef,
      },
      {
        name: "Projects",
        path: "#projects",
        id: 2,
        ref: projectsRef,
      },
      {
        name: "Technologies",
        path: "#technologies",
        id: 3,
        ref: technologiesRef,
      },
      {
        name: "About",
        path: "#about",
        id: 4,
        ref: aboutRef,
      },
      {
        name: "Contact",
        path: "#contact",
        id: 5,
        ref: contactRef,
      },
    ];

    return isModal ? (
      <ul className={"w-full"}>
        {navList.map((item) => (
          <li
            className={`p-2 ${
              currentSection === item.name && "bg-sky-900 border-l-2 border-l-white "
            }`}
            key={item.id}
            aria-current={currentSection === item.name ? "location" : undefined}
          >
            <a
              href={item.path}
              className={`flex justify-center w-full font-semibold tracking-wide text-2xl ${
                currentSection === item.name ? "text-white" : "text-gray-200 hover:text-white"
              }`}
              onClick={(e) => {
                setIsMenuOpen(false);
                handleAnchorClick(item.ref);
              }}
            >
              {<span className={`${currentSection === item.name && "mr-0.5"}`}>{item.name}</span>}
            </a>
          </li>
        ))}
      </ul>
    ) : (
      <ul className={"flex h-full"}>
        {navList.map((item) => (
          <li
            className={`h-full flex items-center px-2 ${
              currentSection === item.name && "bg-sky-900 border-b-2 border-b-white"
            }`}
            key={item.id}
            aria-current={currentSection === item.name ? "location" : undefined}
          >
            <a
              href={item.path}
              className={`font-semibold tracking-wide  ${
                currentSection === item.name ? "text-white" : "text-gray-200 hover:text-white"
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  function handleScroll() {
    const scrollPosition = Math.floor(window.scrollY);

    if (scrollPosition < projectsYPos.current) {
      setCurrentSection("Home");
    } else if (
      scrollPosition >= projectsYPos.current &&
      scrollPosition < technologiesYPos.current
    ) {
      setCurrentSection("Projects");
    } else if (scrollPosition >= technologiesYPos.current && scrollPosition < aboutYPos.current) {
      setCurrentSection("Technologies");
    } else if (scrollPosition >= aboutYPos.current && scrollPosition < contactYPos.current) {
      setCurrentSection("About");
    } else if (scrollPosition >= contactYPos.current) {
      setCurrentSection("Contact");
    }
  }

  function setSectionPos(isLargeScreen) {
    const addition = isLargeScreen ? 80 : 0;
    projectsYPos.current = Math.floor(
      projectsRef.current.getBoundingClientRect().top + window.scrollY + addition
    );
    technologiesYPos.current = Math.floor(
      technologiesRef.current.getBoundingClientRect().top + window.scrollY + addition
    );
    aboutYPos.current = Math.floor(
      aboutRef.current.getBoundingClientRect().top + window.scrollY + addition
    );
    contactYPos.current = Math.floor(
      contactRef.current.getBoundingClientRect().top + window.scrollY + addition
    );
  }

  function handleAnchorClick(ref) {
    // Sets focus to the target section after navigation (otherwise focus returns to nav menu button when the modal closes instead)
    setTimeout(() => {
      if (ref.current) {
        ref.current.focus();
      }
    }, 800);
  }

  const handleNavEsc = useCallback(
    (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    },
    [isMenuOpen, setIsMenuOpen]
  );

  useEffect(() => {
    const isLargeScreen = window.matchMedia("(min-width: 640px)").matches;
    setSectionPos(isLargeScreen);
  }, [projectsRef, technologiesRef, aboutRef, contactRef]);

  const throttledHandleScroll = throttle(handleScroll, 200);

  useEffect(() => {
    throttledHandleScroll();
    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.matchMedia("(min-width: 640px)").matches;

      if (isLargeScreen) {
        setIsMenuOpen(false);
      }

      setSectionPos(isLargeScreen);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      window.addEventListener("keydown", handleNavEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleNavEsc);
    };
  }, [isMenuOpen]);

  return (
    <>
      <Head>
        <title>Richard Ejdling</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta
          name="description"
          content="Richard Ejdling's Portfolio Page"
        />
        <meta
          property="og:title"
          content="Richard Ejdling"
        />
        <meta
          property="og:description"
          content="Richard Ejdling's Portfolio Page."
        />
        <meta
          property="og:image"
          content="/open_graph_img.png"
        />
        <meta
          property="og:url"
          content="https://richardejdling.vercel.app"
        />
        <meta
          name="twitter:card"
          content="summary"
        />
        <meta
          name="twitter:title"
          content="Richard Ejdling"
        />
        <meta
          name="twitter:description"
          content="Richard Ejdling's Portfolio Page."
        />
        <meta
          name="twitter:image"
          content="twitter_small.png"
        />
        <meta
          name="twitter:url"
          content="https://richardejdling.vercel.app"
        />
        <link
          rel="canonical"
          href="https://richardejdling.vercel.app"
        />
      </Head>
      <div className={`relative ${baloo_2.className}`}>
        <div
          className="fixed -z-10 h-screen w-screen"
          style={{ background: `url(/Shiva.jpg) center/cover repeat-x` }}
        ></div>
        <header className="sticky top-0 left-0 z-50 bg-sky-600/75 backdrop-blur-lg sm:backdrop-blur-xl">
          <FocusTrap active={isMenuOpen}>
            <div aria-modal={isMenuOpen}>
              <div className="relative box-content flex items-center h-14 sm:h-10 max-w-6xl mx-auto px-2 z-10 justify-between">
                <div className="flex flex-row-reverse items-center min-w-0">
                  <a
                    title="Skip to main content"
                    href="#home"
                    onClick={() => isMenuOpen && setIsMenuOpen(false)}
                    className="opacity-0 focus:opacity-100 pointer-events-none focus:pointer-events-auto overflow-hidden text-ellipsis whitespace-nowrap px-1 mx-2"
                  >
                    Skip to main content
                  </a>
                  {/* <h1
            className={`text-2xl sm:text-base ${kiwi_maru.className} font-semibold`}
            >
            {"尺巨"} {'尺臣'}
            </h1> */}
                  {/* <h1
            className={`text-2xl sm:text-base ${zen_maru_gothic.className} font-semibold`}
            >
            {"尺巨"} {'尺臣'}
            </h1> */}
                  <a
                    href="https://richardejdling.vercel.app"
                    className={`shrink-0 text-2xl sm:text-base ${rocknroll_one.className}`}
                  >
                    {"尺巨"} {/* '尺臣' */}
                  </a>
                  {/* <h1
            className={`text-2xl sm:text-base ${rampart_one.className} font-semibold`}
          >
            {"尺巨"} {'尺臣'}
          </h1> */}
                </div>

                <div className="flex items-center gap-6 h-full">
                  <div className="flex gap-4">
                    <a
                      aria-label="Visit my GitHub page"
                      title="GitHub"
                      href="https://github.com/richard-ejdling"
                      target="_blank"
                    >
                      <FaGithub className="text-gray-200 hover:text-white text-[28px] sm:text-xl" />
                    </a>
                    <a
                      aria-label="Visit my LinkedIn page"
                      title="LinkedIn"
                      href="https://www.linkedin.com/in/richard-ejdling-4a0601273"
                      target="_blank"
                    >
                      <BsLinkedin className="text-gray-200 hover:text-white text-[28px] sm:text-xl" />
                    </a>
                  </div>
                  <button
                    className="sm:hidden"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-controls="menu"
                    aria-expanded={isMenuOpen}
                    aria-haspopup="true"
                  >
                    {isMenuOpen ? <CgClose size={35} /> : <HiMenu size={35} />}
                  </button>
                  <div className="hidden sm:block h-full">
                    <nav className="h-full">
                      <NavList isModal={false} />
                    </nav>
                  </div>
                </div>
              </div>
              {isMenuOpen && (
                <div
                  id="close"
                  className="fixed top-0 left-0 h-screen w-full bg-black/25"
                  onClick={(e) => e.target.id === "close" && setIsMenuOpen(false)}
                >
                  <nav
                    id="menu"
                    aria-hidden={!isMenuOpen}
                    className="flex flex-col items-center w-full h-fit bg-sky-600 p-2 pt-16 rounded-b-lg shadow-2xl shadow-black"
                  >
                    <NavList isModal={true} />
                  </nav>
                </div>
              )}
            </div>
          </FocusTrap>
        </header>
        <div className="h-full backdrop-blur-lg sm:backdrop-blur-xl">
          <main className="box-content flex flex-col items-center min-h-screen max-w-6xl mx-auto px-10">
            <Section
              id="home"
              styles="pt-20 sm:pt-10 md:pt-40 scroll-mt-14"
              ref={homeRef}
            >
              <Home />
            </Section>
            <Section
              id="projects"
              styles="pt-20 sm:pt-40 sm:-scroll-mt-20"
              ref={projectsRef}
              title="Projects"
              icon={<FaFileCode />}
            >
              <Projects />
            </Section>
            <Section
              id="technologies"
              styles="pt-20 sm:pt-40 sm:-scroll-mt-20"
              ref={technologiesRef}
              title="Technologies"
              icon={<FaScrewdriverWrench />}
            >
              <Technologies />
            </Section>
            <Section
              id="about"
              styles="pt-20 sm:pt-40 sm:-scroll-mt-20"
              ref={aboutRef}
              title="About"
              icon={<FaUser />}
            >
              <About />
            </Section>
            <Section
              id="contact"
              styles="py-20 sm:pt-40 sm:-scroll-mt-20"
              ref={contactRef}
              title="Contact"
              icon={<FaPaperPlane />}
            >
              <Contact />
            </Section>
          </main>
          {/* <Component {...pageProps} /> */}
        </div>
        <footer>
          <div className="flex flex-col justify-center items-center h-[calc(100vh-40px)] text-6xl gap-6 mx-2">
            <p className="text-center">Thank you for visiting!</p>
            <p className="text-center">Have a nice day!</p>
          </div>
        </footer>
      </div>
    </>
  );
}
