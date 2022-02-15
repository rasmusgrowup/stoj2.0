import Image from "next/image"
import Link from 'next/link'
import React, { useState, useEffect } from "react";
import Prismic from '@prismicio/client'
import { Client } from '../../prismic-configuration'

import { gsap } from 'gsap';
import { useRouter } from 'next/router'
import css from '../../styles/galleri.module.scss'

import Next from '../../public/next.png'
import Previous from '../../public/previous.png'

export async function getStaticPaths() {
  const billeder = await Client().query(Prismic.Predicates.at("document.type", "image"),);

  const paths = billeder.results.map((billede) => ({
    params: { id: billede.id },
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const data = await Client().query(Prismic.Predicates.at("document.id", `${id}`));
  const prevpost = await Client().query(Prismic.Predicates.at('document.type', 'image'), {
    pageSize: 1,
    after : `${id}`,
    orderings: '[document.first_publication_date]'
  });
  const nextpost = await Client().query(Prismic.Predicates.at('document.type', 'image'), {
    pageSize: 1,
    after : `${id}`,
    orderings: '[document.first_publication_date desc]'
  });
  const previousImage = prevpost.results[0];
  const nextImage = nextpost.results[0];
  const document = data.results[0];

  return {
    props: {
      billede: document,
      ...(previousImage === undefined
        ? {}
        : {
          previousImage: previousImage,
        }
      ),
      ...(nextImage === undefined
        ? {}
        : {
          nextImage: nextImage,
        }
      ),
    },
  };
}

function Billeder({ billede, previousImage, nextImage }) {
  const router = useRouter()

  useEffect (() => {
    gsap.set('.animSingleImage', {
      clipPath: 'inset(100% 0 0% 0)',
    })

    gsap.to('.animSingleImage', {
    duration: 1,
    delay: 0.2,
    clipPath: 'inset(0% 0 0% 0)',
    ease: 'Power3.easeOut',
    })
  }, [router])

  const exit = ({ currentTarget }) => {
    gsap.to('.animSingleImage', {
    duration: 1,
    clipPath: 'inset(0% 0 100% 0)',
    ease: 'Power3.easeOut',
    })
    setTimeout(function() {
      router.push('/galleri');
    }, 1000)
  }

  return (
    <>
      <div className={css.singleImageWrapper} onClick={exit}>
        <h1 className={css.singleImageTitle}>{billede.data.title}</h1>
        <div className={`${css.singleImageInner} animSingleImage close-image`}>
          <Image
            src={billede.data.image.url}
            alt={billede.data.image.alt}
            layout='fill'
            objectFit='contain'
            className={css.image}
            quality='100'
            />
        </div>
      </div>
      {
        previousImage != undefined &&
        <div className={`${css.prevImage} previous-image`}>
          <Link href={`/galleri/${previousImage.id}`}><a>
            <div className={css.previousWrapper}><Image src={Previous} quality='100'/></div>
          </a></Link>
        </div>
      }
      {
        nextImage != undefined &&
        <div className={`${css.nextImage} next-image`}>
          <Link href={`/galleri/${nextImage.id}`}><a>
            <div className={css.nextWrapper}><Image src={Next} quality='100'/></div>
          </a></Link>
        </div>
      }
    </>
  )
}

export default Billeder
