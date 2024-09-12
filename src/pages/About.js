import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from 'react-icons/bs'
import { isMobileDevice } from "@/utils/isMobile";
import { useEffect, useState } from "react";

export default function About() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(isMobileDevice());
    }, []);
    return (
        <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatem quam tempora rem vitae qui quidem debitis magni, voluptas expedita non eum sint corrupti sapiente a. Cumque commodi repellendus aliquam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatem quam tempora rem vitae qui quidem debitis magni, voluptas expedita non eum sint corrupti sapiente a. Cumque commodi repellendus aliquam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatem quam tempora rem vitae qui quidem debitis magni, voluptas expedita non eum sint corrupti sapiente a. Cumque commodi repellendus aliquam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatem quam tempora rem vitae qui quidem debitis magni, voluptas expedita non eum sint corrupti sapiente a. Cumque commodi repellendus aliquam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatem quam tempora rem vitae qui quidem debitis magni, voluptas expedita non eum sint corrupti sapiente a. Cumque commodi repellendus aliquam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatem quam tempora rem vitae qui quidem debitis magni, voluptas expedita non eum sint corrupti sapiente a. Cumque commodi repellendus aliquam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatem quam tempora rem vitae qui quidem debitis magni, voluptas expedita non eum sint corrupti sapiente a. Cumque commodi repellendus aliquam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatem quam tempora rem vitae qui quidem debitis magni, voluptas expedita non eum sint corrupti sapiente a. Cumque commodi repellendus aliquam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatem quam tempora rem vitae qui quidem debitis magni, voluptas expedita non eum sint corrupti sapiente a. Cumque commodi repellendus aliquam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatem quam tempora rem vitae qui quidem debitis magni, voluptas expedita non eum sint corrupti sapiente a. Cumque commodi repellendus aliquam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatem quam tempora rem vitae qui quidem debitis magni, voluptas expedita non eum sint corrupti sapiente a. Cumque commodi repellendus aliquam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatem quam tempora rem vitae qui quidem debitis magni, voluptas expedita non eum sint corrupti sapiente a. Cumque commodi repellendus aliquam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatem quam tempora rem vitae qui quidem debitis magni, voluptas expedita non eum sint corrupti sapiente a. Cumque commodi repellendus aliquam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatem quam tempora rem vitae qui quidem debitis magni, voluptas expedita non eum sint corrupti sapiente a. Cumque commodi repellendus aliquam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatem quam tempora rem vitae qui quidem debitis magni, voluptas expedita non eum sint corrupti sapiente a. Cumque commodi repellendus aliquam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatem quam tempora rem vitae qui quidem debitis magni, voluptas expedita non eum sint corrupti sapiente a. Cumque commodi repellendus aliquam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatem quam tempora rem vitae qui quidem debitis magni, voluptas expedita non eum sint corrupti sapiente a. Cumque commodi repellendus aliquam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatem quam tempora rem vitae qui quidem debitis magni, voluptas expedita non eum sint corrupti sapiente a. Cumque commodi repellendus aliquam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatem quam tempora rem vitae qui quidem debitis magni, voluptas expedita non eum sint corrupti sapiente a. Cumque commodi repellendus aliquam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatem quam tempora rem vitae qui quidem debitis magni, voluptas expedita non eum sint corrupti sapiente a. Cumque commodi repellendus aliquam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatem quam tempora rem vitae qui quidem debitis magni, voluptas expedita non eum sint corrupti sapiente a. Cumque commodi repellendus aliquam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatem quam tempora rem vitae qui quidem debitis magni, voluptas expedita non eum sint corrupti sapiente a. Cumque commodi repellendus aliquam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatem quam tempora rem vitae qui quidem debitis magni, voluptas expedita non eum sint corrupti sapiente a. Cumque commodi repellendus aliquam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatem quam tempora rem vitae qui quidem debitis magni, voluptas expedita non eum sint corrupti sapiente a. Cumque commodi repellendus aliquam.
            <p>Info about me.........</p>
            <div className='flex flex-col md:flex-row justify-center items-center gap-6 mt-8'>
                <div className='flex justify-center gap-4'>
                    <a href="https://github.com/richard-ejdling" target='_blank'><FaGithub size={40} className='rounded-full hover:shadow-hover ease-in-out duration-100' /></a>
                    <a href="https://www.linkedin.com/in/richard-ejdling-4a0601273" target='_blank'><BsLinkedin size={40} className='rounded-sm hover:shadow-hover ease-in-out duration-100' /></a>
                </div>
                <div className='flex items-center gap-2 text-2xlsm:text-lg'>
                    <p>CV:</p>
                    <a href="/CV/CV English.pdf" download className='font-medium tracking-wide border-2 border-white hover:border-transparent active:border-transparent hover:bg-sky-600 ease-in-out duration-100 active:bg-sky-700 px-3 py-1 sm:py-0.5 rounded-full'/* 'underline underline-offset-2' */>Download</a>
                    {!isMobile && <a href="/CV/CV English.pdf" target='_blank' className='font-medium tracking-wide border-2 border-white hover:border-transparent active:border-transparent hover:bg-sky-600 ease-in-out duration-100 active:bg-sky-700 px-3 py-1 sm:py-0.5 rounded-full'/* 'underline underline-offset-2' */>View</a>}
                </div>
            </div>
        </div>
    )
}