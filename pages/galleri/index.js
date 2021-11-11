import Prismic from '@prismicio/client'
import { Client } from '../../prismic-configuration'
import Image from 'next/image'
import Link from 'next/link'
import css from '../../styles/galleri.module.scss'
import { gsap } from 'gsap';
import React, { useEffect, useState, useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


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

  const billedeRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect (() => {
    gsap.set('.fadeIn', {
        opacity: 0,
    })
    var fadeIn = gsap.utils.toArray('.fadeIn');
    fadeIn.forEach((fadeIn) => {
      gsap.to(fadeIn, {
      duration: 1,
      delay: .3,
      opacity: 1,
        scrollTrigger: {
          trigger: fadeIn,
          start: "top bottom",
          end: "top center",
        }
      });
    });
  }, [])

  const enter = () => {
    gsap.to(billedeRef.current, {
      opacity: 0,
      duration: .6,
    })
  }

  console.log(billeder)

  return (
    <>
      <div className={css.galleriTitle}>Galleri</div>
        <div className={css.galleryWrapper} ref={billedeRef}>
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
                      className='fadeIn open-image' />
                </div>
                </a>
              </Link>
            </div>
          ))}
      </div>
    </>
  )
}

export default Gallery
