import Image from 'next/image'
import Link from 'next/link'
import StudieOne from '../public/Studie_1.jpg'
import StudieTwo from '../public/Studie_2.jpg'
import Kid from '../public/KronstadtKid.jpg'
import Nick from '../public/nick.png'
import Martin from '../public/martin.png'
import Glass from '../public/glass.jpg'
import StudieThree from '../public/Studie_3.jpg'
import css from '../styles/about.module.scss'
import { gsap } from 'gsap';
import React, { useRef, useState, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function About() {

    gsap.registerPlugin(ScrollTrigger);

    useEffect (() => {

        var scrollAbout = gsap.utils.toArray('.scrollAbout');
        scrollAbout.forEach((scrollAbout) => {
            gsap.from(scrollAbout, {
            scale: .6,
                scrollTrigger: {
                    trigger: scrollAbout,
                    start: "top bottom",
                    end: "top center",
                    scrub: true
                }
            });
        });

        var fadeInAbout = gsap.utils.toArray('.fadeInAbout');
        fadeInAbout.forEach((fadeInAbout) => {
            gsap.from(fadeInAbout, {
            opacity: 0,
                scrollTrigger: {
                    trigger: fadeInAbout,
                    start: "top 70%",
                    end: "top center",
                    scrub: true
                }
            });
        });

        gsap.set('.imgAnim', {opacity: 0})
        gsap.to('.imgAnim', {
            opacity: 1,
            duration: 1,
            delay: 1,
        });
    }, [])

    return(
        <>
            <div className={css.aboutTitle}>Om os</div>
            <section className={css.aboutSection}>
                <div className={css.introWrapper}>
                    <div className={css.imageWrapper}>
                        <Image src={StudieOne} layout="responsive" width='500' height='700'  objectFit='cover' objectPosition='center' quality='100' className='imgAnim'/>
                    </div>
                    <div className={css.textWrapper}>
                        <h1 className={css.h1}><strong>Vi er Stöj</strong> - To faguddannede fotografer, Nick Degn og Martin Kruse, med et lille fotostudie i hjertet af Odense. Vi skyder kommercielle billeder for landets største mediehuse, og arbejder med konceptudvikling for mindre virksomheder og start-ups. Vi er drevet af en passion for vores fag og sætter en ære i grundighed. På studiet vil i opleve en rolig atmosfære, hvor kreativiten kan få frit løb.</h1>
                        <div className={css.contact}>
                            <p>@Nick Deign</p>
                            <Link href='mailto:halloj@hallojstoj.dk'><a className={css.mailTo}>nick@hallojstoj.dk</a></Link>
                            <Link href='tel:30303030'><a className={css.telTo}>+45 30 30 30 30</a></Link>
                        </div>
                        <div className={css.contact}>
                            <p>@Martin Kruse</p>
                            <Link href='mailto:halloj@hallojstoj.dk'><a className={css.mailTo}>martin@hallojstoj.dk</a></Link>
                            <Link href='tel:30303030'><a className={css.telTo}>+45 30 30 30 30</a></Link>
                        </div>
                        <div className={css.contact}>
                            <p style={{ fontWeight: 'normal'}}>Find os på <strong>Havnegade 100L, Odense C</strong></p>
                        </div>
                    </div>
                </div>
                <div className={`${css.scroll} scrollAbout`} id={css.StudieOne}>
                    <Image src={StudieTwo} layout="responsive" className={`fadeInAbout`}/>
                </div>
                <div className={`${css.heading} scrollAbout`} id={css.headingStudie}>
                    <p><strong>Vores studie</strong> - studiet beliggende ved havnen i Odense er hjemsted for alt vores udstyr, baggrunde og regi. Herfra kan vi udføre alle opgaver, hvad end det er til magasiner, madoptagelse eller skabelsen af et helt andet rum.</p>
                </div>
                <div className={`${css.scroll} scrollAbout`} id={css.nick}>
                    <Image src={Nick} layout="responsive" className={`fadeInAbout`} quality='100'/>
                    <span className={css.caption}>Nick Deign</span>
                </div>
                <div className={`${css.scroll} scrollAbout`} id={css.martin}>
                    <Image src={Martin} layout="responsive" className={`fadeInAbout`} quality='100'/>
                    <span className={css.caption}>Martin Kruse</span>
                </div>
                <div className={`${css.scroll} scrollAbout`} id={css.glass}>
                    <Image src={Glass} layout="responsive" className={`fadeInAbout`} quality='100'/>
                </div>
                <div className={`${css.scroll} scrollAbout`} id={css.kid}>
                    <Image src={Kid} layout="responsive" className={`fadeInAbout`} quality='100'/>
                </div>
                <div className={`${css.scroll} scrollAbout`} id={css.StudieThree}>
                    <Image src={StudieThree} layout="responsive" className={`fadeInAbout`} quality='100'/>
                </div>
            </section>
        </>
    )
}
