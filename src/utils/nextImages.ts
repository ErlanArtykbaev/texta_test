import { StaticImageData } from 'next/image';

const getStaticUrl = (image?: StaticImageData | string): string => {
  if (!image) return '';
  if (typeof image === 'string') return image;
  return image.src;
};

export default getStaticUrl;
