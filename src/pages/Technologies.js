export default function Technologies() {
    const technologies = [
        {
            name: 'Html5',
            icon: '/html5.svg',
            alt: 'Html5 Logo',
            id: 1
        },
        {
            name: 'Html5',
            icon: '/html5.svg',
            alt: 'Html5 Logo',
            id: 2
        },
        {
            name: 'Html5',
            icon: '/html5.svg',
            alt: 'Html5 Logo',
            id: 3
        },
        {
            name: 'Html5',
            icon: '/html5.svg',
            alt: 'Html5 Logo',
            id: 4
        },
        {
            name: 'Html5',
            icon: '/html5.svg',
            alt: 'Html5 Logo',
            id: 5
        },
    ]

    return (
        <div>
            <h1 className="m-auto w-fit">Technologies</h1>
            <ul className="flex flex-wrap m-4 max-h-[600px] overflow-y-auto">
                {technologies.map(technology => {
                    return (
                        <li key={technology.id} className="flex flex-col items-center w-1/2 sm:w-1/4 p-4">
                            <img src={technology.icon} alt={technology.alt} className="" />
                            <p>{technology.name}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}