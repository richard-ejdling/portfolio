import '@/styles/globals.css'
import { GoMarkGithub } from 'react-icons/go'
import { BsLinkedin } from 'react-icons/bs'
import { HiMenu } from 'react-icons/hi'
import { RxCross2 } from 'react-icons/rx'
import { CgClose } from "react-icons/cg";
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Shiva from '../../public/Shiva_1x2.png'

import Projects from './Projects.js'
import Technologies from './Technologies.js'
import About from './About.js'
import Contact from './Contact.js'
import Home from '.'

export default function App({ Component, pageProps }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState('')

  /* const router = useRouter() */

  const projectsRef = useRef(null)
  const technologiesRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  const projectsYPos = useRef(0)
  const technologiesYPos = useRef(0)
  const aboutYPos = useRef(0)
  const contactYPos = useRef(0)

  useEffect(() => {
    projectsYPos.current = projectsRef.current.offsetTop - 40
    technologiesYPos.current = technologiesRef.current.offsetTop - 40
    aboutYPos.current = aboutRef.current.offsetTop - 40
    contactYPos.current = contactRef.current.offsetTop - 40

    /* console.log(projectsYPos.current)
    console.log(technologiesYPos.current)
    console.log(aboutYPos.current)
    console.log(contactYPos.current) */
  }, [projectsRef, technologiesRef, aboutRef, contactRef])

  const homeNav = useRef(null)
  const projectsNav = useRef(null)
  const technologiesNav = useRef(null)
  const aboutNav = useRef(null)
  const contactNav = useRef(null)

  function handleScroll() { // Debounce for better performance 
    const scrollPosition = window.scrollY;
    /* console.log(scrollPosition); */

    if (scrollPosition < projectsYPos.current) {
      setCurrentSection('Home')
      /* console.log('home') */
    } else if (scrollPosition >= projectsYPos.current && scrollPosition < technologiesYPos.current) {
      setCurrentSection('Projects')
      /* console.log('project') */
    } else if (scrollPosition >= technologiesYPos.current && scrollPosition < aboutYPos.current) {
      setCurrentSection('Technologies')
      /* console.log('technologies') */
    } else if (scrollPosition >= aboutYPos.current && scrollPosition < contactYPos.current) {
      setCurrentSection('About')
      /* console.log('about') */
    } else if (scrollPosition >= contactYPos.current) {
      setCurrentSection('Contact')
      /* console.log('contact') */
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  function NavList({ isModal }) {
    const navList = [
      {
        name: 'Home',
        path: '#home',
        ref: homeNav,
        id: 1
      },
      {
        name: 'Projects',
        path: '#projects',
        ref: projectsNav,
        id: 2
      },
      {
        name: 'Technologies',
        path: '#technologies',
        ref: technologiesNav,
        id: 3
      },
      {
        name: 'About',
        path: '#about',
        ref: aboutNav,
        id: 4
      },
      {
        name: 'Contact',
        path: '#contact',
        ref: contactNav,
        id: 5
      }
    ]

    return (
      isModal ? <ul className={'w-full'}>
        {navList.map(item => <li className={`px-2 font-semibold text-lg py-2 ${currentSection === item.name ? 'text-white bg-sky-900 border-l-2 border-l-white' : 'text-gray-200 hover:text-white'}`} key={item.id}><a href={item.path} ref={item.ref} className='flex justify-center w-full' onClick={() => setIsMenuOpen(false)}>{<span>{item.name}</span>}</a></li>)}
      </ul>
        :
        <ul className={'hidden sm:flex h-full'}>
          {navList.map(item => <li className={`h-full flex items-center px-2 font-semibold ${currentSection === item.name ? 'text-white bg-sky-900 border-b-2 border-b-white' : 'text-gray-200 hover:text-white'}`} key={item.id}><a href={item.path} ref={item.ref} >{item.name}</a></li>)}
        </ul>
    )
  }

  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.matchMedia('(min-width: 640px)').matches

      if (isLargeScreen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className='relative'>
      <div className='absolute -z-50 h-full w-full blur-md sm:blur-lg md:blur-xl lg:blur-[30px] min-[1440px]:blur-2xl min-[2560px]:blur-3xl' style={{ background: `url(/Shiva_1x2.png) repeat-y top/100%` /* , backgroundImage: 'url("https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg")', */ }}></div>
      <div className='h-full'>
        <header className='sticky top-0 left-0 z-50 bg-sky-600/75 backdrop-blur-lg'>
          <nav className='relative box-content flex items-center h-10 max-w-6xl mx-auto px-2 z-10 justify-between'> {/* 'backdrop-blur-sm' */}
            <h1>RE</h1>
            <div className='flex items-center gap-6 h-full'>
              <div className='flex gap-3'>
                <a href="https://github.com/richard-ejdling" target='_blank'><GoMarkGithub size={20} className='text-gray-200 hover:text-white' /></a>
                <a href="https://www.linkedin.com/in/richard-ejdling-4a0601273" target='_blank'><BsLinkedin size={20} className='text-gray-200 hover:text-white' /></a>
              </div>
              <button className='sm:hidden' onClick={() => setIsMenuOpen(prev => !prev)}>{isMenuOpen ? <CgClose size={25} /> : <HiMenu size={25} />}</button>
              <NavList isModal={false} />
            </div>
          </nav>
          {isMenuOpen && (
            <div id='close' className='fixed top-0 left-0 h-screen w-full bg-black/25' onClick={(e) => e.target.id === 'close' && setIsMenuOpen(false)}>
              <div className='flex flex-col items-center w-full h-fit bg-sky-600 p-2 pt-11 rounded-b-lg shadow-2xl shadow-black'>
                {/* <button className='self-end' onClick={() => setIsMenuOpen(false)}>{<CgClose />}</button> */}
                <NavList isModal={true} />
              </div>
            </div>
          )}
        </header>

        <main className="box-content flex flex-col items-center min-h-screen max-w-6xl mx-auto px-4">
          <section id='home' className='pt-10 scroll-mt-10'>
            <Home />
          </section>
          <section className='pt-10 scroll-mt-10' id='projects' ref={projectsRef}>
            <Projects />
          </section>
          <section className='pt-10 scroll-mt-10' id='technologies' ref={technologiesRef}>
            <Technologies />
          </section>
          <section className='pt-10 scroll-mt-10' id='about' ref={aboutRef}>
            <About />
          </section>
          <section className='pt-10 scroll-mt-10' id='contact' ref={contactRef}>
            <Contact />
          </section>
        </main>
        {/* <Component {...pageProps} /> */}
      </div>
    </div>
  )
}