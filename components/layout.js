import Navbar from './navbar'
import Meta from './meta'
import Footer from './footer'
import css from '../styles/main.module.scss'


export default function Layout({ children }) {
  return (
    <>
        <Meta />
        <Navbar />
        <main className={css.mainLayout}>{children}</main>
        <Footer />
    </>
  )
}
