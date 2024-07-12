export default function Technologies() {
    const mainTech = [
        {
            name: 'Html5',
            icon: '/technology-icons/html5.svg',
            alt: 'Html5 Logo',
            white_bg: false
        },
        {
            name: 'CSS3',
            icon: '/technology-icons/CSS3.svg',
            alt: 'CSS3 Logo',
            white_bg: false
        },
        {
            name: 'Tailwind CSS',
            icon: '/technology-icons/Tailwind_CSS.svg',
            alt: 'Tailwind CSS Logo',
            white_bg: false
        },
        {
            name: 'Javascript',
            icon: '/technology-icons/JavaScript.svg',
            alt: 'Javascript Logo',
            white_bg: false
        },
        {
            name: 'Typescript',
            icon: '/technology-icons/Typescript.svg',
            alt: 'Typescript Logo',
            white_bg: false
        },
        {
            name: 'React',
            icon: '/technology-icons/React.svg',
            alt: 'React Logo',
            white_bg: false
        },
        {
            name: 'Next.js',
            icon: '/next.svg',
            alt: 'Next.js Logo',
            white_bg: true
        },
        {
            name: 'React Native',
            icon: '/technology-icons/React.svg',
            alt: 'React Native Logo',
            white_bg: false
        },
        {
            name: 'Expo',
            icon: '/technology-icons/expo-a.svg',
            alt: 'Expo Logo',
            white_bg: true
        },
        {
            name: 'T3',
            icon: '/technology-icons/t3-light.svg',
            alt: 'T3 Logo',
            white_bg: false
        },
    ]
    const familiarTech = [
        {
            name: 'GraphQL',
            icon: '/technology-icons/GraphQL Logo (Rhodamine).png',
            alt: 'GraphQL Logo',
            white_bg: false
        },
        {
            name: 'Hasura',
            icon: '/technology-icons/Hasura_id8f6CP8HR_8.png',
            alt: 'Hasura Logo',
            white_bg: false
        },
        {
            name: 'SQL',
            icon: '/technology-icons/sql-server-icon-png-11368.png',
            alt: 'SQL Logo',
            white_bg: false
        },
        {
            name: 'MySQL',
            icon: '/technology-icons/mysql.png',
            alt: 'MySQL Logo',
            white_bg: false
        },
        {
            name: 'MongoDB',
            icon: '/technology-icons/Mongodb.svg',
            alt: 'MongoDB Logo',
            white_bg: false
        },
        {
            name: 'Express.js',
            icon: '/technology-icons/Expressjs.png',
            alt: 'Express.js Logo',
            white_bg: true
        },
    ]

    return (
        <div className="text-center">
            <h1>Technologies</h1>
            <div className="">
                <h2>Main</h2>
                <ul className="flex flex-wrap">
                    {mainTech.map(technology => {
                        return (
                            <li key={technology.name} className='flex flex-col items-center justify-center w-1/3 sm:w-1/4 p-4 text-center'>
                                <img src={technology.icon} alt={technology.alt} className={`aspect-square w-full object-contain ${technology.white_bg ? 'bg-white p-2' : ''}`} />
                                <p>{technology.name}</p>
                            </li>
                        )
                    })}
                </ul>
                <h2>Familiar with</h2>
                <ul className="flex flex-wrap">
                    {familiarTech.map(technology => {
                        return (
                            <li key={technology.name} className='flex flex-col items-center justify-center w-1/3 sm:w-1/4 p-4 text-center'>
                                <img src={technology.icon} alt={technology.alt} className={`aspect-square w-full object-contain ${technology.white_bg ? 'bg-white p-2' : ''}`} />
                                <p>{technology.name}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}