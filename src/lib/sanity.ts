import { sanityClient } from 'sanity:client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

export function optimizedImg(source: any, width = 900, height?: number) {
  if (!source) return '';
  let img = builder.image(source).width(width).auto('format').quality(82);
  if (height) {
    img = img.height(height).fit('crop');
  }
  return img.url();
}