import '@/styles/globals.css'
import { GoMarkGithub } from 'react-icons/go'
import { BsLinkedin } from 'react-icons/bs'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <header className='flex items-center'>
        <h1>Richard<br />Ejdling</h1>
        <nav className='flex items-center'>
          <a href="https://github.com/chasacademy-richard-ejdling"><GoMarkGithub /></a>
          <a href=""><BsLinkedin /></a>
          <ul className='flex items-center'>
            <li>Home</li>
            <li>Projects</li>
            <li>Technologies</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      <Component {...pageProps} />
    </div>
  )
}
