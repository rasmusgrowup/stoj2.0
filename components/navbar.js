import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from "react";
import { gsap } from 'gsap';
import css from '../styles/nav.module.scss'
import Arrow from '../public/arrow.svg'

export default function Navbar() {
  const navRef = useRef(null);
  useEffect(() => {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      gsap.fromTo(navRef.current, {
          opacity: 0,
          y: -50
        },
        {
          ease: 'Power3.easeInOut',
          delay: 1,
          duration: 2,
          opacity: 1,
          y: 0
        });
    } else {
      gsap.set(navRef.current, { opacity: 1 })
    }
  }, [])


  const [isActive, setActive] = useState("false");
  const handleToggle = () => {setActive(!isActive)};
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
  <>
    <nav className={css.mainNav} ref={navRef}>
      <div className={css.socialLinks}>
        <ul>
          <li>
            <Link href="https://instagram.com/halloj_stoj"><a className={css.link} target='_blank'><span>Instagram</span><Image src={Arrow} width='9' height='9' /></a>
            </Link>
          </li>
          <li style={{ display: 'none' }}>|</li>
          <li style={{ display: 'none' }}><Link href="mailto:halloj@hallojstoj.dk"><a className={css.link} target='_blank'>LinkedIn</a></Link></li>
        </ul>
      </div>

      <div className={css.menuBtn}>
        <button className={`${css.menuIcon} ${isActive ? css.menuIconClosed : css.menuIconOpened}`} id="menuIcon" onClick={click}>
            <span></span>
            <span></span>
            <span></span>
        </button>
      </div>
    </nav>
    <div className={`${css.menuContent} ${isActive ? css.menuClosed : css.menuOpened} menu`} data-scroll-section>
      <ul className={css.menuList} onClick={click}>
        <li>
          <Link href="/">
            <a>Projekter</a>
          </Link>
        </li>
        <li>
          <Link href="/galleri">
            <a>Galleri</a>
          </Link>
        </li>
        <li>
          <Link href="/video">
            <a>Video</a>
          </Link>
        </li>
        <li>
          <Link href="/om-stoj">
            <a>Studiet</a>
          </Link>
        </li>
        <ul className={css.contactList}>
          <li className={css.listTel}><Link href="tel:+4525700722"><a>Nick - 25 70 07 22</a></Link></li>
          <li className={css.listTel}><Link href="tel:+4525663565"><a>Martin - 25 66 35 65 </a></Link></li>
          <li className={css.listMail}><Link href="mailto:halloj@hallojstoj.dk"><a>halloj@hallojstoj.dk</a></Link></li>
        </ul>
      </ul>
    </div>
  </>
  )
}
