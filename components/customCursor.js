import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

const CustomCursor = () => {
  const Router = useRouter()
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [openImage, setOpenImage] = useState(false);
  const [closeImage, setCloseImage] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', mMove);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', mMove);
    };

    const mMove = (el) => {
      setPosition({ x: el.clientX, y: el.clientY });
    };

    const addLinkEvents = () => {
      document.querySelectorAll('.open-image').forEach((el) => {
        el.addEventListener('mouseover', () => setOpenImage(true));
        el.addEventListener('mouseout', () => setOpenImage(false));
      });
      document.querySelectorAll('.close-image').forEach((el) => {
        el.addEventListener('mouseover', () => setCloseImage(true));
        el.addEventListener('mouseout', () => setCloseImage(false));
      });
    };

    addEventListeners();
    addLinkEvents();
    return () => removeEventListeners();
  });

  return (
    <div className={
        'cursor ' +
        (openImage ? 'openImage ' : '') +
        (closeImage ? 'closeImage ' : '')
      }
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;
