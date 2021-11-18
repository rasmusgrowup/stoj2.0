import css from '../styles/video.module.scss'
import Head from 'next/head'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Vimeo from '../components/vimeo'

export default function Video({ title, keywords, description }) {
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
      <Head>
        <meta name="description" content={description} key='description'/>
        <meta name="keywords" content={keywords} key='keywords' />
        <meta name="og:title" content={title} key='title'/>
        <title>{title}</title>
      </Head>
      <section className={css.videoSection}>
        <div className={css.videoTitle}>Video</div>
        <div className={css.videoGalleryWrapper}>
          <Vimeo id='first' vimeoId='388249746' bgColor='black' background='false'/>
          <Vimeo id='second' vimeoId='388259588' bgColor='black' background='false'/>
          <Vimeo id='third' vimeoId='388262361' bgColor='black' background='false'/>
          <Vimeo id='fourth' vimeoId='276234867' bgColor='black' background='false'/>
          <Vimeo id='fifth' vimeoId='276223516' bgColor='black' background='false'/>
          <Vimeo id='sixth' vimeoId='388236900' bgColor='black' background='false'/>
        </div>
      </section>
    </>
  )
}

Video.defaultProps = {
  title: 'STÖJ | Professionel produktion af video og film',
  keywords: 'fotografering, videoproduktion, kommerciel, billeder, fotos, fotografier, Odense, fotostudie',
  description: 'Vi skyder kommercielle billeder for landets største mediehuse, og arbejder med konceptudvikling for mindre virksomheder og start-ups. Vi er drevet af en passion for vores fag og sætter en ære i grundighed.'
}
