import Image from 'next/image'
import { Inter } from 'next/font/google'
import { GoMarkGithub } from 'react-icons/go'
import { BsLinkedin } from 'react-icons/bs'
import Projects from './Projects'
import Technologies from './Technologies'
import About from './About'
import Contact from './Contact'
import { useEffect, useRef } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  /* const projectsRef = useRef(null)
  const technologiesRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
      console.log(projectsRef.current.offsetTop)
      console.log(technologiesRef.current.offsetTop)
      console.log(aboutRef.current.offsetTop)
      console.log(contactRef.current.offsetTop)
  }, [projectsRef, technologiesRef, aboutRef, contactRef]) */

  return (
    <>
      <div className='flex flex-col-reverse md:flex-row items-center'>
        <div>
          <h1>Hi! <br />{"I'm Richard Ejdling"}</h1>
          <p className=''>Front-end developer</p>
        </div>
        <img src="/Shiva.jpg" alt='My Portrait' className='rounded-full object-cover object-center h-20 w-20' />
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center md:gap-2 mt-2'>
        <div className='flex justify-center gap-2'>
          <a href="https://github.com/chasacademy-richard-ejdling" target='_blank'><GoMarkGithub /></a>
          <a href="" target='_blank'><BsLinkedin /></a>
        </div>
        <div className='flex gap-1'>
          <p>CV:</p>
          <a href="/Shiva.jpg" download>Download</a>
          <a href="/Shiva.jpg" target='_blank'>View</a>
        </div>
      </div>

      {/* <main className="flex min-h-screen flex-col items-center justify-between">
      <section id='home' className='scroll-mt-10'>
        <div className='flex flex-col-reverse md:flex-row items-center'>
          <div>
            <h1>Hi! <br />I'm Richard Ejdling</h1>
            <p className=''>Front-end developer</p>
          </div>
          <img src="/Shiva.jpg" alt='My Portrait' className='rounded-full object-cover object-center h-20 w-20' />
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center md:gap-2 mt-2'>
          <div className='flex justify-center gap-2'>
            <a href="https://github.com/chasacademy-richard-ejdling" target='_blank'><GoMarkGithub /></a>
            <a href="" target='_blank'><BsLinkedin /></a>
          </div>
          <div className='flex gap-1'>
            <p>CV:</p>
            <a href="/Shiva.jpg" download>Download</a>
            <a href="/Shiva.jpg" target='_blank'>View</a>
          </div>
        </div>
      </section>
      <section className='h-[1000px] scroll-mt-10' id='projects' ref={projectsRef}>
        <Projects />
      </section>
      <section className='h-[1000px] scroll-mt-10' id='technologies' ref={technologiesRef}>
        <Technologies />
      </section>
      <section className='h-[1000px] scroll-mt-10' id='about' ref={aboutRef}>
        <About />
      </section>
      <section className='h-[1000px] scroll-mt-10' id='contact' ref={contactRef}>
        <Contact />
      </section>
    </main> */}
    </>
  )
}

{/* <Image
  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
  src="/next.svg"
  alt="Next.js Logo"
  width={180}
  height={37}
  priority
/> */}