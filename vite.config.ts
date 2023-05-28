import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/features/index.ts',
      name: 'ub-lc-component-library',
    },
  },
  plugins: [react()],
});
