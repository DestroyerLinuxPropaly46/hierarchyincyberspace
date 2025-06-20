'use client'
import { useEffect, useRef } from 'react';

export default function about() {
    const sectionRef = useRef(null);
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
        const counters = sectionRef.current?.querySelectorAll('.counter');

        const animateCount = (el) => {
            const target = parseFloat(el.getAttribute('data-target'));
            const isPercent = el.classList.contains('percent');
            const duration = 2000;
            const startTime = performance.now();

            const step = (timestamp) => {
                const progress = Math.min((timestamp - startTime) / duration, 1);
                const value = isPercent
                    ? (progress * target).toFixed(2)
                    : Math.floor(progress * target);

                el.textContent = progress === 1
                    ? (isPercent ? target + '%' : target)
                    : (isPercent ? value + '%' : value);

                if (progress < 1) requestAnimationFrame(step);
            };

            requestAnimationFrame(step);
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    counters?.forEach(counter => animateCount(counter));
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
    }, []);

    return (
        <div id="about" className="about" ref={sectionRef}>
            <div id="stats" className="about-top">
                <h2 className='fkz4'>From Achievements</h2>
                <div className="status-container fkz4">
                    <div className="status-preview">
                        <div className="item">
                            <h1 className="counter" data-target="150">0</h1>
                            <h3>Member</h3>
                        </div>

                        <div className="item">
                            <h1 className="counter" data-target="8">0</h1>
                            <h3>Level</h3>
                        </div>

                        <div className="item">
                            <h1 className="counter percent" data-target="95.3">0%</h1>
                            <h3>Top Weekly</h3>
                        </div>                        

                        <div className="item">
                            <h1 className="counter" data-target="115">0</h1>
                            <h3>Top Clan</h3>
                        </div>

                        <div className="item">
                            <h1 className="counter percent" data-target="98.8">0%</h1>
                            <h3>Top Season</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-content">
                <div className="about-image">
                    <img src="/hic.png" alt="About Image" className="fkz4 md:w-[780px] md:h-auto object-contain" />
                </div>

                <div className="about-text">
                    <div className='ahay fkz4'>
                        <h1 className="about-title">About Us</h1>
                    </div>
                    <p className="about-description fkz4">Welcome to Hierarchy in Cyberspace, a modern warship clan that values high morals and the tenacity of corporals towards each other. Our community is built on respect, teamwork, and a shared passion for naval warfare.</p>
                    <p className="about-description fkz4">Join us to experience thrilling battles, strategic gameplay, and a supportive environment where every member is valued. Together, we strive for excellence and camaraderie in the world of online gaming.</p>
                </div>
            </div>

            <div className='about-more'>
                <div className="about-more-content fkz4">
                    <h2 className='fkz4'>Our Goal!</h2>
                    <div className='item fkz4'>
                        <p>Our goal is to foster a strong, respectful community of dedicated players who strive for excellence in naval warfare. We aim to build lasting friendships, develop strategic skills, and create an environment where every member feels valued and empowered to contribute to our collective success.</p>
                    </div>
                </div>

                <div className="about-more-content fkz4">
                    <h2 className='fkz4'>Why Clans Were Created?</h2>
                    <div className='item fkz4'>
                        <p>Clans were created to bring together like-minded players who share a passion for teamwork, strategy, and camaraderie. They provide a structured environment where members can support each other, compete together, and grow both individually and as a team in the challenging world of online gaming.</p>
                    </div>
                </div>
            </div> 
        </div>
    );
}