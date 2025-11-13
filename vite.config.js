import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import vitePluginCritters from "vite-plugin-critters";

export default defineConfig({
  plugins: [
    react(),
    vitePluginCritters({
      preload: "media", // ou 'swap' (teste qual dá melhor pontuação)
      compress: true, // minifica CSS inline
    }),
  ],
  optimizeDeps: {
    include: ["primereact/dialog", "primereact/button"],
  },
});
