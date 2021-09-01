import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from "react";
import { gsap } from 'gsap';
import css from '../styles/nav.module.scss'

export default function Navbar() {
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
    };
    const [tl] = useState(gsap.timeline({ paused: true }));

    useEffect(() => {
        tl.to('.menu', {
            xPercent: -100,
            duration: .6,
            ease: 'Power3.easeInOut'
        })
        tl.reverse();
    }, []);

    const toggleMenu = () => {
        tl.reversed(!tl.reversed());
    }

    const click = () => {
        handleToggle();
        toggleMenu();
    }

  return (
    <nav className={css.mainNav}>
        <div className={css.socialLinks}>
            <ul>
                <li><Link href="https://instagram.com/halloj_stoj"><a className={css.logo} target='_blank'>Instagram</a></Link></li>
                <li>|</li>
                <li><Link href="mailto:halloj@hallojstoj.dk"><a className={css.logo} target='_blank'>Kontakt os</a></Link></li>
            </ul>
        </div>

        <div className={css.menuBtn}>
            <button className={`${css.menuIcon} ${isActive ? css.menuIconClosed : css.menuIconOpened}`} id="menuIcon" onClick={click}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>

        <div className={`${css.menuContent} ${isActive ? css.menuClosed : css.menuOpened} menu`}>
            <ul className={css.menuList} onClick={click}>
                <li>
                    <Link href="/">
                        <a>Portefølje</a>
                    </Link>
                </li>
                <li>
                    <Link href="/gallery">
                        <a>Galleri</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Video</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>Om Stöj</a>
                    </Link>
                </li>
                <ul className={css.contactList}>
                    <li className={css.listTel}><Link href="tel:30703048"><a>Nick - 30703048</a></Link></li>
                    <li className={css.listTel}><Link href="tel:30703048"><a>Martin - 31623733</a></Link></li>
                    <li className={css.listMail}><Link href="mailto:halloj@hallojstoj.dk"><a>halloj@hallojstoj.dk</a></Link></li>
                </ul>
            </ul>
        </div>
    </nav>
  )
}
