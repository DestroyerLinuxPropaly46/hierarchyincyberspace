'use client'
import { useEffect } from "react"

export default function blog() {
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
    return (
        <div id="blog" className="blog fkz4">
            <div className="blog-container">
                <h1 className="fkz4">Recent Blog, <span className="text-gradient">All Blogs</span></h1>
                <div className="content">
                    <p className="fkz4">No Result... but this under development.</p>
                </div>
            </div>
        </div>
    )
}