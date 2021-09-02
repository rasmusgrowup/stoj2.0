import Player from '@vimeo/player';
import React, { useEffect } from 'react';
import css from '../styles/index.module.scss'

export default function Vimeo() {

    useEffect (() => {
        const player = new Player('intro-video', {
            id: 519957973,
            background: true,
            responsive: true
        });
    }, [])

    return(
        <>
            <div className={`${css.scroll} scroll`} id="Vimeo">
                <div className={`${css.introVideo} fadeIn`} id="intro-video" ></div>
            </div>
        </>
    )
}
