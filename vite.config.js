// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     include: ['primereact/dialog', 'primereact/button'],
//   },
// })

// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginCritters from "vite-plugin-critters";

export default defineConfig({
  plugins: [
    react(),
    vitePluginCritters({
      preload: "media", // ou 'swap'
    }),
  ],
});
