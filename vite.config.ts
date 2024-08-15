import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  base: "https://albertlll.github.io/mik/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },

  },

  define: {
    // "process.env": process.env,
    // // By default, Vite doesn't include shims for NodeJS/
    // // necessary for segment analytics lib to work
    "global": {},
  },
})
