import { useState } from "react";
import { MdCopyAll } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText("richardej@hotmail.se");
    setCopied(true);

    setTimeout(() => setCopied(false), 3000);
  }

  return (
    <div className="min-h-[calc(100vh-220px)] flex flex-col items-center gap-4 text-xl sm:text-lg">
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-0 items-center">
        <h3>Contact me at &nbsp;</h3>
        <div className="flex flex-row items-center gap-2 bg-sky-600 pl-1.5 rounded-md">
          richardej@hotmail.se
          <button
            onClick={handleCopy}
            className="flex flex-row items-center gap-1 text-lg sm:text-base border-l-2 border-white rounded-r-md p-1 h-full bg-sky-700 hover:bg-sky-600 active:bg-white active:text-sky-600"
          >
            {copied ? <FaCheck size={20} /> : <MdCopyAll size={20} />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>
      <p>Or</p>
      <div className="flex flex-col items-center gap-2 w-full">
        <h3>Use the form below</h3>
        <ContactForm />
      </div>
    </div>
  );
}
