import Image from 'next/image'
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from 'react-icons/bs'
import Projects from './Projects'
import Technologies from './Technologies'
import About from './About'
import Contact from './Contact'
import { useEffect, useRef, useState } from 'react'
import { isMobileDevice } from '@/utils/isMobile';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(isMobileDevice())
  }, [])

  return (
    <>
      <div className='flex flex-col-reverse md:flex-row gap-4 justify-center items-center'>
        <div>
          <h1 className='text-6xl'>Hi! <br />I&apos;m Richard Ejdling</h1>
          <p className='text-xl mt-2'>Front-end developer</p>
        </div>
        <img src="/img/profile-img.jpg" alt='My Portrait' className='rounded-full object-cover object-center h-32 w-32' />
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center gap-6 mt-8'>
        <div className='flex justify-center gap-4'>
          <a href="https://github.com/richard-ejdling" target='_blank'><FaGithub size={40} className='rounded-full hover:shadow-hover ease-in-out duration-100' /></a>
          <a href="https://www.linkedin.com/in/richard-ejdling-4a0601273" target='_blank'><BsLinkedin size={40} className='rounded-sm hover:shadow-hover ease-in-out duration-100' /></a>
        </div>
        <div className='flex items-center gap-2 text-2xl sm:text-lg'>
          <p>CV:</p>
          <a href="/CV/CV English.pdf" download className='font-medium tracking-wide border-2 border-white hover:border-transparent active:border-transparent hover:bg-sky-600 ease-in-out duration-100 active:bg-sky-700 px-3 py-1 sm:py-0.5 rounded-full'/* 'underline underline-offset-2' */>Download</a>
          {!isMobile && <a href="/CV/CV English.pdf" target='_blank' className='font-medium tracking-wide border-2 border-white hover:border-transparent active:border-transparent hover:bg-sky-600 ease-in-out duration-100 active:bg-sky-700 px-3 py-1 sm:py-0.5 rounded-full'/* 'underline underline-offset-2' */>View</a>}
        </div>
      </div>
    </>
  )
}