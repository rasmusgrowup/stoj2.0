import Head from 'next/head'
import Image from 'next/image'
import Logo from '../public/logo.svg'
import kronstadtSkater from '../public/kronstadt-skater.jpg'
import myMoments from '../public/mymoments.jpg'
import Marengs from '../public/marengs.jpg'
import kronstadtMaze from '../public/kronstadt-maze.jpg'
import feminaOne from '../public/Femina1.jpg'
import feminaTwo from '../public/Femina2.jpg'
import feminaThree from '../public/Femina3.jpg'
import Stol from '../public/stol.jpg'
import isabellasOne from '../public/Isabellas.jpg'
import isabellasTwo from '../public/Isabellas2.jpg'
import is from '../public/is.jpg'
import css from '../styles/index.module.scss'
import { gsap } from 'gsap';
import React, { useRef, useState, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Player from '@vimeo/player';

export default function Home() {

    gsap.registerPlugin(ScrollTrigger);

    useEffect (() => {

        var scroll = gsap.utils.toArray('.scroll');

        scroll.forEach((scroll) => {

            gsap.from(scroll, {
            scale: .6,
                scrollTrigger: {
                    trigger: scroll,
                    start: "top bottom",
                    end: "top center",
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

        const player = new Player('intro-video', {
            id: 519957973,
            background: true,
            responsive: true
        });

    }, [])


  return (
    <>
        <div className={css.logo}>
            <Image src={Logo}></Image>
        </div>
        <section className={css.mainSection}>

            <div className={`${css.scroll} scroll`} id="kronstadtSkater"><Image src={kronstadtSkater} layout="responsive" className={`fadeIn`}></Image></div>

            <div className={`${css.scroll} scroll`} id="myMoments"><Image src={myMoments} layout="responsive" className={`fadeIn`}></Image></div>

            <div className={`${css.scroll} scroll`} id="Marengs"><Image src={Marengs} layout="responsive" className={`fadeIn`}></Image></div>

            <div className={`${css.scroll} scroll`} id="Vimeo">
                <div className={`${css.introVideo} fadeIn`} id="intro-video" ></div>
            </div>

            <div className={`${css.scroll} scroll`} id="Maze"><Image src={kronstadtMaze} layout="responsive" className={`fadeIn`}></Image></div>

            <div className={`${css.heading} scroll`} id="heading">
                <h1>Foto- og Videoproduktion</h1>
                <p>Vi skaber spændende, visuelle universer, gennem billeder og video. Herunder har vi udvalgt nogle af de seneste projekter, vi har arbejdet på. Vi viser de projekter, der bedst illustrerer hvordan vi arbejder, og de opgaver, der krævede særligt kreative løsninger.</p>
            </div>

            <div className={`${css.scroll} scroll`} id="Femina1"><Image src={feminaOne} layout="responsive" className={`fadeIn`}></Image></div>

            <div className={`${css.scroll} scroll`} id="Femina2"><Image src={feminaTwo} layout="responsive" className={`fadeIn`}></Image></div>

            <div className={`${css.scroll} scroll`} id="Stol"><Image src={Stol} layout="responsive" className={`fadeIn`}></Image></div>

            <div className={`${css.scroll} scroll`} id="Isabellas1"><Image src={isabellasOne} layout="responsive" className={`fadeIn`}></Image></div>

            <div className={`${css.scroll} scroll`} id="Isabellas2"><Image src={isabellasTwo} layout="responsive" className={`fadeIn`}></Image></div>

            <div className={`${css.scroll} scroll`} id="is"><Image src={is} layout="responsive" className={`fadeIn`}></Image></div>

            <div className={`${css.scroll} scroll`} id="Femina3"><Image src={feminaThree} layout="responsive" className={`fadeIn`}></Image></div>

        </section>
    </>
  )
}
