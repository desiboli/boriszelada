// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.boriszelada.com',

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Fraunces',
      cssVariable: '--ff-display',
      weights: ['300 900'],
      // Italic is used for the hero accent line.
      styles: ['normal', 'italic'],
      // Swedish å/ä/ö live in the `latin` subset, so `latin-ext` is dead weight.
      subsets: ['latin'],
      fallbacks: ['Georgia', 'Times New Roman', 'serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Afacad',
      cssVariable: '--ff-body',
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Helvetica Neue', 'Arial', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Caveat',
      cssVariable: '--ff-script',
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Segoe Script', 'cursive'],
    },
  ],
});
