import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/`
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      'app': path.resolve(__dirname, './src/app'),
      'shared': path.resolve(__dirname, './src/shared'),
      'pages': path.resolve(__dirname, './src/pages'),
      'store': path.resolve(__dirname, './src/store'),
      'routes': path.resolve(__dirname, './src/routes'),
      'components': path.resolve(__dirname, './src/components'),
    },
  },
  plugins: [react()],
});
