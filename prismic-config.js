import Prismic from '@prismicio/client';
export const apiEndpoint = "https://stoj-gallery.prismic.io/api/v2";
export const accessToken = process.env.PRISMIC_API_TOKEN
export const Client = Prismic.client(apiEndpoint, { accessToken });
