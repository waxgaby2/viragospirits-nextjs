import { Playfair_Display, Inter } from 'next/font/google';
import { Libre_Bodoni, EB_Garamond, Work_Sans } from 'next/font/google';
import { Oswald } from 'next/font/google';
export const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const inter = Inter({
  subsets: ['latin'],
});

export const bodoni = Libre_Bodoni({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const garamond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500'],
});