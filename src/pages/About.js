import { GoMarkGithub } from 'react-icons/go'
import { BsLinkedin } from 'react-icons/bs'

export default function About() {
    return (
        <div>
            <h1 className="m-auto w-fit">About</h1>
            <p>Info about me.........</p>
            <div className='flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 mt-2'>
                <div className='flex justify-center gap-4'>
                    <a href="https://github.com/richard-ejdling" target='_blank'><GoMarkGithub size={30} className='rounded-full hover:shadow-hover ease-in-out duration-100' /></a>
                    <a href="https://www.linkedin.com/in/richard-ejdling-4a0601273" target='_blank'><BsLinkedin size={30} className='rounded-sm hover:shadow-hover ease-in-out duration-100' /></a>
                </div>
                <div className='flex gap-1'>
                    <p>CV:</p>
                    <a href="/CV/CV English.pdf" download className='bg-sky-600 hover:bg-sky-700 ease-in-out duration-100 px-2 rounded-full'/* 'underline underline-offset-2' */>Download</a>
                    <a href="/CV/CV English.pdf" target='_blank' className='bg-sky-600 hover:bg-sky-700 ease-in-out duration-100 px-2 rounded-full'/* 'underline underline-offset-2' */>View</a>
                </div>
            </div>
        </div>
    )
}