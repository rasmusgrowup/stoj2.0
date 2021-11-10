import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap';
import React, { useRef, useState, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Player from '@vimeo/player';

import css from '../styles/index.module.scss'
import Logo from '../public/logo_white.svg'

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
  gsap.registerPlugin(ScrollTrigger);
  useEffect (() => {
    const player = new Player('vimeoIntro', {
      id: 519957973,
      background: true,
      responsive: true
    });

    player.on('play', function() {
      console.log('played the video!');
      gsap.from('.vimeoFadeIn', {opacity:0, duration: 2})
    });

    gsap.from('.vimeoScroll', {
    y: 100,
    duration: 2,
    opacity: 0,
    });

    gsap.from('.vimeoScrollCaption', {
    y: 100,
    duration: 2,
    opacity: 0,
    delay: 0.3,
    });

    var scroll = gsap.utils.toArray('.scroll');

    scroll.forEach((scroll) => {
      gsap.from(scroll, {
      scale: .6,
        scrollTrigger: {
          trigger: scroll,
          start: "top 80%",
          end: "top 36%",
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


  return (
    <>
      <div className={css.logo}>
        <Image src={Logo} layout='responsive' alt='logo' />
      </div>
      <div className={css.indexTitle}>Projekter</div>
      <section className={css.introSection} style={{ display: 'none' }}>

        <div className={css.vimeoIntro}>
        <Link href='/'>
          <a>
            <div className={`${css.videoWrapper} vimeoScroll`} id="Vimeo" style={{ backgroundColor: 'black' }}>
              <div className={`${css.vimeoContainer} vimeoFadeIn`}>
                <div className={css.vimeoVideo} id='vimeoIntro'></div>
              </div>
            </div>
            <p className={`${css.vimeoCaption} vimeoScrollCaption`}>2022 REEL</p>
          </a>
        </ Link>
        </div>
      </section>

      <section className={css.scrollSection}>
        <div className={`${css.heading} scroll`} id="heading" style={{ display: 'none' }}>
            <h1>Foto- og videoproduktion i Odense</h1>
            <p>Vi skyder kommercielle billeder og videoer for de bedste mediehuse i Danmark. De vælger os, fordi vi kan overføre deres visuelle koncepter til film og foto - altid med respekt for kundernes unikke visuelle univers. De billeder og videoer vi producerer, bruges på tværs af trykte og digitale medier, og kan findes overalt i det ganske land. Desuden hjælper vi start-ups og etablerede brands med at udvikle deres eget unikke billedunivers.</p>
            <Link href='about'><a className={css.headingContact}>Læs mere om os</a></ Link>
        </div>

        <div className={`${css.scroll} scroll`} id="firstCase" style={{ backgroundColor: '#de7cb7' }}>
          <Image src={firstCase} layout="responsive" className={`fadeIn`} priority='true' alt=''/>
        </div>

        <div className={`${css.scroll} scroll`} id="secondCase" style={{ backgroundColor: '#2c99d4' }}>
          <Image src={secondCase} layout="responsive" className={`fadeIn`} alt=''/>
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
