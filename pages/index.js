import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import css from '../styles/index.module.scss'
import Logo from '../public/logo_white.svg'

import introImage from '../public/Stol2.jpg'
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
  const tl = gsap.timeline({ delay: 1, defaults: { ease: 'Power3.easeInOut' }});
  gsap.registerPlugin(ScrollTrigger);

  useEffect (() => {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      setAnimateIntro(true);
      window.sessionStorage.setItem("firstLoadDone", 1)
      tl
        .from('#firstCase', {
          duration: 2,
          clipPath: 'inset(100% 0 0 0)',
          ease: 'Power3.easeInOut',
        })
        .from('#secondCase', {
          duration: 2,
          clipPath: 'inset(100% 0 0 0)',
          ease: 'Power3.easeInOut',
        }, '-=1.45');
    } else {
      setAnimateIntro(false);
      gsap.set('#firstCase', {
        clipPath: 'inset(0% 0 0 0)',
      });
      gsap.set('#secondCase', {
        clipPath: 'inset(0% 0 0 0)',
      })
    }
  }, [])

  useEffect(() => {
    var scrollEl = gsap.utils.toArray('.scroll');
    scrollEl.forEach((scroll) => {
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
  }, [])

  return (
    <>
      <div className={css.logo}>
        <Image src={Logo} layout='responsive' alt='logo' />
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
