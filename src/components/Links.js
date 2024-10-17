import { isMobileDevice } from "@/utils/isMobile";
import { useEffect, useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function Links() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
      <div className="flex justify-center gap-4">
        <a
          title="GitHub"
          aria-label="Visit my GitHub page"
          href="https://github.com/richard-ejdling"
          target="_blank"
        >
          <FaGithub
            size={40}
            className="rounded-full hover:shadow-hover ease-in-out duration-100"
          />
        </a>
        <a
          title="LinkedIn"
          aria-label="Visit my LinkedIn page"
          href="https://www.linkedin.com/in/richard-ejdling-4a0601273"
          target="_blank"
        >
          <BsLinkedin
            size={40}
            className="rounded-sm hover:shadow-hover ease-in-out duration-100"
          />
        </a>
      </div>
      <div className="flex items-center gap-4 text-2xl sm:text-lg">
        <p
          className="font-normal text-4xl sm:text-2xl"
        >
          CV:
        </p>
        <span className="sr-only">Available in English or Swedish. Download or open in a new tab</span>
        <ul
          className="flex flex-col gap-2"
        >
          <li className="flex flex-col sm:flex-row gap-2 items-center">
            <p className="w-[90px] sm:w-[68px]">English:</p>
            <div className="flex gap-2">
              <a
                href="/CV/CV_English.pdf"
                download
                aria-label="Download English CV"
                className="font-medium tracking-wide border-2 border-white hover:border-transparent active:border-transparent hover:bg-sky-600 ease-in-out duration-100 active:bg-sky-700 px-3 pt-1.5 pb-0.5 sm:py-0.5 rounded-full " /* 'underline underline-offset-2' */
              >
                Download
              </a>
              {!isMobile && (
                <a
                  href="/CV/CV_English.pdf"
                  target="_blank"
                  aria-label="Open English CV in a new tab"
                  className="font-medium tracking-wide border-2 border-white hover:border-transparent active:border-transparent hover:bg-sky-600 ease-in-out duration-100 active:bg-sky-700 px-3 pt-1.5 pb-0.5 sm:py-0.5 rounded-full " /* 'underline underline-offset-2' */
                >
                  View
                </a>
              )}
            </div>
          </li>
          <li className="flex flex-col sm:flex-row gap-2 items-center">
            <p className="w-[90px] sm:w-[68px]">Swedish:</p>
            <div className="flex gap-2">
              <a
                href="/CV/CV_Swedish.pdf"
                download
                aria-label="Download Swedish CV"
                className="font-medium tracking-wide border-2 border-white hover:border-transparent active:border-transparent hover:bg-sky-600 ease-in-out duration-100 active:bg-sky-700 px-3 pt-1.5 pb-0.5 sm:py-0.5 rounded-full " /* 'underline underline-offset-2' */
              >
                Download
              </a>
              {!isMobile && (
                <a
                  href="/CV/CV_Swedish.pdf"
                  target="_blank"
                  aria-label="Open Swedish CV in a new tab"
                  className="font-medium tracking-wide border-2 border-white hover:border-transparent active:border-transparent hover:bg-sky-600 ease-in-out duration-100 active:bg-sky-700 px-3 pt-1.5 pb-0.5 sm:py-0.5 rounded-full " /* 'underline underline-offset-2' */
                >
                  View
                </a>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
