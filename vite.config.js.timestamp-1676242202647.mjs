// vite.config.js
import { defineConfig } from "file:///var/www/fougeras.me/best-award-summary/node_modules/vite/dist/node/index.js";
import path from "path";
import react from "file:///var/www/fougeras.me/best-award-summary/node_modules/@vitejs/plugin-react/dist/index.mjs";
var __vite_injected_original_dirname = "/var/www/fougeras.me/best-award-summary";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__vite_injected_original_dirname, "node_modules/bootstrap"),
      "~root": path.resolve(__vite_injected_original_dirname, "."),
      "~src": path.resolve(__vite_injected_original_dirname, "src"),
      "~utils": path.resolve(__vite_injected_original_dirname, "src/utils"),
      "~style": path.resolve(__vite_injected_original_dirname, "src/style"),
      "~components": path.resolve(__vite_injected_original_dirname, "src/components"),
      "~routes": path.resolve(__vite_injected_original_dirname, "src/routes"),
      "~hooks": path.resolve(__vite_injected_original_dirname, "src/hooks")
    }
  },
  server: {
    port: 8030,
    strictPort: true,
    hmr: {
      clientPort: 443,
      port: 8030
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__vite_injected_original_dirname, "index.html"),
        fourofour: path.resolve(__vite_injected_original_dirname, "404.html")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvdmFyL3d3dy9mb3VnZXJhcy5tZS9iZXN0LWF3YXJkLXN1bW1hcnlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi92YXIvd3d3L2ZvdWdlcmFzLm1lL2Jlc3QtYXdhcmQtc3VtbWFyeS92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vdmFyL3d3dy9mb3VnZXJhcy5tZS9iZXN0LWF3YXJkLXN1bW1hcnkvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnfmJvb3RzdHJhcCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdub2RlX21vZHVsZXMvYm9vdHN0cmFwJyksXG4gICAgICAnfnJvb3QnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLicpLFxuICAgICAgJ35zcmMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyksXG4gICAgICAnfnV0aWxzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy91dGlscycpLFxuICAgICAgJ35zdHlsZSc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvc3R5bGUnKSxcbiAgICAgICd+Y29tcG9uZW50cyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvY29tcG9uZW50cycpLFxuICAgICAgJ35yb3V0ZXMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3JvdXRlcycpLFxuICAgICAgJ35ob29rcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaG9va3MnKSxcbiAgICB9XG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDgwMzAsXG4gICAgc3RyaWN0UG9ydDogdHJ1ZSxcbiAgICBobXI6IHtcbiAgICAgIGNsaWVudFBvcnQ6IDQ0MyxcbiAgICAgIHBvcnQ6IDgwMzBcbiAgICB9XG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgbWFpbjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2luZGV4Lmh0bWwnKSxcbiAgICAgICAgZm91cm9mb3VyOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnNDA0Lmh0bWwnKSxcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1UyxTQUFTLG9CQUFvQjtBQUNwVSxPQUFPLFVBQVU7QUFDakIsT0FBTyxXQUFXO0FBRmxCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxjQUFjLEtBQUssUUFBUSxrQ0FBVyx3QkFBd0I7QUFBQSxNQUM5RCxTQUFTLEtBQUssUUFBUSxrQ0FBVyxHQUFHO0FBQUEsTUFDcEMsUUFBUSxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLE1BQ3JDLFVBQVUsS0FBSyxRQUFRLGtDQUFXLFdBQVc7QUFBQSxNQUM3QyxVQUFVLEtBQUssUUFBUSxrQ0FBVyxXQUFXO0FBQUEsTUFDN0MsZUFBZSxLQUFLLFFBQVEsa0NBQVcsZ0JBQWdCO0FBQUEsTUFDdkQsV0FBVyxLQUFLLFFBQVEsa0NBQVcsWUFBWTtBQUFBLE1BQy9DLFVBQVUsS0FBSyxRQUFRLGtDQUFXLFdBQVc7QUFBQSxJQUMvQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQSxJQUNaLEtBQUs7QUFBQSxNQUNILFlBQVk7QUFBQSxNQUNaLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsT0FBTztBQUFBLFFBQ0wsTUFBTSxLQUFLLFFBQVEsa0NBQVcsWUFBWTtBQUFBLFFBQzFDLFdBQVcsS0FBSyxRQUFRLGtDQUFXLFVBQVU7QUFBQSxNQUMvQztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
