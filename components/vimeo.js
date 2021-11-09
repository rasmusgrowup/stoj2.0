import Player from '@vimeo/player';
import React, { useEffect, Component } from 'react';
import css from '../styles/video.module.scss'

export default function Vimeo(props) {

  useEffect (() => {
    const player = new Player(`${props.id}`, {
      id: props.vimeoId,
      background: props.background,
      responsive: true
    });
  }, [])

  return(
    <>
      <div className={`${css.videoWrapper} vimeoScroll`} id="Vimeo" style={{ backgroundColor: `${props.bgColor}`, maxWidth: `${props.wrapperWidth}`, marginTop:  `${props.marginTop}` }}>
        <div className={`${css.vimeoContainer} vimeoFadeIn`}>
          <div className={css.vimeoVideo} id={props.id}></div>
        </div>
      </div>
    </>
  )
}
