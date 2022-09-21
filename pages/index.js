// Defaults
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// React
import React, { useRef, useState, useEffect } from 'react';

// GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Styling
import css from '../styles/index.module.scss'
import Logo from '../public/logo_white.svg'

import Gurkemeje from '../public/udvalgte/gurkemeje.jpg'
import Maze from '../public/udvalgte/mazeClean.jpg'
import Borster from '../public/udvalgte/boerster.jpg'
import Youngskin from '../public/udvalgte/youngskin.jpg'
import Model from '../public/udvalgte/model.jpg'
import Scrub from '../public/udvalgte/scrub.jpg'
import Rum from '../public/udvalgte/rum.jpg'
import Vase from '../public/udvalgte/vase.jpg'
import Hund from '../public/udvalgte/hund.jpg'
import Lemonade from '../public/udvalgte/lemonade.jpg'
import Kvinde from '../public/udvalgte/kvinde.jpg'
import Worker from '../public/udvalgte/worker.jpg'
import Stol from '../public/udvalgte/stol.jpg'
import Pige from '../public/udvalgte/pige.jpg'
import Rum2 from '../public/udvalgte/rum2.jpg'
import Organic from '../public/udvalgte/organic.jpg'
import Is from '../public/udvalgte/is.jpg'
import Schaf from '../public/udvalgte/schaf.jpg'
import AntiAge from '../public/udvalgte/anti_age_matas.jpg'

export default function Home() {
  const router = useRouter();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    var scrollEl = gsap.utils.toArray('.scroll');
    scrollEl.forEach((scroll) => {
      gsap.fromTo(scroll, {
        scale: .6,
      },
      {
        scale: 1,
        scrollTrigger: {
          trigger: scroll,
          start: "top 80%",
          end: "top 30%",
          scrub: true
        }
      });
    });

    var fadeEl = gsap.utils.toArray('.fadeIn');
    fadeEl.forEach((fade) => {
      gsap.fromTo(fade, {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: fade,
          start: "top 80%",
          end: "top 30%",
          scrub: true
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }
  }, [router])

  return (
    <>
      <div className={css.logo}>
        <div className={`${css.logoInner} logoAnim`}>
          <Image src={Logo} layout='responsive' alt='logo' />
        </div>
      </div>

      <div className={css.indexTitle}>
        <span className={css.indexTitleInner}>Udvalgte</span>
      </div>

      <section className={css.scrollSection}>

        <div className={`${css.scroll} ${css.maze} scroll`} style={{ backgroundColor: '#EFBD6A' }}>
          <Image
            src={Gurkemeje}
            layout="responsive"
            className="fadeIn"
            priority='true'
            quality='100'
            alt=''
            />
        </div>

        <div className={`${css.scroll} ${css.model} scroll`} style={{ backgroundColor: '#D5C8B4' }}>
          <Image
            src={Model}
            layout="responsive"
            className="fadeIn"
            priority='true'
            quality='100'
            alt=''
            />
        </div>

        <div className={`${css.scroll} ${css.youngskin} scroll`} style={{ backgroundColor: '#C1CDCD' }}>
          <Image
            src={Youngskin}
            layout="responsive"
            className="fadeIn"
            quality='100'
            alt=''
            />
        </div>

        <div className={`${css.scroll} ${css.borster} scroll`} style={{ backgroundColor: 'grey' }}>
          <Image
            src={Borster}
            layout="responsive"
            className="fadeIn"
            quality='100'
            alt=''
            />
        </div>

        <div className={`${css.scroll} ${css.scrub} scroll`} style={{ backgroundColor: '#C4BDB7' }}>
          <Image
            src={Scrub}
            layout="responsive"
            className="fadeIn"
            quality='100'
            alt=''
            />
        </div>

        <div className={`${css.scroll} ${css.rum} scroll`} style={{ backgroundColor: 'grey' }}>
          <video
            className='fadeIn'
            autoPlay
            muted
            loop
            playsInline
            style={{ objectFit: 'cover' }}
            width='100%'
            height='100%'
            alt=''
            >
            <source src={'/Test_web_frontpage.mp4'} type='video/mp4' />
          </video>
        </div>

        <div className={`${css.scroll} ${css.vase} scroll`} style={{ backgroundColor: '#FDEFF9' }}>
          <Image
            src={Vase}
            layout="responsive"
            className="fadeIn"
            quality='100'
            alt=''
            />
        </div>

        <div className={`${css.scroll} ${css.hund} scroll`} style={{ backgroundColor: '#FBFBFB' }}>
          <Image
            src={Hund}
            layout="responsive"
            className="fadeIn"
            quality='100'
            alt=''
            />
        </div>

        <div className={`${css.scroll} ${css.lemonade} scroll`} style={{ backgroundColor: '#171619' }}>
          <Image
            src={Lemonade}
            layout="responsive"
            className="fadeIn"
            quality='100'
            alt=''
            />
        </div>

        <div className={`${css.scroll} ${css.kvinde} scroll`} style={{ backgroundColor: '#D0DBE4' }}>
          <Image
            src={Kvinde}
            layout="responsive"
            className="fadeIn"
            quality='100'
            alt=''
            />
        </div>

        <div className={`${css.scroll} ${css.pige} scroll`} style={{ backgroundColor: '#08191C' }}>
          <Image
            src={Pige}
            layout="responsive"
            className="fadeIn"
            quality='100'
            alt=''
            />
        </div>

        <div className={`${css.scroll} ${css.worker} scroll`} style={{ backgroundColor: '#000000' }}>
          <Image
            src={Worker}
            layout="responsive"
            className="fadeIn"
            quality='100'
            alt=''
            />
        </div>

        <div className={`${css.scroll} ${css.stol} scroll`} style={{ backgroundColor: '#6E8380' }}>
          <Image
            src={Stol}
            layout="responsive"
            className="fadeIn"
            quality='100'
            alt=''
            />
        </div>

        <div className={`${css.scroll} ${css.rum2} scroll`} style={{ backgroundColor: '#6E8380' }}>
          <Image
            src={Rum2}
            layout="responsive"
            className="fadeIn"
            quality='100'
            alt=''
            />
        </div>

        <div className={`${css.scroll} ${css.organic} scroll`} style={{ backgroundColor: '#FED2D2' }}>
          <Image
            src={Organic}
            layout="responsive"
            className="fadeIn"
            quality='100'
            alt=''
            />
        </div>

        <div className={`${css.scroll} ${css.is} scroll`} style={{ backgroundColor: '#295267' }}>
          <Image
            src={Is}
            layout="responsive"
            className="fadeIn"
            quality='100'
            alt=''
            />
        </div>

        <div className={`${css.scroll} ${css.schaf} scroll`} style={{ backgroundColor: '#7A959F' }}>
          <Image
            src={Schaf}
            layout="responsive"
            className="fadeIn"
            quality='100'
            alt=''
            />
        </div>

        <div className={`${css.scroll} ${css.antiage} scroll`} style={{ backgroundColor: '#BFB7B5' }}>
          <Image
            src={AntiAge}
            layout="responsive"
            className="fadeIn"
            quality='100'
            alt=''
            />
        </div>

      </section>
    </>
  )
}
