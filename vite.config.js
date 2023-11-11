import { resolve } from 'path';

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        services: resolve(__dirname, 'services/index.html'),
        gallery: resolve(__dirname, 'gallery/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
      },
    },
  },
};
