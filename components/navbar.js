import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from "react";
import css from '../styles/nav.module.scss'

export default function Navbar() {
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
    };

  return (
    <nav className={css.mainNav}>
        <div className={css.socialLinks}>
            <ul>
                <li><Link href="https://instagram.com/halloj_stoj"><a className={css.logo}>Instagram</a></Link></li>
                <li>|</li>
                <li><Link href="https://instagram.com/halloj_stoj"><a className={css.logo}>Linkedin</a></Link></li>
            </ul>
        </div>

        <div className={css.menuBtn}>
            <button className={`${css.menuIcon} ${isActive ? css.menuIconClosed : css.menuIconOpened}`} id="menuIcon" onClick={handleToggle}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>

        <div className={`${css.menuContent} ${isActive ? css.menuClosed : css.menuOpened}`}>
            <ul className={css.menuList}>
                <li>
                    <Link href="/">
                        <a>Foto</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Video</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Galleri</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Om os</a>
                    </Link>
                </li>
                <li className={css.listMail}><Link href="mailto:halloj@hallojstoj.dk"><a>halloj@hallojstoj.dk</a></Link></li>
            </ul>
        </div>
    </nav>
  )
}
