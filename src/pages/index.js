import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import Projects from "./Projects";
import Technologies from "./Technologies";
import About from "./About";
import Contact from "./Contact";
import { useEffect, useRef, useState } from "react";
import { isMobileDevice } from "@/utils/isMobile";
import Links from "@/components/Links";
import { rocknroll_one } from "@/styles/fonts";

export default function Home() {
  return (
    <>
      {/* <div className={`${rocknroll_one.className} w-[800px] h-[800px] bg-sky-600 flex justify-center items-center`}><p className="text-[300px] font-semibold -mt-[75px]">{"尺巨"}</p></div> */}
      <div className="flex flex-col-reverse md:flex-row gap-4 justify-center items-center">
        <div>
          <h1 className="text-6xl">
            Hi! <br />
            I&apos;m Richard Ejdling
          </h1>
          <p className="text-xl mt-2">Front-end developer</p>
        </div>
        <img
          src="/img/profile-img.jpg"
          alt="My Portrait"
          className="rounded-full object-cover object-center h-32 w-32"
        />
      </div>
      <Links />
    </>
  );
}
