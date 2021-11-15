import Navbar from './navbar'
import Meta from './meta'
import Footer from './footer'

import css from '../styles/main.module.scss'
import CustomCursor from '../components/cursor'
import { isMobile, CustomView } from 'react-device-detect'

export default function Layout({ children }) {
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
