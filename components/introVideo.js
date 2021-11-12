import Link from 'next/link'
import { gsap } from 'gsap';
import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Player from '@vimeo/player';

import css from '../styles/introVideo.module.scss'

export default function IntroVideo() {

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
  }, [])

  return (
    <>
      <section className={css.introSection}>
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
    </>
  )
}
