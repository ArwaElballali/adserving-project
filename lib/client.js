import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
// sanity client and image url builder to fetch the images and display them in url 
export const client = sanityClient({
  projectId: 'vyp9mfn1',
  dataset: 'production',
  apiVersion: '2023-02-10',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});
// project id can be found by running npx sanity manage/ or sanity manage in terminal
// the token is in .env and its generated by running npx sanity manage in terminal then click on api token cthen create new token 
const builder = imageUrlBuilder(client);
// urlfor to handle images url 
export function urlFor (source){
  return builder.image(source)
} 