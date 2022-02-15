import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

const Cursor = () => {
  const Router = useRouter()
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [openImage, setOpenImage] = useState(false);
  const [closeImage, setCloseImage] = useState(false);
  const [previousImage, setPreviousImage] = useState(false);
  const [nextImage, setNextImage] = useState(false);
  const [linkHover, setLinkHover] = useState(false);
  const [atagHover, setAtagHover] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', mMove);
      document.addEventListener('mouseenter', mEnter);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', mMove);
      document.removeEventListener('mouseenter', mEnter);
      document.removeEventListener('mouseleave', mLeave);
    };

    const mMove = (el) => {
      setPosition({ x: el.clientX, y: el.clientY });
    };

    const mLeave = () => {
      setHidden(true);
    };

    const mEnter = () => {
      setHidden(false);
    };

    const addLinkEvents = () => {
      document.querySelectorAll('li').forEach((el) => {
        el.addEventListener('mouseover', () => setAtagHover(true));
        el.addEventListener('mouseout', () => setAtagHover(false));
      });
      document.querySelectorAll('.open-image').forEach((el) => {
        el.addEventListener('mouseover', () => setOpenImage(true));
        el.addEventListener('mouseout', () => setOpenImage(false));
      });
      document.querySelectorAll('.close-image').forEach((el) => {
        el.addEventListener('mouseover', () => setCloseImage(true));
        el.addEventListener('mouseout', () => setCloseImage(false));
      });
      document.querySelectorAll('.next-image').forEach((el) => {
        el.addEventListener('mouseover', () => setNextImage(true));
        el.addEventListener('mouseout', () => setNextImage(false));
      });
      document.querySelectorAll('.previous-image').forEach((el) => {
        el.addEventListener('mouseover', () => setPreviousImage(true));
        el.addEventListener('mouseout', () => setPreviousImage(false));
      });
      document.querySelectorAll('button').forEach((el) => {
        el.addEventListener('mouseover', () => setLinkHover(true));
        el.addEventListener('mouseout', () => setLinkHover(false));
      });
    };

    addEventListeners();
    addLinkEvents();
    return () => removeEventListeners();
  });

  return (
    <div className={
        'cursor ' +
        (hidden ? 'c--hidden ' : '') +
        (openImage ? 'openImage ' : '') +
        (closeImage ? 'closeImage ' : '') +
        (nextImage ? 'nextImage ' : '') +
        (previousImage ? 'previousImage ' : '') +
        (linkHover ? 'linkHover ' : '') +
        (atagHover ? 'a--c--hover ' : '')
      }
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default Cursor;
