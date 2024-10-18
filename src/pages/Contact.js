import { useState } from "react";
import { MdCopyAll } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

export default function Contact() {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText("richardej@hotmail.se")
    setCopied(true)

    setTimeout(()=> setCopied(false), 3000)
  }

  return (
    <div className="min-h-[calc(100vh-220px)] ">
      <div className=" flex flex-row items-center text-xl sm:text-lg">
        <p>Contact me at &nbsp;</p>
        <div className="flex flex-row items-center gap-2 bg-sky-600 pl-1.5 rounded-md">
          richardej@hotmail.se
          <button onClick={handleCopy} className="flex flex-row items-center gap-1 text-base border-l-2 border-white rounded-r-md p-1 h-full bg-sky-700 hover:bg-sky-600 active:bg-sky-600">
          {copied ? <FaCheck size={20} /> : <MdCopyAll size={20} />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
}
