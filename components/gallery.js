import Prismic from '@prismicio/client';
import PrismicDOM from 'prismic-dom';
import Image from 'next/image'
import { Client } from '../prismic-config'

export async function getStaticProps () {

    var document = await Client().query(
        Prismic.Predicates.at("document.type", "image")
    );

    console.log(document);

    return {
        props: {}
        }
}

const GalleryImages = ({ document }) => {
    return (
        <>
            <div>Gallery page</div>
            <Image src={document.data.image.url} />
        </>
    )
}

export default GalleryImages
