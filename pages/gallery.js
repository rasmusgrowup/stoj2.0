import Prismic from '@prismicio/client'
import { Client } from '../prismic-configuration'
import Image from 'next/image'
import css from '../styles/galleri.module.scss'
import { gsap } from 'gsap';
import React, { useRef, useState, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function Gallery({ document, backgroundHex }) {

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
    console.log(document)
    return (
        <>
            <div className={css.galleriTitle}>Galleri</div>
            <div className={css.galleryWrapper}>
                {document.results.map((images) => (
                    <div className={css.galleryItem} key={images.id}>
                        <div className={css.galleryItemInner} style={{ backgroundColor: `${images.data.hex}`}}>
                            <Image
                                src={images.data.image.url}
                                width={images.data.image.dimensions.width}
                                height={images.data.image.dimensions.height}
                                alt={images.data.image.alt}
                                layout="responsive"
                                className={`fadeIn`} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Gallery

export async function getStaticProps(context) {
    const document = await Client().query(
        Prismic.Predicates.at("document.type", "image"),  {
            orderings: '[document.first_publication_date desc]'
        }
    );

    return {
        props: { document },
    };
}
