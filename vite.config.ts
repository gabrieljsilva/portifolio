import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const APP_HOST = "0.0.0.0";
const APP_PORT = 3000;

export default defineConfig({
  plugins: [react()],
  server: {
    port: APP_PORT,
    host: APP_HOST,
    hmr: {
      port: APP_PORT,
      host: APP_HOST,
    },
  },
});
