import '@/styles/globals.css'
import { GoMarkGithub } from 'react-icons/go'
import { BsLinkedin } from 'react-icons/bs'
import { HiMenu } from 'react-icons/hi'
import { RxCross2 } from 'react-icons/rx'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const router = useRouter()

  function NavList({ isModal }) {
    let key = 0
    const navList = [
      {
        name: 'Home',
        path: '/'
      },
      {
        name: 'Projects',
        path: '/projects'
      },
      {
        name: 'Technologies',
        path: '/technologies'
      },
      {
        name: 'About',
        path: '/about'
      },
      {
        name: 'Contact',
        path: '/contact'
      }
    ]

    return (
      <ul className={isModal ? 'self-start' : 'hidden sm:flex items-center gap-2'}>
        {navList.map(item => {
          if (item.path === router.pathname) {
            return <li key={key++}><button onClick={isModal ? () => setIsMenuOpen(false) : () => {}} className='underline'>{item.name}</button></li>
          } else {
            return <li key={key++}><Link onClick={() => setIsMenuOpen(false)} href={item.path}>{item.name}</Link></li>
          }
        })}
      </ul>
    )
  }

  return (
    <div style={{ backgroundImage: 'url(' + 'https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg' + ')' }}>
      <header className='flex items-center sticky top-0 left-0 p-2 backdrop-blur-sm bg-sky-600/75 justify-between'>
        <h1>RE</h1>
        <nav className='flex items-center gap-4'>
          <div className='flex gap-2'>
            <a href="https://github.com/chasacademy-richard-ejdling" target='_blank'><GoMarkGithub /></a>
            <a href="" target='_blank'><BsLinkedin /></a>
          </div>
          <button className='sm:hidden' onClick={() => setIsMenuOpen(true)}><HiMenu /></button>
          {/* <ul className='hidden sm:flex items-center gap-2'>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/projects'>Projects</Link></li>
            <li><Link href='/technologies'>Technologies</Link></li>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
          </ul> */}
          <NavList isModal={false} />
        </nav>
      </header>

      {isMenuOpen && (
        <div id='close' className='flex justify-end backdrop-blur backdrop-brightness-[0.7] fixed top-0 right-0 h-full w-full' onClick={(e) => e.target.id === 'close' && setIsMenuOpen(false)}>
          <div className='flex flex-col w-40 h-fit sm:hidden z-10 bg-sky-600 m-2 p-2 rounded-lg'>
            <button className='self-end' onClick={() => setIsMenuOpen(false)}><RxCross2 /></button>
            {/* <ul className='self-start'>
              <li><Link href='/'>Home</Link></li>
              <li><Link href='/projects'>Projects</Link></li>
              <li><Link href='/technologies'>Technologies</Link></li>
              <li><Link href='/about'>About</Link></li>
              <li><Link href='/contact'>Contact</Link></li>
            </ul> */}
            <NavList isModal={true} />
          </div>
        </div>
      )}

      <Component {...pageProps} />
    </div>
  )
}
