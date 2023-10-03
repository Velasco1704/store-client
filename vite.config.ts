import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@api": path.resolve(__dirname, "./src/api/"),
      "@app": path.resolve(__dirname, "./src/app/"),
      "@assets": path.resolve(__dirname, "./src/assets/"),
      "@components": path.resolve(__dirname, "./src/components/"),
      "@features": path.resolve(__dirname, "./src/features/"),
      "@interface": path.resolve(__dirname, "./src/interface/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@styles": path.resolve(__dirname, "./src/styles/"),
    },
  },
  plugins: [react()],
});
