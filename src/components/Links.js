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
          href="https://github.com/richard-ejdling"
          target="_blank"
        >
          <FaGithub
            size={40}
            className="rounded-full hover:shadow-hover ease-in-out duration-100"
          />
        </a>
        <a
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
        <p className="font-normal text-4xl sm:text-2xl">CV:</p>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <p>EN:</p>
            <div className="flex gap-2">
              <a
                href="/CV/CV English.pdf"
                download
                className="font-medium tracking-wide border-2 border-white hover:border-transparent active:border-transparent hover:bg-sky-600 ease-in-out duration-100 active:bg-sky-700 px-3 py-1 sm:py-0.5 rounded-full" /* 'underline underline-offset-2' */
              >
                Download
              </a>
              {!isMobile && (
                <a
                  href="/CV/CV English.pdf"
                  target="_blank"
                  className="font-medium tracking-wide border-2 border-white hover:border-transparent active:border-transparent hover:bg-sky-600 ease-in-out duration-100 active:bg-sky-700 px-3 py-1 sm:py-0.5 rounded-full" /* 'underline underline-offset-2' */
                >
                  View
                </a>
              )}
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <p>SV:</p>
            <div className="flex gap-2">
              <a
                href="/CV/CV English.pdf"
                download
                className="font-medium tracking-wide border-2 border-white hover:border-transparent active:border-transparent hover:bg-sky-600 ease-in-out duration-100 active:bg-sky-700 px-3 py-1 sm:py-0.5 rounded-full" /* 'underline underline-offset-2' */
              >
                Download
              </a>
              {!isMobile && (
                <a
                  href="/CV/CV English.pdf"
                  target="_blank"
                  className="font-medium tracking-wide border-2 border-white hover:border-transparent active:border-transparent hover:bg-sky-600 ease-in-out duration-100 active:bg-sky-700 px-3 py-1 sm:py-0.5 rounded-full" /* 'underline underline-offset-2' */
                >
                  View
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
