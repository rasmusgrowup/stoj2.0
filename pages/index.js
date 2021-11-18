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
  const tl = gsap.timeline({ defaults: { ease: 'Power3.easeInOut' }});
  gsap.registerPlugin(ScrollTrigger);

  useEffect (() => {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      setAnimateIntro(true);
      window.sessionStorage.setItem("firstLoadDone", 1)

      tl
        .from('.spanAnimInner', {
          yPercent: 100,
          stagger: 0.1,
          duration: 1.5,
          delay: 0.5,
        })
        .from('.timeline', {
          opacity: 0,
          duration: 2,
        }, '-=1.5')
        .to('.line', {
          duration: 10,
          ease: 'none',
          width: '100%',
        })
        .to('#introAnim', {
          duration: 2,
          clipPath: 'inset(0 0 100% 0)',
          ease: 'Power3.easeInOut',
        })
        .from('#indexTitle', {
          yPercent: 100,
          duration: 2,
          ease: 'Power3.easeInOut',
        }, '-=1.5')
        .from('#firstCase', {
          duration: 2,
          clipPath: 'inset(100% 0 0 0)',
          ease: 'Power3.easeInOut',
        }, '-=1.45')
        .from('#secondCase', {
          duration: 2,
          clipPath: 'inset(100% 0 0 0)',
          ease: 'Power3.easeInOut',
        }, '-=1.45');
    } else {
      setAnimateIntro(false);
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
  })

  return (
    <>
      <div className={css.logo}>
        <Image src={Logo} layout='responsive' alt='logo' />
      </div>

      <div className={`${css.introAnimation} ${animateIntro ? '' : css.introAnimationPlayed}`} id="introAnim">
       <div className={css.introInner}>
         <h1 className='spanAnim'><span className='spanAnimInner'>Kreativt fotostudie i Odense centrum</span></h1>
         <span className={css.textContainer}>
           <div className={css.spanAnim}><span className='spanAnimInner'>Vi producerer film og billeder for danske</span></div>
           <div className={css.spanAnim}><span className='spanAnimInner'>virksomheder og mediehuse i vores</span></div>
           <div className={css.spanAnim}><span className='spanAnimInner'>fotostudie ved Odense havn. Vores</span></div>
           <div className={css.spanAnim}><span className='spanAnimInner'>fotografier og film bruges på tværs af</span></div>
           <div className={css.spanAnim}><span className='spanAnimInner'>digitale og trykte medier. Vi tager</span></div>
           <div className={css.spanAnim}><span className='spanAnimInner'>ansvar for at holde et ensartet udtryk,</span></div>
           <div className={css.spanAnim}><span className='spanAnimInner'>skabe unikke historiefortællinger og</span></div>
           <div className={css.spanAnim}><span className='spanAnimInner'>udvikle jeres visuelle univers over tid.</span></div>
         </span>
         <span className={`${css.timeline} timeline`}>
           <span className={`${css.line} line`}></span>
         </span>
       </div>
       <Image src={introImage} layout='fill' objectFit='cover' objectPosition='bottom right' qulaity='100' className={css.introImage}/>
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
