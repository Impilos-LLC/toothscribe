import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const portToUse = parseInt(env.WEBSITES_PORT || env.PORT || '5173', 10);

  return {
    plugins: [react()],
    base: './',
    server: {
      // your dev server configs
    },
    preview: {
      port: portToUse,
      host: '0.0.0.0',
      allowedHosts: [
        'toothscribe-guf8gkfnc0hsc2hc.eastus2-01.azurewebsites.net',
        'upperline.impilos.com',
        'toothscribe.ai',
        '192.168.43.129',
      ],
    },
    build: {
      target: 'es2022',
    },
  };
});
