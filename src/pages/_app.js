import '@/styles/globals.css'
import { GoMarkGithub } from 'react-icons/go'
import { BsLinkedin } from 'react-icons/bs'
import { HiMenu } from 'react-icons/hi'
import { RxCross2 } from 'react-icons/rx'
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

  const projectsXPos = useRef(0)
  const technologiesXPos = useRef(0)
  const aboutXPos = useRef(0)
  const contactXPos = useRef(0)

  useEffect(() => {
    projectsXPos.current = projectsRef.current.offsetTop - 40
    technologiesXPos.current = technologiesRef.current.offsetTop - 40
    aboutXPos.current = aboutRef.current.offsetTop - 40
    contactXPos.current = contactRef.current.offsetTop - 40

    console.log(projectsXPos.current)
    console.log(technologiesXPos.current)
    console.log(aboutXPos.current)
    console.log(contactXPos.current)
  }, [projectsRef, technologiesRef, aboutRef, contactRef])

  const homeNav = useRef(null)
  const projectsNav = useRef(null)
  const technologiesNav = useRef(null)
  const aboutNav = useRef(null)
  const contactNav = useRef(null)

  function handleScroll() { // Debounce for better performance 
    const scrollPosition = window.scrollY;
    console.log(scrollPosition);

    if (scrollPosition < projectsXPos.current) {
      setCurrentSection('Home')
      console.log('home')
    } else if (scrollPosition >= projectsXPos.current && scrollPosition < technologiesXPos.current) {
      setCurrentSection('Projects')
      console.log('project')
    } else if (scrollPosition >= technologiesXPos.current && scrollPosition < aboutXPos.current) {
      setCurrentSection('Technologies')
      console.log('technologies')
    } else if (scrollPosition >= aboutXPos.current && scrollPosition < contactXPos.current) {
      setCurrentSection('About')
      console.log('about')
    } else if (scrollPosition >= contactXPos.current) {
      setCurrentSection('Contact')
      console.log('contact')
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
      <ul className={isModal ? 'self-start' : 'hidden sm:flex items-center gap-2'}>
        {navList.map(item => <li className={currentSection === item.name ? 'underline' : ''} key={item.id}><a href={item.path} ref={item.ref} onClick={isModal ? () => setIsMenuOpen(false) : () => { }}>{item.name}</a></li>)}
      </ul>
    )
  }

  return (
    <div className='relative'>
      <div className='absolute -z-50 h-full w-full blur-md sm:blur-lg md:blur-xl lg:blur-[30px] min-[1440px]:blur-2xl min-[2560px]:blur-3xl' style={{ background: `url(/Shiva_1x2.png) repeat-y top/100%` /* , backgroundImage: 'url("https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg")', */ }}></div>
      <div className='h-full'>
        <header className='flex items-center z-50 sticky top-0 left-0 p-2 bg-sky-600/75 justify-between'> {/* 'backdrop-blur-sm' */}
          <h1>RE</h1>
          <nav className='flex items-center gap-4'>
            <div className='flex gap-2'>
              <a href="https://github.com/richard-ejdling" target='_blank'><GoMarkGithub /></a>
              <a href="https://www.linkedin.com/in/richard-ejdling-4a0601273" target='_blank'><BsLinkedin /></a>
            </div>
            <button className='sm:hidden' onClick={() => setIsMenuOpen(true)}><HiMenu /></button>
            <NavList isModal={false} />
            {isMenuOpen && (
              <div id='close' className='flex justify-end backdrop-blur backdrop-brightness-[0.8] fixed top-0 right-0 z-10 h-screen w-screen' onClick={(e) => e.target.id === 'close' && setIsMenuOpen(false)}>
                <div className='flex flex-col w-40 h-fit bg-sky-600 m-2 p-2 rounded-lg'>
                  <button className='self-end' onClick={() => setIsMenuOpen(false)}><RxCross2 /></button>
                  <NavList isModal={true} />
                </div>
              </div>
            )}
          </nav>
        </header>

        <main className="flex min-h-screen flex-col items-center justify-between">
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


// Att göra: Göra om projektet till t3? (kanske inte då just denna sida inte riktigt behöver det?)
// ändra blurren manuellt på bg istället för css blur. (då kan man även fixa lite stiliserad blur?!!, samt behöver inte ändra brur-grad för olika skärmstorlekar!!)
// GitHub API? för projects, finns det?
// gå igenom varje section och designa mer detaljerat (kolla på exempelportfolierna), SEN koda.