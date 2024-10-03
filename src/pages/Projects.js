import debounce from "@/utils/debounce";
import throttle from "@/utils/throttle";
import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { VscDebugRestart, VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import { RiRestartLine } from "react-icons/ri";
import {
  FaArrowRotateLeft,
  FaArrowRotateRight,
  FaArrowLeft,
  FaArrowRight,
  FaAnglesLeft,
  FaAnglesRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa6";

const projects = [
  /* {
        id: 1,
        title: 'Not available',
        desc: 'Not Available',
        img: '/no-image-available.jpg',
        alt: 'Not Availabe',
        url: 'https://github.com/richard-ejdling',
        gitHub: 'https://github.com/richard-ejdling?tab=repositories',
        techs:[]
    }, */
  {
    id: 1,
    title: "MovieShop",
    desc: "Fake Webshop using the T3-stack (in collaboration with Mojtaba-amirii, Naiso2022 and Farida1084)",
    img: "/project-img/movieshop2.png",
    alt: "movieshop",
    url: "https://movieshop.vercel.app/",
    gitHub: "https://github.com/Mojtaba-amirii/webbshop",
    techs: ["next", "typescript", "tailwind", "prisma", "trpc", "nextauth", "mongodb"],
  },
  {
    id: 2,
    title: "PokéAPI page",
    desc: "Website using PokéAPI where you can search for pokémon and display them and their stats",
    img: "/project-img/pokéAPI.png",
    alt: "PokéAPI page",
    url: "https://next-pokemonapi.vercel.app/",
    gitHub: "https://github.com/richard-ejdling/next-pokemonapi",
    techs: ["next", "typescript", "tailwind"],
  },
  {
    id: 3,
    title: "Zoom copy and redesign",
    desc: "A copy and redesign of the layout of Zoom's website",
    img: "/project-img/zoomCopyRedesign.png",
    alt: "Zoom copy and redesign",
    url: "https://zoom-copy-and-redesign.vercel.app/",
    gitHub: "https://github.com/richard-ejdling/zoom-copy-and-redesign",
    techs: ["react", "vite", "tailwind"],
  },
  {
    id: 4,
    title: "Weather app",
    desc: "Weather app created in React Native",
    img: "/project-img/weatherApp.png",
    alt: "Weather app",
    url: "/project-img/weatherApp.png",
    gitHub: "https://github.com/richard-ejdling/weather-app",
    techs: ["reactnative", "expo"],
  },
  {
    id: 5,
    title: "Blackjack",
    desc: "Blackjack game",
    img: "/project-img/blackjack.png",
    alt: "Blackjack",
    url: "https://richard-ejdling.github.io/chas_blackjack/",
    gitHub: "https://github.com/richard-ejdling/chas_blackjack",
    techs: ["vanilla"],
  },
  {
    id: 6,
    title: "Todo list",
    desc: "Todo list website with both redux and reducer",
    img: "/project-img/todo.png",
    alt: "Todo list",
    url: "https://todo-list-redux-ten.vercel.app",
    gitHub: "https://github.com/richard-ejdling/todo-list-redux",
    techs: ["react", "vite", "redux"],
  },
  {
    id: 7,
    title: "Quiz",
    desc: "Create and take quizzes. Made using redux.",
    img: "/project-img/quiz.png",
    alt: "Quiz",
    url: "https://quizz-redux-beta.vercel.app/",
    gitHub: "https://github.com/richard-ejdling/quizz-redux",
    techs: ["react", "vite", "redux", "tailwind"],
  },
  {
    id: 8,
    title: "Hangman",
    desc: "Hangman game",
    img: "/project-img/hangman.png",
    alt: "Hangman",
    url: "https://richard-ejdling.github.io/hangman/",
    gitHub: "https://github.com/richard-ejdling/hangman",
    techs: ["vanilla"],
  },
  {
    id: 9,
    title: "Radio player",
    desc: "Radio player using sr.se's api",
    img: "/project-img/radio2.png",
    alt: "Radio player",
    url: "https://richard-ejdling.github.io/chas_radioplayer/",
    gitHub: "https://github.com/richard-ejdling/chas_radioplayer",
    techs: ["vanilla"],
  },
  {
    id: 10,
    title: "World Time Website",
    desc: "React router exercise showing the time in different cities",
    img: "/project-img/worldClock.png",
    alt: "World Time Website",
    url: "https://world-time-website.vercel.app/",
    gitHub: "https://github.com/richard-ejdling/world-time-website",
    techs: ["react", "vite", "tailwind"],
  },
];

const techInfo = {
  react: {
    title: "React",
    color: "#61DAFB",
  },
  next: {
    title: "Next.js",
    color: "#000000",
  },
  vite: {
    title: "Vite",
    color: "#646CFF",
  },
  tailwind: {
    title: "Tailwind CSS",
    color: "#38B2AC",
  },
  vanilla: {
    title: "Vanilla",
    color: "#F7DF1E",
  },
  redux: {
    title: "Redux",
    color: "#764ABC",
  },
  reactnative: {
    title: "React Native",
    color: "#61DAFB",
  },
  expo: {
    title: "Expo",
    color: "#000020",
  },
  typescript: {
    title: "TypeScript",
    color: "#3178C6",
  },
  prisma: {
    title: "Prisma",
    color: "#2D3748",
  },
  trpc: {
    title: "tRPC",
    color: "#D63F8D",
  },
  nextauth: {
    title: "NextAuth.js",
    color: "#7C3AED",
  },
  mongodb: {
    title: "MongoDB",
    color: "#47A248",
  },
};

export default function Projects() {
  const [isScrollable, setIsScrollable] = useState(false);
  const [isScrollStart, setIsScrollStart] = useState(true);
  const [isScrollEnd, setIsScrollEnd] = useState(false);

  const listRef = useRef(null);

  // vv checkScroll only necessary with < 4 projects vv

  // Show the scroll button if our main container is smaller than our content width
  // Basically when our scroll bar is shown in overflow auto
  /* const checkScroll = () => {
        if (
            listRef &&
            listRef.current &&
            listRef.current.scrollWidth > listRef.current.clientWidth
        ) {
            setIsScrollable(true);
        } else {
            setIsScrollable(false);
        }
    }; */

  // checks whether scroll is at edges and sets up to restart scroll (scroll directly back to beinning or end)
  const checkScrollEdges = () => {
    if (listRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = listRef.current;

      setIsScrollStart(scrollLeft === 0);
      setIsScrollEnd(scrollLeft + clientWidth > scrollWidth - 1);
    }
  };

  const btnScroll = (action) => {
    const offset = 182;

    switch (action) {
      case "forward":
        if (isScrollEnd) {
          listRef.current.scrollLeft = 0;
        } else listRef.current.scrollLeft += offset;
        break;
      case "backward":
        if (isScrollStart) {
          listRef.current.scrollLeft = listRef.current.scrollWidth;
        } else listRef.current.scrollLeft += -offset;
        break;
    }
  };

  const throttledCheckScrollEdges = throttle(checkScrollEdges, 200);

  useEffect(() => {
    /* checkScroll(); */

    listRef.current.addEventListener("scroll", throttledCheckScrollEdges);

    return () => {
      listRef.current.removeEventListener("scroll", throttledCheckScrollEdges);
    };
  }, []);

  return (
    <div>
      <p className="text-xl sm:text-lg">A selection of personal projects</p>
      <ul
        ref={listRef}
        className="flex gap-4 sm:gap-8 h-[26rem] sm:h-80 mt-8 pb-3 sm:pb-2 max-sm:w-[calc(100%+5rem)] max-sm:-ml-10 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-sky-600 scroll-smooth"
      >
        {projects.map((project, i) => {
          return (
            <li
              key={project.id}
              className="flex flex-col relative snap-center sm:snap-start w-[calc(300px+4px)] max-w-full h-[calc(100%-4px)] shrink-0 max-sm:first:ml-4 max-sm:last:mr-4 rounded-xl mt-1 pl-1"
            >
              <a
                href={project.url}
                target="_blank"
                title={`Open ${project.title}`}
                aria-label={`Open ${project.title} in a new tab`}
                className="flex flex-col rounded-xl h-full p-1.5 bg-sky-600 hover:bg-sky-650"
              >
                <img
                  src={project.img}
                  alt={project.alt}
                  className="h-60 sm:h-44 w-full object-cover rounded-xl"
                />
                <div className="pt-1">
                  <div className="flex flex-col w-[calc(100%-38px)]">
                    <h3 className="font-semibold tracking-wide text-2xl sm:text-lg">
                      {project.title}
                    </h3>
                    <p className="max-sm:text-xl">{project.desc}</p>
                  </div>
                </div>
                
              <div title="Tecnologies used for this project" aria-label="Tecnologies used for this project" className="absolute -right-2 top-2 flex flex-col items-end gap-[1px]">
                {project.techs.slice(0, 5).map((item) => {
                  const tech = techInfo[item];
                  return (
                    <div
                      key={tech.title}
                      style={{
                        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5))",
                      }}
                    >
                      <div
                        className={`ribbon font-semibold tracking-wide max-[310px]:pr-2`}
                        style={{
                          backgroundColor: tech.color,
                          /* textShadow: "1px 1px grey", */
                          /* textShadow:
                            "1px 0 0 black, -1px 0 0 black, 0 1px 0 black, 0 -1px 0 black,0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black, 0.25px 0.25px 0 black, -0.25px 0.25px 0 black, 0.25px -0.25px 0 black, -0.25px -0.25px 0 black",
                         */
                            textShadow: "1px 1px 0 black, 0.5px 1px 0 black, -0.5px 1px 0 black, -1px -1px 0 black, -1px 0 0 black, -1px 1px 0 black, 1px -1px 0 black, 1px 0 0 black, 1px 1px 0 black, 0px 1px 0 black, 0px -1px 0 black, -1px 0 0 black, 0.5px 0.5px 0 black, -0.5px -0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black",
                        }}
                      >
                        {tech.title}
                      </div>
                    </div>
                  );
                })}
                {project.techs.slice(5, project.techs.length).map((item) => {
                  const tech = techInfo[item];
                  return (
                    <div
                      key={tech.title}
                      style={{
                        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5))",
                      }}
                    >
                      <div
                        className={`ribbon font-semibold tracking-wide text-[8px] max-w-14 max-[310px]:w-[60px]`}
                        style={{
                          backgroundColor: tech.color,
                          textShadow: "1px 1px grey",
                        }}
                      >
                        {tech.title}
                      </div>
                    </div>
                  );
                })}
              </div>
              </a>
              <a
                href={project.gitHub}
                target="_blank"
                title={`Visit ${project.title}'s GitHub page`}
                aria-label={`Visit ${project.title}'s GitHub page`}
                className="rounded-full overflow-hidden shrink-0 absolute bottom-2 right-2 z-10 text-gray-100 hover:text-white hover:scale-105"
              >
                <FaGithub size={30} />
              </a>
            </li>
          );
        })}
      </ul>

      {
        /* isScrollable && */
        <div className="flex justify-center gap-4 mt-4 w-full">
          <button
            className="flex justify-center items-center h-20 sm:h-[60px] w-20 sm:w-[60px] border-2 border-white hover:border-transparent active:border-transparent hover:bg-sky-600 ease-in-out duration-100 active:bg-sky-700 rounded-full"
            onClick={() => btnScroll("backward")}
          >
            {isScrollStart ? (
              <>
                <FaArrowRight className="text-4xl sm:text-3xl" />
                <FaAngleRight className="text-4xl sm:text-3xl -ml-4 sm:-ml-3.5" />
              </>
            ) : (
              <FaArrowLeft className="text-4xl  sm:text-3xl" />
            )}
          </button>
          <button
            className="flex justify-center items-center h-20 sm:h-[60px] w-20 sm:w-[60px] border-2 border-white hover:border-transparent active:border-transparent hover:bg-sky-600 ease-in-out duration-100 active:bg-sky-700 rounded-full"
            onClick={() => btnScroll("forward")}
          >
            {isScrollEnd ? (
              <>
                <FaAngleLeft className="text-4xl sm:text-3xl -mr-4 sm:-mr-3.5" />
                <FaArrowLeft className="text-4xl sm:text-3xl" />
              </>
            ) : (
              <FaArrowRight className="text-4xl  sm:text-3xl" />
            )}
          </button>
        </div>
      }
    </div>
  );
}
