import '@/styles/globals.css'
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from 'react-icons/bs'
import { HiMenu } from 'react-icons/hi'
import { RxCross2 } from 'react-icons/rx'
import { CgClose } from "react-icons/cg";
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Shiva from '../../public/Shiva_1x2.png'
import { Nunito, Ubuntu, Baloo_2, Signika, Chakra_Petch } from 'next/font/google'

import { FaRegFileCode } from "react-icons/fa6";
import { FaFileCode } from "react-icons/fa6";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa6";


import Projects from './Projects.js'
import Technologies from './Technologies.js'
import About from './About.js'
import Contact from './Contact.js'
import Home from '.'
import Section from '@/components/Section'
import debounce from '@/utils/debounce';
import throttle from '@/utils/throttle';

const signika = Signika({ subsets: ['latin'] })
const baloo_2 = Baloo_2({ subsets: ['latin'] })
const nunito = Nunito({ subsets: ['latin'] })
const ubuntu = Ubuntu({ weight: ['300', '400', '500', '700',], subsets: ['latin'], style: ["normal", "italic"], display: 'swap' })
const chakra_petch = Chakra_Petch({ weight: ['300', '400', '500', '600', '700',], subsets: ['latin'], style: ["normal", "italic"], display: 'swap' })

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

  function NavList({ isModal }) {
    const navList = [
      {
        name: 'Home',
        path: '#home',
        id: 1
      },
      {
        name: 'Projects',
        path: '#projects',
        id: 2
      },
      {
        name: 'Technologies',
        path: '#technologies',
        id: 3
      },
      {
        name: 'About',
        path: '#about',
        id: 4
      },
      {
        name: 'Contact',
        path: '#contact',
        id: 5
      }
    ]

    return (
      isModal ?
        <ul className={'w-full'}>
          {navList.map(item => <li className={`p-2 font-semibold ${currentSection === item.name && 'bg-sky-900 border-l-2 border-l-white '}`} key={item.id}><a href={item.path} className={`flex justify-center w-full font-semibold text-2xl ${currentSection === item.name ? 'text-white' : 'text-gray-200 hover:text-white'}`} onClick={() => setIsMenuOpen(false)}>{<span className={`${currentSection === item.name && 'mr-0.5'}`}>{item.name}</span>}</a></li>)}
        </ul>
        :
        <ul className={'hidden sm:flex h-full'}>
          {navList.map(item => <li className={`h-full flex items-center px-2 ${currentSection === item.name && 'bg-sky-900 border-b-2 border-b-white'}`} key={item.id}><a href={item.path} className={`font-semibold  ${currentSection === item.name ? 'text-white' : 'text-gray-200 hover:text-white'}`}>{item.name}</a></li>)}
        </ul>
    )
  }

  function handleScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition < projectsYPos.current) {
      setCurrentSection('Home')
    } else if (scrollPosition >= projectsYPos.current && scrollPosition < technologiesYPos.current) {
      setCurrentSection('Projects')
    } else if (scrollPosition >= technologiesYPos.current && scrollPosition < aboutYPos.current) {
      setCurrentSection('Technologies')
    } else if (scrollPosition >= aboutYPos.current && scrollPosition < contactYPos.current) {
      setCurrentSection('About')
    } else if (scrollPosition >= contactYPos.current) {
      setCurrentSection('Contact')
    }
  };

  function setSectionPos(isLargeScreen) {
    const addition = isLargeScreen ? 80 : 0
    projectsYPos.current = projectsRef.current.getBoundingClientRect().top + window.scrollY + addition
    technologiesYPos.current = technologiesRef.current.getBoundingClientRect().top + window.scrollY + addition
    aboutYPos.current = aboutRef.current.getBoundingClientRect().top + window.scrollY + addition
    contactYPos.current = contactRef.current.getBoundingClientRect().top + window.scrollY + addition
  }

  useEffect(() => {
    const isLargeScreen = window.matchMedia('(min-width: 640px)').matches
    setSectionPos(isLargeScreen)
  }, [projectsRef, technologiesRef, aboutRef, contactRef])

  const throttledHandleScroll = throttle(handleScroll, 200)

  useEffect(() => {
    throttledHandleScroll();
    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.matchMedia('(min-width: 640px)').matches

      if (isLargeScreen) {
        setIsMenuOpen(false)
      }

      setSectionPos(isLargeScreen)
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={`${chakra_petch.className} relative`}>
      <div className='fixed -z-10 h-screen w-screen' style={{ background: `url(/Shiva.jpg) center/cover repeat-x`, /* , backgroundImage: 'url("https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg")', */ }}></div>
      <header className='sticky top-0 left-0 z-50 bg-sky-600/75 backdrop-blur-lg sm:backdrop-blur-xl'>
        <nav className='relative box-content flex items-center h-14 sm:h-10 max-w-6xl mx-auto px-2 z-10 justify-between'> {/*  backdrop-blur-lg'sm:backdrop-blur-xl' */}
          <h1 className='text-2xl sm:text-base'>RE</h1>
          <div className='flex items-center gap-6 h-full'>
            <div className='flex gap-4'>
              <a href="https://github.com/richard-ejdling" target='_blank'><FaGithub className='text-gray-200 hover:text-white text-[28px] sm:text-xl' /></a>
              <a href="https://www.linkedin.com/in/richard-ejdling-4a0601273" target='_blank'><BsLinkedin className='text-gray-200 hover:text-white text-[28px] sm:text-xl' /></a>
            </div>
            <button className='sm:hidden' onClick={() => setIsMenuOpen(prev => !prev)}>{isMenuOpen ? <CgClose size={35} /> : <HiMenu size={35} />}</button>
            <NavList isModal={false} />
          </div>
        </nav>
        {isMenuOpen && (
          <div id='close' className='fixed top-0 left-0 h-screen w-full bg-black/25' onClick={(e) => e.target.id === 'close' && setIsMenuOpen(false)}>
            <div className='flex flex-col items-center w-full h-fit bg-sky-600 p-2 pt-16 rounded-b-lg shadow-2xl shadow-black'>
              {/* <button className='self-end' onClick={() => setIsMenuOpen(false)}>{<CgClose />}</button> */}
              <NavList isModal={true} />
            </div>
          </div>
        )}
      </header>
      <div className='h-full backdrop-blur-lg sm:backdrop-blur-xl'>
        <main className="box-content flex flex-col items-center min-h-screen max-w-6xl mx-auto px-10">
          <Section id='home' styles='pt-20 sm:pt-10 md:pt-40 scroll-mt-10'>
            <Home />
          </Section>
          <Section id='projects' styles='pt-20 sm:pt-40 sm:-scroll-mt-20' ref={projectsRef} title='Projects' icon={<FaFileCode />}>
            <Projects />
          </Section>
          <Section id='technologies' styles='pt-20 sm:pt-40 sm:-scroll-mt-20' ref={technologiesRef} title='Technologies' icon={<FaScrewdriverWrench />}>
            <Technologies />
          </Section>
          <Section id='about' styles='pt-20 sm:pt-40 sm:-scroll-mt-20' ref={aboutRef} title='About' icon={<FaUser />}>
            <About />
          </Section>
          <Section id='contact' styles='py-20 sm:pt-40 sm:-scroll-mt-20' ref={contactRef} title='Contact' icon={<FaPaperPlane />}>
            <Contact />
          </Section>
        </main>
        {/* <Component {...pageProps} /> */}
      </div>
      <footer>
        <div className='flex flex-col justify-center items-center h-[calc(100vh-40px)] text-6xl gap-6'>
          <p className='text-center'>Thank you for visiting!</p>
          <p className='text-center'>Have a nice day!</p>
        </div>
      </footer>
    </div>
  )
}