import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig(() => {
  const config = { plugins: [react()], assetsInclude: ['**/*.gltf'] };

  return config;
});
