import { GoMarkGithub } from 'react-icons/go'

export default function Projects() {
    // Olika img för mobil doch desktop? Mobilsidor i mobilläge och desktopsidor i desktopläge?
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

    return (
        <div>
            <h1 className="m-auto w-fit">Projects</h1>
            <p>A selection of personal projects</p>
            <ul className="flex flex-wrap mt-8 max-h-[450px] overflow-y-auto">
                {projects.map(project => {
                    return (
                        <li key={project.id} className="flex flex-col w-full sm:w-1/2 p-4 relative">
                            <a href={project.url} target='_blank' className="flex flex-col rounded-xl overflow-hidden h-full">
                                <img src={project.img} alt={project.alt} className="h-[150px] w-full object-cover" />
                                <div className="px-2 py-1 bg-sky-600 grow">
                                    <div className='h-full flex flex-col w-[calc(100%-38px)]'>
                                        <h2 className='font-bold text-lg'>{project.title}</h2>
                                        <p>{project.desc}</p>
                                    </div>
                                </div>
                            </a>
                            <a href={project.gitHub} target='_blank' className='rounded-full overflow-hidden shrink-0 absolute bottom-6 right-6 z-10'><GoMarkGithub size={30} /></a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}