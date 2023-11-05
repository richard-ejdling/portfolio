export default function Technologies() {
    const technologies = [
        {
            name: 'Html5',
            icon: '/technology-icons/html5.svg',
            alt: 'Html5 Logo',
            id: 1,
            white_bg: false
        },
        {
            name: 'CSS3',
            icon: '/technology-icons/CSS3.svg',
            alt: 'CSS3 Logo',
            id: 2,
            white_bg: false
        },
        {
            name: 'Tailwind CSS',
            icon: '/technology-icons/Tailwind_CSS.svg',
            alt: 'Tailwind CSS Logo',
            id: 3,
            white_bg: false
        },
        {
            name: 'Javascript',
            icon: '/technology-icons/JavaScript.svg',
            alt: 'Javascript Logo',
            id: 4,
            white_bg: false
        },
        {
            name: 'Typescript',
            icon: '/technology-icons/Typescript.svg',
            alt: 'Typescript Logo',
            id: 5,
            white_bg: false
        },
        {
            name: 'React',
            icon: '/technology-icons/React.svg',
            alt: 'React Logo',
            id: 6,
            white_bg: false
        },
        {
            name: 'React Native',
            icon: '/technology-icons/React.svg',
            alt: 'React Native Logo',
            id: 7,
            white_bg: false
        },
        {
            name: 'Express.js',
            icon: '/technology-icons/Expressjs.png',
            alt: 'Express.js Logo',
            id: 8,
            white_bg: true
        },
        {
            name: 'MySQL',
            icon: '/technology-icons/mysql.png',
            alt: 'MySQL Logo',
            id: 9,
            white_bg: false
        },
        {
            name: 'Next.js',
            icon: '/next.svg',
            alt: 'Next.js Logo',
            id: 10,
            white_bg: true
        },
        {
            name: 'MongoDB',
            icon: '/technology-icons/Mongodb.svg',
            alt: 'MongoDB Logo',
            id: 11,
            white_bg: false
        },
        {
            name: 'T3',
            icon: '/technology-icons/t3-light.svg',
            alt: 'T3 Logo',
            id: 12,
            white_bg: false
        },
    ]

    return (
        <div className="max-w-[760px]">
            <h1 className="m-auto w-fit">Technologies</h1>
            <ul className="flex flex-wrap m-4">
                {technologies.map(technology => {
                    return (
                        <li key={technology.id} className='flex flex-col items-center justify-center w-1/3 sm:w-1/4 p-4'>
                            <img src={technology.icon} alt={technology.alt} className={`aspect-square w-full object-contain ${technology.white_bg ? 'bg-white p-2' : ''}`} />
                            <p>{technology.name}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}