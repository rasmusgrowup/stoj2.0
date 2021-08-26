import Prismic from '@prismicio/client';

export const apiEndpoint = "https://stoj-gallery.cdn.prismic.io/api/v2";
export const accessToken = "MC5ZU1luVUJBQUFCOEFmTm9O.C--_vXTvv70_Ve-_vXbvv71k77-977-977-9Ye-_vXfvv71e77-9Ze-_vXh_XypcTkFZ77-977-977-9";

// creating a prismic client  object

export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};

  return {
    ...reqOption,
    ...accessTokenOption,
  };
};
