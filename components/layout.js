import Navbar from './navbar'
import Meta from './meta'
import Footer from './footer'

import css from '../styles/main.module.scss'
import CustomCursor from '../components/cursor'
import { isMobile, CustomView } from 'react-device-detect'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Layout({ children }) {
  const router = useRouter();

  useEffect (() => {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      window.sessionStorage.setItem("firstLoadDone", 1)
    } else {}
  }, [])

  return (
    <>
      <Meta />
      <Navbar />
      <CustomView condition={!isMobile}>
        <CustomCursor />
      </CustomView>
      <main className={css.mainLayout}>
        {children}
      </main>
      <Footer />
    </>
  )
}
