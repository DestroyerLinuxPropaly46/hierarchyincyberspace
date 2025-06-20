'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
    const fullText = 'The Best Clan Modern Warship';
    const [typedText, setTypedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        const revealOnScroll = () => {
        const elements = document.querySelectorAll('.fkz4');
        elements.forEach((ahaha) => {
            const top = ahaha.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (top < windowHeight - 50) {
                ahaha.classList.add('show');
            } else {
                ahaha.classList.remove('show');
            }
        });
        };

        window.addEventListener('scroll', revealOnScroll);
        window.addEventListener('load', revealOnScroll); 
        revealOnScroll();
        return () => window.removeEventListener('scroll', revealOnScroll);
    }, []);

    useEffect(() => {
        let typingTimeout: NodeJS.Timeout;
        if (!isDeleting && index < fullText.length) {
            typingTimeout = setTimeout(() => {
                setTypedText(fullText.substring(0, index + 1));
                setIndex(index + 1);
            }, 100);
        } else if (!isDeleting && index === fullText.length) {
            typingTimeout = setTimeout(() => {
                setIsDeleting(true);
            }, 3000);
        } else if (isDeleting && index > 0) {
            typingTimeout = setTimeout(() => {
                setTypedText(fullText.substring(0, index - 1));
                setIndex(index - 1);
            }, 50);
        } else if (isDeleting && index === 0) {
            setIsDeleting(false);
        }
        return () => clearTimeout(typingTimeout);
    }, [index, isDeleting]);
    useEffect(() => {
        const cursorBlink = setInterval(() => {
            setCursorVisible(prev => !prev);
        }, 500);
        return () => clearInterval(cursorBlink);
    }, []);
    return (
        <div id="home" className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h2 id="typing" className='fkz4'>
                        {typedText}
                        <span style={{ visibility: cursorVisible ? 'visible' : 'hidden', color: 'gold' }}> |</span>
                    </h2>
                    <h1 className="hero-title fkz4">Welcome to <span className="text-gradient">Hierarchy in Cyberspace</span></h1>
                    <p className="hero-description fkz4">Hello Captain!, Join our Modern Warship Clan!, Clan upholds high morals and the tenacity of corporals towards each other!.</p>
                    <div className='fkz4'><Link href={"#about"} className="hero-button">Learn More</Link></div>
                </div>
                <div className="hero-image fkz4">
                    <img src="/PYRAMID2.png" alt="Hero Image" className="md:w-auto md:h-[380px]" />
                </div>
            </div>
        </div>
    );
}