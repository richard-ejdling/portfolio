import { GoMarkGithub } from 'react-icons/go'

export default function Projects() {
    const projects = [
        {
            url: 'https://github.com/chasacademy-richard-ejdling',
            title: 'Shiva Rules!!',
            img: '/Shiva.jpg',
            alt: 'Cat app',
            desc: 'Cat App',
            gitHub: 'https://github.com/chasacademy-richard-ejdling?tab=repositories',
            id: 1
        },
        {
            url: 'https://github.com/chasacademy-richard-ejdling',
            title: 'Shiva Rules!!',
            img: '/Shiva.jpg',
            alt: 'Cat app',
            desc: 'Cat App',
            gitHub: 'https://github.com/chasacademy-richard-ejdling?tab=repositories',
            id: 2
        },
        {
            url: 'https://github.com/chasacademy-richard-ejdling',
            title: 'Shiva Rules!!',
            img: '/Shiva.jpg',
            alt: 'Cat app',
            desc: 'Cat App',
            gitHub: 'https://github.com/chasacademy-richard-ejdling?tab=repositories',
            id: 3
        },
        {
            url: 'https://github.com/chasacademy-richard-ejdling',
            title: 'Shiva Rules!!',
            img: '/Shiva.jpg',
            alt: 'Cat app',
            desc: 'Cat App',
            gitHub: 'https://github.com/chasacademy-richard-ejdling?tab=repositories',
            id: 4
        },
        {
            url: 'https://github.com/chasacademy-richard-ejdling',
            title: 'Shiva Rules!!',
            img: '/Shiva.jpg',
            alt: 'Cat app',
            desc: 'Cat App',
            gitHub: 'https://github.com/chasacademy-richard-ejdling?tab=repositories',
            id: 5
        },
        {
            url: 'https://github.com/chasacademy-richard-ejdling',
            title: 'Shiva Rules!!',
            img: '/Shiva.jpg',
            alt: 'Cat app',
            desc: 'Cat App',
            gitHub: 'https://github.com/chasacademy-richard-ejdling?tab=repositories',
            id: 6
        },
        {
            url: 'https://github.com/chasacademy-richard-ejdling',
            title: 'Shiva Rules!!',
            img: '/Shiva.jpg',
            alt: 'Cat app',
            desc: 'Cat App',
            gitHub: 'https://github.com/chasacademy-richard-ejdling?tab=repositories',
            id: 7
        },
        {
            url: 'https://github.com/chasacademy-richard-ejdling',
            title: 'Shiva Rules!!',
            img: '/Shiva.jpg',
            alt: 'Cat app',
            desc: 'Cat App',
            gitHub: 'https://github.com/chasacademy-richard-ejdling?tab=repositories',
            id: 8
        },
    ]

    return (
        <div>
            <h1 className="m-auto w-fit">Projects</h1>
            <ul className="flex flex-wrap m-4 max-h-[450px] overflow-y-auto">
                {projects.map(project => {
                    return (
                        <li key={project.id} className="flex flex-col sm:w-1/2 p-4 relative">
                            <a href={project.url} target='_blank' className="border border-sky-600 rounded-xl overflow-hidden">
                                <img src={project.img} alt={project.alt} className="" />
                                <div className="flex justify-between items-center bg-sky-600">
                                    <div>
                                        <h2>{project.title}</h2>
                                        <p>{project.desc}</p>
                                    </div>
                                </div>
                            </a>
                            <a href={project.gitHub} target='_blank' className='absolute bottom-6 right-6'><GoMarkGithub size={30} /></a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}