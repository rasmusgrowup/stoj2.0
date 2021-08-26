import Layout from '../components/layout'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import '../styles/scroll.css'

export default function MyApp({ Component, pageProps }) {
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url, { shallow }) => {
          console.log(
            `App is changing to ${url} ${
              shallow ? 'with' : 'without'
            } shallow routing`
          )
        ScrollTrigger.refresh(true)
        }

        router.events.on('routeChangeStart', handleRouteChange)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method:
        return () => {
          router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [])

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
