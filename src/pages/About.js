import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { isMobileDevice } from "@/utils/isMobile";
import { useEffect, useState } from "react";
import Links from "@/components/Links";

export default function About() {
  const now = Date.now();
  const birthday = Date.UTC(1999, 5, 22, 6, 25);
  const age = Math.floor((now - birthday) / 31557600000);

  return (
    <div>
      <h3 className="text-xl sm:text-lg font-semibold">I&apos;m Richard Ejdling.</h3>
      <br />
      <div className="text-xl sm:text-lg">
        <p>
          I&apos;m a <span>{age}</span>-year-old front-end web developer based in Stockholm, Sweden, specializing in building dynamic and responsive websites and mobile applications using
          React and React Native.
          <br />
          <br />
          I love to learn, solve problems, and create, so when I discovered programming, it felt like a perfect fit for me.
          <br />
          <br />Recently graduated from a web development program, I&apos;m eager to apply my skills in a practical setting and collaborate on innovative projects.
        </p>
      </div>
      <Links />
    </div>
  );
}
