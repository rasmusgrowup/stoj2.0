import Prismic from '@prismicio/client'
import { Client } from '../../prismic-configuration'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import css from '../../styles/galleri.module.scss'
import { gsap } from 'gsap';
import React, { useEffect, useState, useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Masonry from 'react-masonry-css'


export async function getStaticProps(context) {
  const document = await Client().query(
    Prismic.Predicates.at("document.type", "image"),  {
      orderings: '[document.first_publication_date desc]'
    }
  );

  return {
    props: { billeder: document },
  };
}

function Gallery({ children, billeder, backgroundHex }) {
  const titleRef = useRef(null);
  const titleAnim = gsap.utils.selector(titleRef);
  const billedeRef = useRef();
  const router = useRouter();
  gsap.registerPlugin(ScrollTrigger);

  useEffect (() => {
    gsap.fromTo('#galleyTitle', {
        yPercent: 100,
      },
      {
        y: 0,
        yPercent: 0,
        duration: 2,
        ease: 'Power3.easeInOut'
    });
    gsap.set('.fadeInGallery', {
      opacity: 0,
    })
    var fadeIn = gsap.utils.toArray('.fadeInGallery');
    fadeIn.forEach((fadeIn) => {
      gsap.to(fadeIn, {
      duration: 1,
      delay: .3,
      opacity: 1,
        scrollTrigger: {
          trigger: fadeIn,
          start: "top bottom",
          end: "top center",
          scrub: true
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }
  }, [router])

  const enter = () => {
    gsap.to(billedeRef.current, {
      opacity: 0,
      duration: .6,
    })
  }

  const breakpointColumnsObj = {
    default: 3,
    700: 2
  };

  return (
    <>
      <div className={css.galleriTitle}>
        <div className={css.titleInner} id='galleyTitle'>Galleri</div>
      </div>
      <div className={css.masonryWrapper}>
        <Masonry className='masonry' columnClassName="masonry_column" ref={billedeRef} breakpointCols={breakpointColumnsObj}>
          {billeder.results.map((billede) => (
            <div className={css.galleryItem} key={billede.id} onClick={enter}>
              <Link href={`/galleri/${billede.id}`}>
                <a>
                  <div className={css.galleryItemInner} style={{ backgroundColor: `${billede.data.hex}`}}>
                      <Image
                        src={billede.data.image.url}
                        width={billede.data.image.dimensions.width}
                        height={billede.data.image.dimensions.height}
                        alt={billede.data.image.alt}
                        layout='responsive'
                        className='fadeInGallery open-image' />
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </Masonry>
      </div>
    </>
  )
}

export default Gallery
