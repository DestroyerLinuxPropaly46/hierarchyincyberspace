'use client'

import Link from 'next/link';
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faDiscord } from '@fortawesome/free-brands-svg-icons';


export default function page() {
    useEffect(() => {
        var jawa = () => {
            var elemnts = document.querySelectorAll('fkz4');
            elemnts.forEach((titleLegendNgeriYah) => {
                var top = titleLegendNgeriYah.getBoundingClientRect().top;
                var windowHeight = window.innerHeight;
                if (top < windowHeight - 50) {
                    titleLegendNgeriYah.classList.add('show');
                } else {
                    titleLegendNgeriYah.classList.remove('show');
                }
            })
        }

        window.addEventListener('scroll', jawa);
        window.addEventListener('load', jawa);
        jawa();
        return () => window.removeEventListener('scroll', jawa);
    })

    return (
        <div id='community' className="community">
            <div className="container">
                <h1 className='fkz4'>Our <span className="text-gradient">Community</span></h1>
                <p className="description fkz4">Join to join the Clan!, gain connections and experience to become a sea captain!</p>
                <div className="card-container">
                    <div className="card fkz4">
                        <span className='icon'><FontAwesomeIcon icon={faWhatsapp} /></span>
                        <h3>Whatsapp</h3>
                        <p>join our whatsapp group, to see more information, to be able to join the clan.</p>
                        <div className='arrow-area'>
                            <Link href={'https://chat.whatsapp.com/J9StEkkoJGpJOFsaugjuX9'} target='_blank'>
                                <span className='arrow'>JOIN CLAN</span>
                            </Link>
                        </div>
                    </div>

                    <div className="card fkz4">
                        <span className='icon'><FontAwesomeIcon icon={faDiscord} /></span>
                        <h3>Discord</h3>
                        <p>join our Discord Server, to see more information, to be able to join the clan.</p>
                        <div className='arrow-area'>
                            <Link href={'https://discord.gg/N4Xr6Dpx'} target='_blank'>
                                <span className='arrow'>JOIN CLAN</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='rules-container fkz4'>
                    <div className='rules'>
                        <h2 className='fkz4'>Rules!</h2>
                        <ul>
                            <li className='fkz4'>There is no limit to the number of points per season.</li>
                            <li className='fkz4'>There is no compulsion to pursue this point target, that (Just Play For fun).</li>
                            <li className='fkz4'>If you are caught using excessive tokic, you will be given 1 warning and will be kicked from our clan membership.</li>
                            <li className='fkz4'>If you are not online for 20 days, we will not hesitate to remove you (except for those who have permission/are prevented from coming).</li>
                        </ul>
                    </div>
                </div>

                <div className='rules-container warning fkz4'>
                    <div className='rules warning'>
                        <h2 className='fkz4'>Additional Rules!</h2>
                        <ul>
                            <li className='fkz4'>It is important to maintain good manners, and to behave in a manner that does nsot disturb other people's feelings..</li>
                            <li className='fkz4'>You have to know the limit when to joke, sometimes it's serious to discuss something.</li>
                            <li className='fkz4'>You are free to join in with members in our clan, our Admin and Members are fun!.</li>
                            <li className='fkz4'>If you meet fellow HIC clan members in online matches, if possible, please like each other... hehe :D</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}