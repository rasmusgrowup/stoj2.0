import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap';
import React, { useRef, useState, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import css from '../styles/index.module.scss'
import Logo from '../public/logo_white.svg'

import introImage from '../public/intro-image.jpg'
import firstCase from '../public/Wonder.jpg'
import secondCase from '../public/kronstadt-skater.jpg'
import thirdCase from '../public/Mad.jpg'
import fourthCase from '../public/Maze.jpg'
import fifthCase from '../public/Isabellas.jpg'
import sixthCase from '../public/Femina.jpg'
import seventhCase from '../public/Stol2.jpg'
import eightCase from '../public/Worker.jpg'
import ninthCase from '../public/Summerbird.jpg'
import tenthCase from '../public/Mad2.jpg'
import eleventhCase from '../public/Femina4.jpg'

export default function Home() {
  const [animateIntro, setAnimateIntro] = useState(true);

  gsap.registerPlugin(ScrollTrigger);

  useEffect (() => {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      setAnimateIntro(true);
      window.sessionStorage.setItem("firstLoadDone", 1)
      gsap.to('#introAnim', {
        delay: 3,
        duration: 2,
        clipPath: 'inset(0 0 100% 0)',
        ease: 'Power3.easeInOut',
      })

      gsap.from('#indexTitle', {
        yPercent: 100,
        duration: 2,
        delay: 3.9,
        ease: 'Power3.easeInOut',
      })

      gsap.from('#firstCase', {
        delay: 3.5,
        duration: 2,
        clipPath: 'inset(100% 0 0 0)',
        ease: 'Power3.easeInOut',
      })

      gsap.from('#secondCase', {
        delay: 3.75,
        duration: 2,
        clipPath: 'inset(100% 0 0 0)',
        ease: 'Power3.easeInOut',
      })
    } else {
      setAnimateIntro(false);
    }
  })

  useEffect (() => {

    var scroll = gsap.utils.toArray('.scroll');

    scroll.forEach((scroll) => {
      gsap.from(scroll, {
      scale: .6,
        scrollTrigger: {
          trigger: scroll,
          start: "top 95%",
          end: "top 40%",
          scrub: true
        }
      });
    });

    var fadeIn = gsap.utils.toArray('.fadeIn');
    fadeIn.forEach((fadeIn) => {
      gsap.from(fadeIn, {
      opacity: 0,
        scrollTrigger: {
          trigger: fadeIn,
          start: "top 85%",
          end: "top 40%",
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


  return (
    <>
      <div className={css.logo}>
        <Image src={Logo} layout='responsive' alt='logo' />
      </div>

      <div className={`${css.introAnimation} ${animateIntro ? '' : css.introAnimationPlayed}`} id="introAnim">
        <h1>Foto, film & halløj</h1>
        <Image src={introImage} layout='fill' priority='true' objectFit='cover' objectPosition='center' quality='100'/>
      </div>

      <div className={css.indexTitle}><span className={css.indexTitleInner} id="indexTitle">Projekter</span></div>

      <section className={css.scrollSection}>
        <div className={`${css.scroll} scroll`} id="firstCase" style={{ backgroundColor: '#de7cb7' }}>
          <Image src={firstCase} layout="responsive" className={`fadeIn`} priority='true' alt=''/>
        </div>

        <div className={`${css.scroll} scroll`} id="secondCase" style={{ backgroundColor: '#2c99d4' }}>
          <Image src={secondCase} layout="responsive" className={`fadeIn`} priority='true' alt=''/>
        </div>

        <div className={`${css.scroll} scroll`} id="thirdCase" style={{ backgroundColor: '#140c09' }}>
          <Image src={thirdCase} layout="responsive" className={`fadeIn`} alt=''/>
        </div>

        <div className={`${css.scroll} scroll`} id="fourthCase" style={{ backgroundColor: '#166c31' }}>
          <Image src={fourthCase} layout="responsive" className={`fadeIn`} alt=''/>
          </div>

        <div className={`${css.scroll} scroll`} id="fifthCase" style={{ backgroundColor: '#9a243a' }}>
          <Image src={fifthCase} layout="responsive" className={`fadeIn`} alt=''/>
        </div>

        <div className={`${css.scroll} scroll`} id="sixthCase" style={{ backgroundColor: '#a03d10' }}>
          <Image src={sixthCase} layout="responsive" className={`fadeIn`} alt=''/>
        </div>

        <div className={`${css.scroll} scroll`} id="seventhCase" style={{ backgroundColor: '#222b2a' }}>
          <Image src={seventhCase} layout="responsive" className={`fadeIn`} alt=''/>
        </div>

        <div className={`${css.scroll} scroll`} id="eightCase" style={{ backgroundColor: '#c66d16' }}>
          <Image src={eightCase} layout="responsive" className={`fadeIn`} alt=''/>
        </div>

        <div className={`${css.scroll} scroll`} id="ninthCase" style={{ backgroundColor: '#539329' }}>
          <Image src={ninthCase} layout="responsive" className={`fadeIn`} alt=''/>
          </div>

        <div className={`${css.scroll} scroll`} id="tenthCase" style={{ backgroundColor: '#1ecf93' }}>
          <Image src={tenthCase} layout="responsive" className={`fadeIn`} alt=''/>
        </div>

        <div className={`${css.scroll} scroll`} id="eleventhCase" style={{ backgroundColor: '#1e4acf' }}>
          <Image src={eleventhCase} layout="responsive" className={`fadeIn`} alt=''/>
          </div>

      </section>
    </>
  )
}
