import Image from 'next/image'
import Link from 'next/link'
import css from '../styles/footer.module.scss'
import Stoj from '../public/stoj-portrait.jpg'
import { gsap } from 'gsap';
import React, { useRef, useState, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Footer() {

    gsap.registerPlugin(ScrollTrigger);

    useEffect (() => {

        var container = gsap.utils.toArray('.containerDisabled');

        container.forEach((container) => {

            gsap.from(container, {
            scale: .6,
                scrollTrigger: {
                    trigger: container,
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: true
                }
            });
        });

    }, [])

  return (
    <footer className={css.mainFooter}>
        <div className={`${css.container} container`}>
            <div className={css.mail}><Link href="mailto:halloj@hallojstoj.dk"><a>halloj@hallojstoj.dk</a></Link></div>
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
            </ul>
            <div className={css.copyright}>©2021 STÖJ APS  ·  CVR.: 316237335</div>
        </div>
    </footer>
  )
}
