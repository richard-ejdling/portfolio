import debounce from "@/utils/debounce";
import throttle from "@/utils/throttle";
import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { VscDebugRestart, VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import { RiRestartLine } from "react-icons/ri";
import { FaArrowRotateLeft, FaArrowRotateRight, FaArrowLeft, FaArrowRight, FaAnglesLeft, FaAnglesRight, FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const projects = [
    /* {
        url: 'https://github.com/richard-ejdling',
        title: 'Not available',
        img: '/no-image-available.jpg',
        alt: 'Not Availabe',
        desc: 'Not Available',
        gitHub: 'https://github.com/richard-ejdling?tab=repositories',
        id: 1
    }, */
    {
        url: 'https://movieshop.vercel.app/',
        title: 'MovieShop',
        img: '/project-img/movieshop2.png',
        alt: 'movieshop',
        desc: 'Fake Webshop using the T3-stack (in collaboration with Mojtaba-amirii, Naiso2022 and Farida1084)',
        gitHub: 'https://github.com/Mojtaba-amirii/webbshop',
        id: 1
    },
    {
        url: 'https://next-pokemonapi.vercel.app/',
        title: 'PokéAPI page',
        img: '/project-img/pokéAPI.png',
        alt: 'PokéAPI page',
        desc: 'Website using PokéAPI where you can search for pokémon and display them and their stats',
        gitHub: 'https://github.com/richard-ejdling/next-pokemonapi',
        id: 2
    },
    {
        url: 'https://zoom-copy-and-redesign.vercel.app/',
        title: 'Zoom copy and redesign',
        img: '/project-img/zoomCopyRedesign.png',
        alt: 'Zoom copy and redesign',
        desc: 'A copy and redesign of the layout of Zoom\'s website',
        gitHub: 'https://github.com/richard-ejdling/zoom-copy-and-redesign',
        id: 3
    },
    {
        url: '/project-img/weatherApp.png',
        title: 'Weather app',
        img: '/project-img/weatherApp.png',
        alt: 'Weather app',
        desc: 'Weather app created in React Native',
        gitHub: 'https://github.com/richard-ejdling/weather-app',
        id: 4
    },
    {
        url: 'https://richard-ejdling.github.io/chas_blackjack/',
        title: 'Blackjack',
        img: '/project-img/blackjack.png',
        alt: 'Blackjack',
        desc: 'Blackjack game',
        gitHub: 'https://github.com/richard-ejdling/chas_blackjack',
        id: 5
    },
    {
        url: 'todo-list-redux-ten.vercel.app',
        title: 'Todo list',
        img: '/project-img/todo.png',
        alt: 'Todo list',
        desc: 'Todo list website with both redux and reducer',
        gitHub: 'https://github.com/richard-ejdling/todo-list-redux',
        id: 6
    },
    {
        url: 'https://quizz-redux-beta.vercel.app/',
        title: 'Quiz',
        img: '/project-img/quiz.png',
        alt: 'Quiz',
        desc: 'Create and take quizzes. Made using redux.',
        gitHub: 'https://github.com/richard-ejdling/quizz-redux',
        id: 7
    },
    {
        url: 'https://richard-ejdling.github.io/hangman/',
        title: 'Hangman',
        img: '/project-img/hangman.png',
        alt: 'Hangman',
        desc: 'Hangman game',
        gitHub: 'https://github.com/richard-ejdling/hangman',
        id: 8
    },
    {
        url: 'https://richard-ejdling.github.io/chas_radioplayer/',
        title: 'Radio player',
        img: '/project-img/radio2.png',
        alt: 'Radio player',
        desc: 'Radio player using sr.se\'s api',
        gitHub: 'https://github.com/richard-ejdling/chas_radioplayer',
        id: 9
    },
    {
        url: 'https://world-time-website.vercel.app/',
        title: 'World Time Website',
        img: '/project-img/worldClock.png',
        alt: 'World Time Website',
        desc: 'React router exercise showing the time in different cities',
        gitHub: 'https://github.com/richard-ejdling/world-time-website',
        id: 10
    },
]

export default function Projects() {
    const [isScrollVisible, setIsScrollVisible] = useState(false)
    const [isScrollStart, setIsScrollStart] = useState(true)
    const [isScrollEnd, setIsScrollEnd] = useState(false)

    const listRef = useRef(null)

    // Show the scroll button if our main container is smaller than our content width
    // Basically when our scroll bar is shown in overflow auto
    const checkScroll = () => {
        if (
            listRef &&
            listRef.current &&
            listRef.current.scrollWidth > listRef.current.clientWidth
        ) {
            setIsScrollVisible(true);
        } else {
            setIsScrollVisible(false);
        }
    };

    // checks whether scroll is at edges and sets up to restart scroll (scroll directly back to beinning or end)
    const checkScrollEdges = () => {
        if (listRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = listRef.current;

            setIsScrollStart(scrollLeft === 0);
            setIsScrollEnd(scrollLeft + clientWidth > scrollWidth - 1);
        }
    };


    const btnScroll = (action) => {
        const offset = 182

        switch (action) {
            case 'forward':
                if (isScrollEnd) {
                    listRef.current.scrollLeft = 0
                } else listRef.current.scrollLeft += offset;
                break;
            case 'backward':
                if (isScrollStart) {
                    listRef.current.scrollLeft = listRef.current.scrollWidth
                } else listRef.current.scrollLeft += -offset;
                break;
        }
    };

    const throttledCheckScrollEdges = throttle(checkScrollEdges, 200)

    useEffect(() => {
        checkScroll();

        listRef.current.addEventListener('scroll', throttledCheckScrollEdges)

        return () => {
            listRef.current.removeEventListener('scroll', throttledCheckScrollEdges)
        }
    }, []);

    return (
        <div>
            <p>A selection of personal projects</p>
            <ul ref={listRef} className="flex gap-4 sm:gap-8 mt-8 pb-3 sm:pb-2 max-sm:w-[calc(100%+5rem)] max-sm:-ml-10 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-sky-600 scroll-smooth">
                {projects.map((project, i) => {
                    return (
                        <li key={project.id} className="flex flex-col relative snap-center sm:snap-start w-[300px] max-w-full h-full shrink-0 max-sm:first:ml-4 max-sm:last:mr-4">
                            <a href={project.url} target='_blank' className="flex flex-col rounded-xl overflow-hidden">
                                <img src={project.img} alt={project.alt} className="h-[150px] w-full object-cover" />
                                <div className="px-2 py-1 bg-sky-600 grow">
                                    <div className='flex flex-col w-[calc(100%-38px)]'>
                                        <h2 className='font-bold text-lg'>{project.title}</h2>
                                        <p>{project.desc}</p>
                                    </div>
                                </div>
                            </a>
                            <a href={project.gitHub} target='_blank' className='rounded-full overflow-hidden shrink-0 absolute bottom-2 right-2 z-10'><FaGithub size={30} /></a>
                        </li>
                    )
                })}
            </ul>
            {isScrollVisible && <div className="flex justify-center gap-4 mt-4 w-full">
                <button className="flex justify-center items-center h-20 sm:h-[60px] w-20 sm:w-[60px] hover:bg-sky-600 ease-in-out duration-100 active:bg-sky-700 rounded-full" onClick={() => btnScroll('backward')}>{isScrollStart ? (<>
                    <FaArrowRight className="text-4xl sm:text-3xl" />
                    <FaAngleRight className="text-4xl sm:text-3xl -ml-4 sm:-ml-3.5" />
                </>) : <FaArrowLeft className="text-4xl  sm:text-3xl" />}</button>
                <button className="flex justify-center items-center h-20 sm:h-[60px] w-20 sm:w-[60px] hover:bg-sky-600 ease-in-out duration-100 active:bg-sky-700 rounded-full" onClick={() => btnScroll('forward')}>{isScrollEnd ? (<>
                    <FaAngleLeft className="text-4xl sm:text-3xl -mr-4 sm:-mr-3.5" />
                    <FaArrowLeft className="text-4xl sm:text-3xl" />
                </>) : <FaArrowRight className="text-4xl  sm:text-3xl" />}</button>
            </div>}
        </div>
    )
}