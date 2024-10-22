import { useRef, useState } from "react";
import { FaCheck, FaPaperPlane, FaX } from "react-icons/fa6";
import Loader from "./Loader";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [mailStatus, setMailStatus] = useState(0); // 0=default, 1=success, 2=failure/error

  console.log(mailStatus, mailStatus === 1);

  const timeoutRef = useRef();

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    const formData = new FormData(event.target);

    formData.append("access_key", "ccb51268-1700-465d-a6db-00fa5bab6634");

    const object = Object.fromEntries(formData);
    /* object.from_name = object.name; */
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();

    console.log(result);
    if (result.success) {
      setIsLoading(false);
      setMailStatus(1);
    } else {
      setIsLoading(false);
      setMailStatus(2);
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setMailStatus(0);
      timeoutRef.current = null;
    }, 5000);
  }

  return (
    <form
      className="flex flex-col gap-2 w-full max-w-lg bg-sky-600 rounded-lg p-4"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label htmlFor="name">Name:</label>
        <input
          className="rounded-lg px-2 text-black"
          style={{ textShadow: "0 0 0" }}
          type="text"
          name="name"
          id="name"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email:</label>
        <input
          className="rounded-lg px-2 text-black"
          style={{ textShadow: "0 0 0" }}
          type="email"
          name="email"
          id="email"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="subject">Subject:</label>
        <input
          className="rounded-lg px-2 text-black"
          style={{ textShadow: "0 0 0" }}
          type="text"
          name="subject"
          id="subject"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message">Message:</label>
        <textarea
          className="rounded-lg px-1 border-4 border-white text-black"
          style={{ textShadow: "0 0 0" }}
          name="message"
          id="message"
          required
        />
      </div>
      <input
        type="hidden"
        name="from_name"
        value="Portfolio Direct Message"
      />
      <button
        className={`relative flex items-center justify-center gap-2 mt-2 w-full text-center p-1 overflow-hidden ${
          mailStatus === 0
            ? "bg-sky-700 hover:bg-sky-800 active:bg-sky-900"
            : mailStatus === 1
            ? "bg-green-600 hover:bg-green-600 active:bg-green-600"
            : "bg-red-600 hover:bg-red-600 active:bg-red-600"
        } rounded-lg transition-colors duration-100`}
        type="submit"
        disabled={mailStatus != 0}
      >
        {mailStatus === 0 ? (
          <>
            {isLoading ? (
              <div className="h-5 sm:h-[18px]">
                <Loader
                  weight={3}
                  speed="0.75"
                  easing="ease-in-out"
                  design="standard"
                />
              </div>
            ) : (
              <FaPaperPlane />
            )}
            Send Email
          </>
        ) : mailStatus === 1 ? (
          <>
            <FaCheck />
            Email Sent
          </>
        ) : (
          <>
            <FaX />
            Error. Try again
          </>
        )}
        <div className={`absolute bottom-0 left-0 h-[4px] ${mailStatus === 0 ? 'w-full' : 'w-0'} ${mailStatus === 0 ? 'bg-transparent': mailStatus === 1 ? 'bg-green-800':'bg-red-800'}  rounded-full transition-[width] duration-[5000ms] ease-linear`} />
      </button>
    </form>
  );
}
