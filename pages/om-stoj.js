// Defaults
import Image from 'next/image';
import { useRouter } from 'next/router';

// React
import React, { useRef, useState, useEffect } from 'react';

// GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Styling
import css from '../styles/alt.module.scss'
import Logo from '../public/logo_white.svg'

import Studio from '../public/Studie_1.jpg'
import Studio2 from '../public/studio/001.jpg'
import Studio3 from '../public/studio/002.jpg'
import Studio4 from '../public/studio/005.jpg'
import Studio5 from '../public/studio/havnen_nick-kopi.jpg'
import Studio6 from '../public/studio/IMG_0072.jpg'
import Studio7 from '../public/studio/IMG_0561.jpg'
import Studio8 from '../public/studio/IMG_1584.jpg'
import Studio9 from '../public/studio/IMG_1257.jpg'
import Studio10 from '../public/studio/IMG_1968.jpg'
import Studio11 from '../public/studio/IMG_3895.jpg'
import Studio12 from '../public/studio/studiet_bagom-kopi.jpg'
import Studio13 from '../public/studio/studiet_bagom_twelveinch-kopi.jpg'
import Studio14 from '../public/studio/IMG_3981.jpg'
import Studio15 from '../public/studio/IMG_4026.jpg'
import Studio16 from '../public/studio/IMG_4303.jpg'
import Studio17 from '../public/studio/IMG_4368.jpg'
import Studio18 from '../public/studio/studiet_jeppe_rie-kopi.jpg'
import Studio19 from '../public/studio/havnen_bagom-kopi.jpg'

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
            <div className={css.indexTitle}>
                <span className={css.indexTitleInner}>Studiet</span>
            </div>

            <section className={css.scrollSection}>

                <div className={`${css.scroll} ${css.studio} scroll`} style={{ backgroundColor: '#c7c7c7' }}>
                    <Image
                        src={Studio}
                        layout="responsive"
                        className="fadeIn"
                        priority='true'
                        quality='100'
                        alt=''
                    />
                </div>

                <div className={`${css.scroll} ${css.studio2} scroll`} style={{ backgroundColor: '#fff2df' }}>
                    <Image
                        src={Studio2}
                        layout="responsive"
                        className="fadeIn"
                        priority='true'
                        quality='100'
                        alt=''
                    />
                </div>

                <div className={`${css.scroll} ${css.studio3} scroll`} style={{ backgroundColor: '#2d2018' }}>
                    <Image
                        src={Studio3}
                        layout="responsive"
                        className="fadeIn"
                        quality='100'
                        alt=''
                    />
                </div>

                <div className={`${css.scroll} ${css.studio4} scroll`} style={{ backgroundColor: '#142e65' }}>
                    <Image
                        src={Studio4}
                        layout="responsive"
                        className="fadeIn"
                        quality='100'
                        alt=''
                    />
                </div>

                <div className={`${css.scroll} ${css.studio5} scroll`} style={{ backgroundColor: '#C4BDB7' }}>
                    <Image
                        src={Studio5}
                        layout="responsive"
                        className="fadeIn"
                        quality='100'
                        alt=''
                    />
                </div>

                <div className={`${css.scroll} ${css.bymickleit} scroll`} style={{ backgroundColor: '#000000' }}>
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
                        <source src={'/studio/ByMickleit_video-kopi.mp4'} type='video/mp4' />
                    </video>
                </div>

                <div className={`${css.scroll} ${css.studio6} scroll`} style={{ backgroundColor: '#FDEFF9' }}>
                    <Image
                        src={Studio6}
                        layout="responsive"
                        className="fadeIn"
                        quality='100'
                        alt=''
                    />
                </div>

                <div className={`${css.scroll} ${css.studio7} scroll`} style={{ backgroundColor: '#ff5050' }}>
                    <Image
                        src={Studio7}
                        layout="responsive"
                        className="fadeIn"
                        quality='100'
                        alt=''
                    />
                </div>

                <div className={`${css.scroll} ${css.hund} scroll`} style={{ backgroundColor: '#212121' }}>
                    <Image
                        src={Studio8}
                        layout="responsive"
                        className="fadeIn"
                        quality='100'
                        alt=''
                    />
                </div>

                <div className={`${css.scroll} ${css.studio9} scroll`} style={{ backgroundColor: '#ffb893' }}>
                    <Image
                        src={Studio9}
                        layout="responsive"
                        className="fadeIn"
                        quality='100'
                        alt=''
                    />
                </div>

                <div className={`${css.scroll} ${css.studio10} scroll`} style={{ backgroundColor: '#ffcc00' }}>
                    <Image
                        src={Studio10}
                        layout="responsive"
                        className="fadeIn"
                        quality='100'
                        alt=''
                    />
                </div>

                <div className={`${css.scroll} ${css.studiovideo} scroll`} style={{ backgroundColor: '#000000' }}>
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
                        <source src={'/studio/IMG_2563 2.mp4'} type='video/mp4' />
                    </video>
                </div>

                <div className={`${css.scroll} ${css.studio11} scroll`} style={{ backgroundColor: '#ff6200' }}>
                    <Image
                        src={Studio11}
                        layout="responsive"
                        className="fadeIn"
                        quality='100'
                        alt=''
                    />
                </div>

                <div className={`${css.scroll} ${css.studio12} scroll`} style={{ backgroundColor: '#ff5797' }}>
                    <Image
                        src={Studio12}
                        layout="responsive"
                        className="fadeIn"
                        quality='100'
                        alt=''
                    />
                </div>

                <div className={`${css.scroll} ${css.studio13} scroll`} style={{ backgroundColor: '#ff9c38' }}>
                    <Image
                        src={Studio13}
                        layout="responsive"
                        className="fadeIn"
                        quality='100'
                        alt=''
                    />
                </div>

                <div className={`${css.scroll} ${css.studiovideo} scroll`} style={{ backgroundColor: '#000000' }}>
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
                        <source src={'/studio/IMG_4003.mp4'} type='video/mp4' />
                    </video>
                </div>

                <div className={`${css.scroll} ${css.studio14} scroll`} style={{ backgroundColor: '#FED2D2' }}>
                    <Image
                        src={Studio14}
                        layout="responsive"
                        className="fadeIn"
                        quality='100'
                        alt=''
                    />
                </div>

                <div className={`${css.scroll} ${css.studio15} scroll`} style={{ backgroundColor: '#672929' }}>
                    <Image
                        src={Studio15}
                        layout="responsive"
                        className="fadeIn"
                        quality='100'
                        alt=''
                    />
                </div>

                <div className={`${css.scroll} ${css.studio16} scroll`} style={{ backgroundColor: '#25c000' }}>
                    <Image
                        src={Studio16}
                        layout="responsive"
                        className="fadeIn"
                        quality='100'
                        alt=''
                    />
                </div>

                <div className={`${css.scroll} ${css.studio17} scroll`} style={{ backgroundColor: '#ffa21d' }}>
                    <Image
                        src={Studio17}
                        layout="responsive"
                        className="fadeIn"
                        quality='100'
                        alt=''
                    />
                </div>

                <div className={`${css.scroll} ${css.studio18} scroll`} style={{ backgroundColor: '#ff7e57' }}>
                    <Image
                        src={Studio18}
                        layout="responsive"
                        className="fadeIn"
                        quality='100'
                        alt=''
                    />
                </div>

                <div className={`${css.scroll} ${css.studiovideo} scroll`} style={{ backgroundColor: '#000000' }}>
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
                        <source src={'/studio/IMG_3976.mp4'} type='video/mp4' />
                    </video>
                </div>

                <div className={`${css.scroll} ${css.studio19} scroll`} style={{ backgroundColor: '#ff7e57' }}>
                    <Image
                        src={Studio19}
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
