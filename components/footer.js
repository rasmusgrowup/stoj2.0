import Image from 'next/image'
import Link from 'next/link'
import css from '../styles/footer.module.scss'
import Stoj from '../public/stoj-portrait.jpg'
import { gsap } from 'gsap';
import React, { useRef, useState, useEffect } from 'react';
import { useRouter} from "next/router";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Footer() {

    gsap.registerPlugin(ScrollTrigger);
    const router = useRouter();

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
    <footer className={css.mainFooter} style={{ display: `${router.pathname == "/galleri/[id]" ? 'none' : 'auto'}` }}>
        <div className={`${css.container} container`} >
            <div className={css.address} style={{ display: 'none' }}>Havnegade 100L, Odense C - <Link href="#"><a>åben kort</a></Link></div>
            <div className={css.copyright}>©2021 STÖJ APS<br />CVR.: 38834053</div>
        </div>
    </footer>
  )
}
