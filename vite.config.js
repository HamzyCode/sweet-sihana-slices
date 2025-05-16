
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react({
      include: "**/*.{jsx,js}",
      jsxRuntime: "automatic"
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: ['.js', '.jsx']
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
        '.jsx': 'jsx',
      },
    },
  },
  // Skip TypeScript checking completely since we're using only JSX/JS files
  build: {
    sourcemap: true,
    // Completely skip TypeScript checking
    skipTypeCheck: true,
  },
  // Override TypeScript configuration
  // This will prevent Vite from using the tsconfig files
  typescript: {
    // Don't use any tsconfig file
    tsconfig: false
  }
}));
