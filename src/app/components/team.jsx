'use client'

import Link from 'next/link';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function page() {
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
        <div id="ourteam" className="team">
            <div className='gradient-left'></div>
            <div className="content">
                <h1 className='fkz4'>Our Team</h1>
                <div className="container-team">
                    <div className="card fkz4">
                        <div className="banner-container">
                            <img src="/leviathan404teamcyber.png" alt="noxleviathan404" />
                        </div>
                        <div className="profiles">
                            <img src="/fkz.png" alt="fkzsecxploit" />
                        </div>
                        <div className="text">
                            <div className="tx">
                                <h2>46fkzsec</h2>

                                <span className="medal programmer">Programmer</span>
                                <div className="sosmed">
                                    <Link href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faInstagram} />
                                    </Link>
                                    <Link href="https://github.com/fkzsecxploit-id" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faGithub} />
                                    </Link>
                                    <Link href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faFacebook} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card fkz4">
                        <div className="banner-container">
                            <img src="https://i.pinimg.com/736x/b3/13/46/b3134662c33ff643f7f94029050a9d8e.jpg" alt="noxleviathan404" />
                        </div>
                        <div className="profiles">
                            <img src="/galaxy.png" alt="fkzsecxploit" />
                        </div>
                        <div className="text">
                            <div className="tx">
                                <h2>Galaxy Monarch</h2>

                                <span className="medal sergeant">Sergeant</span>
                                <div className="sosmed">
                                    <Link href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faInstagram} />
                                    </Link>
                                    <Link href="https://github.com/fkzsecxploit-id" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faGithub} />
                                    </Link>
                                    <Link href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faFacebook} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card fkz4">
                        <div className="banner-container">
                            <img src="https://i.pinimg.com/736x/ae/66/c8/ae66c8ffdaffd248eb85018bd53266e3.jpg" alt="noxleviathan404" />
                        </div>
                        <div className="profiles">
                            <img src="/hierarchy.png" alt="hierarchy" />
                        </div>
                        <div className="text">
                            <div className="tx">
                                <h2>ᵖʸʳᵃᵐⁱᵈ︱ʜ ɪ ᴇ ʀ ᴧ ʀ ᴄ ʜ ʏ</h2>

                                <span className="medal leader">Leader</span>
                                <div className="sosmed">
                                    <Link href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faInstagram} />
                                    </Link>
                                    <Link href="https://github.com/fkzsecxploit-id" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faGithub} />
                                    </Link>
                                    <Link href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faFacebook} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card fkz4">
                        <div className="banner-container">
                            <img src="https://i.pinimg.com/originals/d9/b4/05/d9b405e940e6d5b2b885b323259eba97.gif" alt="noxleviathan404" />
                        </div>
                        <div className="profiles">
                            <img src="/jolly.avif" alt="fkzsecxploit" />
                        </div>
                        <div className="text">
                            <div className="tx">
                                <h2>ᵖʸʳᵃᵐⁱᵈ︱𝓣𝓲𝓰𝓻𝓮𝓪𝓵</h2>

                                <span className="medal wakil">Representative</span>
                                <div className="sosmed">
                                    <Link href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faInstagram} />
                                    </Link>
                                    <Link href="https://github.com/fkzsecxploit-id" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faGithub} />
                                    </Link>
                                    <Link href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faFacebook} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card fkz4">
                        <div className="banner-container">
                            <img src="https://i.pinimg.com/originals/a7/68/bf/a768bf37d5cfbad168ab8fb4a5042e95.gif" alt="noxleviathan404" />
                        </div>
                        <div className="profiles">
                            <img src="/adel.jpg" alt="fkzsecxploit" />
                        </div>
                        <div className="text">
                            <div className="tx">
                                <h2>༒༻☬ད [•ᴍᴡ•] ᴡɪꜱ'ᴀᴅᴇʟ ཌ☬༺༒</h2>

                                <span className="medal sergeant">Sergeant</span>
                                <div className="sosmed">
                                    <Link href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faInstagram} />
                                    </Link>
                                    <Link href="https://github.com/fkzsecxploit-id" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faGithub} />
                                    </Link>
                                    <Link href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faFacebook} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card fkz4">
                        <div className="banner-container">
                            <img src="https://i.pinimg.com/originals/46/35/3a/46353a804a6fb57273068583dfbe8eaa.gif" alt="noxleviathan404" />
                        </div>
                        <div className="profiles">
                            <img src="/nortunejpg.jpg" alt="fkzsecxploit" />
                        </div>
                        <div className="text">
                            <div className="tx">
                                <h2>ᵖʸʳᵃᵐⁱᵈ︱ПӨᄃƬЦЯПΣ_א</h2>

                                <span className="medal sergeant">Sergeant</span>
                                <div className="sosmed">
                                    <Link href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faInstagram} />
                                    </Link>
                                    <Link href="https://github.com/fkzsecxploit-id" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faGithub} />
                                    </Link>
                                    <Link href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faFacebook} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card fkz4">
                        <div className="banner-container">
                            <img src="https://i.pinimg.com/originals/64/03/c9/6403c98894c630d84160832cd2187a52.gif" alt="noxleviathan404" />
                        </div>
                        <div className="profiles">
                            <img src="/jolly.avif" alt="fkzsecxploit" />
                        </div>
                        <div className="text">
                            <div className="tx">
                                <h2>Indonesian Navy</h2>

                                <span className="medal sergeant">Sergeant</span>
                                <div className="sosmed">
                                    <Link href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faInstagram} />
                                    </Link>
                                    <Link href="https://github.com/fkzsecxploit-id" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faGithub} />
                                    </Link>
                                    <Link href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faFacebook} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card fkz4">
                        <div className="banner-container">
                            <img src="https://i.pinimg.com/originals/7e/bf/3c/7ebf3c9bbd582dcab0d58e2e259b2246.gif" alt="noxleviathan404" />
                        </div>
                        <div className="profiles">
                            <img src="/jolly.avif" alt="fkzsecxploit" />
                        </div>
                        <div className="text">
                            <div className="tx">
                                <h2>Darkpsyco</h2>

                                <span className="medal sergeant">Sergeant</span>
                                <div className="sosmed">
                                    <Link href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faInstagram} />
                                    </Link>
                                    <Link href="https://github.com/fkzsecxploit-id" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faGithub} />
                                    </Link>
                                    <Link href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className='icon' icon={faFacebook} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='gradient-right'></div>
        </div>
    )
}