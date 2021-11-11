import css from '../styles/video.module.scss'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Vimeo from '../components/vimeo'

export default function Video() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect (() => {
        gsap.set('.vimeoFadeIn', {opacity:0})
        var fadeIn = gsap.utils.toArray('.vimeoFadeIn');
        fadeIn.forEach((fadeIn) => {
            gsap.to(fadeIn, {
            opacity: 1,
                scrollTrigger: {
                    trigger: fadeIn,
                    start: "top 70%",
                    end: "top center",
                    scrub: true
                }
            });
        });
    }, [])

  return (
    <>
      <div className={css.videoTitle}>Video</div>
      <div className={css.videoGalleryWrapper}>
        <Vimeo id='first' vimeoId='388249746' bgColor='orange' background='false'/>
        <Vimeo id='second' vimeoId='388259588' bgColor='orange' background='false'/>
        <Vimeo id='third' vimeoId='388262361' bgColor='orange' background='false'/>
      </div>
    </>
  )
}
