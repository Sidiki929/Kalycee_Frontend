import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const API_URL = env.VITE_API_URL || 'kalycee'; // fallback to default if not defined
  const PORT = env.VITE_PORT || '3000';

  return {
    server: {
      open: true,
      port: PORT
    },
    define: {
      global: 'window'
    },
    resolve: {
      alias: [
        {
          find: /^~(.+)/,
          replacement: path.join(process.cwd(), 'node_modules/$1')
        },
        {
          find: /^src(.+)/,
          replacement: path.join(process.cwd(), 'src/$1')
        }
      ]
    },
    preview: {
      open: true,
      port: PORT
    },
    base: API_URL,
    plugins: [react(), jsconfigPaths()]
  };
});
