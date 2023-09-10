import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = { plugins: [react()], base: '/Portfolio', assetsInclude: ['**/*.gltf'] };

  if (command !== 'serve') {
    config.base = '/Portfolio/';
  }

  return config;
});
