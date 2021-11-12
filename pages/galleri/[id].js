import Image from "next/image"
import Link from 'next/link'
import React, { useState, useEffect } from "react";
import Prismic from '@prismicio/client'
import { Client } from '../../prismic-configuration'

import { gsap } from 'gsap';
import { useRouter } from 'next/router'
import css from '../../styles/galleri.module.scss'

export async function getStaticPaths() {
  const billeder = await Client().query(Prismic.Predicates.at("document.type", "image"),);

  const paths = billeder.results.map((billede) => ({
    params: { id: billede.id },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const data = await Client().query(Prismic.Predicates.at("document.id", `${id}`));
  const document = data.results[0];

  return {
    props: { billede: document },
  };
}

function Billeder({ billede }) {
  const router = useRouter()

  useEffect (() => {
    gsap.set('.animSingleImage', {
      clipPath: 'inset(100% 0 0% 0)',
    })

    gsap.to('.animSingleImage', {
    duration: 1,
    delay: 1,
    clipPath: 'inset(0% 0 0% 0)',
    ease: 'Power3.easeOut',
    })
  }, [])

  const exit = ({ currentTarget }) => {
    gsap.to('.animSingleImage', {
    duration: 1,
    clipPath: 'inset(0% 0 100% 0)',
    ease: 'Power3.easeOut',
    })
    setTimeout(function() {
      router.back()
    }, 1000)
  }

  console.log(billede)

  return (
    <>
      <div className={css.singleImageWrapper} onClick={exit}>
        <h1 className={css.singleImageTitle}>{billede.data.title}</h1>
          <div className={`${css.singleImageInner} animSingleImage close-image`}>
            <Image
              src={billede.data.image.url}
              alt={billede.data.image.alt}
              layout='fill'
              objectFit='cover'
              className={css.image}
              quality='100'
              />
          </div>
      </div>
    </>
  )
}

export default Billeder
