'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"
import {
  faEnvelope,
  faMessage
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import Link from 'next/link';

export default function contact() {
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
        <div id="contact" className="contact">
            <div className="contact-container">
                <h1 className="fkz4">Need <span className="text-gradient">Questions?</span></h1>
                <p className="fkz4">Please contact us using email, or contact us via Discord</p>
                <span className="icon2 fkz4"><FontAwesomeIcon icon={faMessage}></FontAwesomeIcon></span>
                <div className="content">
                    <p className="fkz4">Discord: @ex_v.2</p>
                    <div className="break">
                        <Link href={'https://discord.gg/N4Xr6Dpx'} target="_blank" className="fkz4">
                            <button className="discord-button"><FontAwesomeIcon icon={faDiscord} className="icon"></FontAwesomeIcon>Discord Server</button>
                        </Link>
                        <Link href={'mailto:leviathan404teamcyber@gmail.com'} target="_blank" className="fkz4">
                            <button className="mail-button"><FontAwesomeIcon icon={faEnvelope} className="icon"></FontAwesomeIcon>Email</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}