import { defineConfig } from 'vite'

export default defineConfig({
  // This ensures assets are loaded with relative paths, 
  // which is important for GitHub Pages (e.g., username.github.io/portfolio/)
  base: './',
})
