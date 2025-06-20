'use client'
import Alert from '@/app/components/alerts'; 
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function navbar() {    
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const toggleAlert = () => {
        setIsOpen(!isOpen)
        setShowAlert(true)

        setTimeout(() => {
            setShowAlert(false)
        }, 5000);
    }

    const toggleNavbar = () => setIsOpen(!isOpen)
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <header className={`${!scrolled ? 'bg-transparent' : 'bg-black'}`}>
            <Link href="/">
                <div className='header-title'>
                    <img src="/hic.png" alt="Logo" className="h-[60px] w-[auto] md:w-[auto] md:h-[67px] md:pl-[20px]" />
                    <h1>HIERARCHY IN CYBERSPACE</h1>
                </div> 
            </Link>

            <button className="toggle-kontol visible md:hidden" onClick={toggleNavbar}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>            
            <div className='navbar1 hidden'>
                <ul>
                    <li>
                        <Link href="#home" className='nav-link'>Home</Link>
                    </li>
                    <li>
                        <Link href="#about" className='nav-link'>About</Link>
                    </li>
                    <li>
                        <Link href="#ourteam" className='nav-link'>Team</Link>
                    </li>
                    <li>
                        <Link href="#community" className='nav-link'>Community</Link>
                    </li>
                    <li>
                        <Link href="#contact" className='nav-link'>Contact</Link>
                    </li>
                    <li>
                        <Link href="#blog" className='nav-link'>Blog</Link>
                    </li>
                    <li>
                        <Link href="#" className='nav-link2' onClick={toggleAlert}>Login</Link>
                    </li>

                </ul>
            </div>
            
            <div className={`navbar md:hidden transition-all duration-300 ease-in-out ${isOpen ?  'translate-x-0' : '-translate-x-full w-0'}`}>
                <div className='header-mobile md:hidden'>
                    <Link href="/">
                        <div className='h-d'>
                            <div className='header-img'>
                                <img src="/hic.png" alt="Logo" className="h-[60px] w-[auto]" />
                            </div>
                            <h1>HIERARCHY IN CYBERSPACE</h1>
                        </div>
                    </Link>
                </div>

                <ul>
                    <li className='nav-mobile'>
                        <Link href="#home" className='nav-link' onClick={() => setIsOpen(false)}>Home</Link>
                    </li>
                    <li className='nav-mobile'>
                        <Link href="#about" className='nav-link' onClick={() => setIsOpen(false)}>About</Link>
                    </li>
                    <li className='nav-mobile'>
                        <Link href="#ourteam" className='nav-link' onClick={() => setIsOpen(false)}>Team</Link>
                    </li>                    
                    <li className='nav-mobile'>
                        <Link href="/community" className='nav-link' onClick={() => setIsOpen(false)}>Community</Link>
                    </li>
                    <li className='nav-mobile'>
                        <Link href="/contact" className='nav-link' onClick={() => setIsOpen(false)}>Contact</Link>
                    </li>
                    <li className='nav-mobile'>
                        <Link href="/blog" className='nav-link' onClick={() => setIsOpen(false)}>Blog</Link>
                    </li>
                    <li className='nav-mobile2'>
                        <Link href="#" className='nav-link2' onClick={() => setIsOpen(false)}>Login</Link>
                    </li>
                </ul>
            </div>

            {showAlert && <Alert />}
        </header>
    );
}
