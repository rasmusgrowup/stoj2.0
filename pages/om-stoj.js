import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import StudieOne from '../public/Studie_1.jpg'
import StudieTwo from '../public/Studie_2.jpg'
import Kid from '../public/KronstadtKid.jpg'
import Nick from '../public/nick.png'
import Martin from '../public/martin.png'
import Glass from '../public/glass.jpg'
import StudieThree from '../public/Studie_3_bw.jpg'
import css from '../styles/about.module.scss'
import { gsap } from 'gsap';
import React, { useRef, useState, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function About({ title, keywords, description }) {
  const router = useRouter();
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

    gsap.from('.imgAnim', {
      clipPath: 'inset(100% 0 0 0)',
      duration: 2,
      delay: 1,
      ease: 'Power3.easeOut',
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.getAll().forEach((trigger) => trigger.refresh());
    }
  }, [router])

    return(
      <>
        <Head>
          <meta name="description" content={description} key='description'/>
          <meta name="keywords" content={keywords} key='keywords' />
          <meta name="og:title" content={title} key='title'/>
          <title>{title}</title>
        </Head>
        <section className={css.aboutSection}>
            <div className={css.aboutTitle}>Om Stöj</div>
            <div className={css.introWrapper}>
                <div className={`${css.imageWrapper} imgAnim`}>
                    <Image src={StudieOne} layout="responsive" width='500' height='700'  objectFit='cover' objectPosition='center' quality='100' alt='Stöj fotostudie'/>
                </div>
                <div className={css.textWrapper}>
                    <h1 className={css.h1}>Kommerciel fotografering</h1>
                    <p>Vi er Stöj — To faguddannede fotografer, Nick Degn og Martin Kruse, med et lille fotostudie i hjertet af Odense. Vi skyder kommercielle billeder for landets største mediehuse, og arbejder med konceptudvikling for mindre virksomheder og start-ups. Vi er drevet af en passion for vores fag og sætter en ære i grundighed. På studiet vil i opleve en rolig atmosfære, hvor kreativiten kan få frit løb.</p>
                    <p>Find os på Havnegade 100L, Odense C, 5000</p>
                    <div className={css.contact}>
                        <p>Nick Degn</p>
                        <Link href='mailto:halloj@hallojstoj.dk'><a className={css.mailTo}>nick@hallojstoj.dk</a></Link>
                        <Link href='tel:+4525700722'><a className={css.telTo}>25 70 07 22</a></Link>
                    </div>
                    <div className={css.contact}>
                        <p>Martin Kruse</p>
                        <Link href='mailto:halloj@hallojstoj.dk'><a className={css.mailTo}>martin@hallojstoj.dk</a></Link>
                        <Link href='tel:+4525663565'><a className={css.telTo}>25 66 35 65</a></Link>
                    </div>
                </div>
            </div>
            <div className={`${css.scroll} scrollAbout`} id={css.StudieOne}>
                <Image src={StudieTwo} layout="responsive" className={`fadeInAbout`} alt='Stöj fotostudie'/>
            </div>
            <div className={css.heading} id={css.headingStudie}>
              <h2>Vores fotostudie</h2>
              <p>Studiet beliggende ved havnen i Odense er hjemsted for alt vores udstyr, baggrunde og regi. Herfra kan vi udføre alle opgaver, hvad end det er til magasiner, madoptagelse eller skabelsen af et helt andet rum.</p>
            </div>
            <div className={`${css.scroll} scrollAbout`} id={css.nick}>
                <Image src={Nick} layout="responsive" className={`fadeInAbout`} quality='100' alt='Nick Degn'/>
                <span className={css.caption}>Nick Degn</span>
            </div>
            <div className={`${css.scroll} scrollAbout`} id={css.martin}>
                <Image src={Martin} layout="responsive" className={`fadeInAbout`} quality='100' alt='Martin Kruse'/>
                <span className={css.caption}>Martin Kruse</span>
            </div>
            <div className={`${css.scroll} scrollAbout`} id={css.glass}>
                <Image src={Glass} layout="responsive" className={`fadeInAbout`} quality='100' alt=''/>
            </div>
            <div className={`${css.scroll} scrollAbout`} id={css.kid}>
                <Image src={Kid} layout="responsive" className={`fadeInAbout`} quality='100' alt=''/>
            </div>
            <div className={`${css.scroll} scrollAbout`} id={css.StudieThree}>
                <Image src={StudieThree} layout="responsive" className={`fadeInAbout`} quality='100' alt=''/>
            </div>
        </section>
      </>
    )
}

About.defaultProps = {
  title: 'STÖJ | Odenseansk fotostudie',
  keywords: 'fotografering, videoproduktion, kommerciel, billeder, fotos, fotografier, Odense, fotostudie',
  description: 'Vi skyder kommercielle billeder for landets største mediehuse, og arbejder med konceptudvikling for mindre virksomheder og start-ups. Vi er drevet af en passion for vores fag og sætter en ære i grundighed.'
}
