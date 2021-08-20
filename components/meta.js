import Head from 'next/head'

function Meta({title, keywords, description}) {
    return (
        <Head>
            <link rel="icon" type="image/png" href="/favicon.ico" />
            <meta name="theme-color" content="#ffffff" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="og:title" content={title} />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'STÖJ | Kommerciel fotografering og videoproduktion',
    keywords: 'Kommerciel, foto, video, fotografering, videoproduktion, pack-shots, professionel, odense, havn, Stöj, uddannede fotografer, uddannet fotograf',
    description: 'Vores hjemmeside og SoMe løsninger skræddersys til jeres virksomheds behov, og skaber derved de bedste forudsætninger for at øge kendskaben af jeres brand, nå ud til nye kunder og sælge flere varer / ydelser.'
}

export default Meta
