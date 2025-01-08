import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: "./src",
      outDir: "./dist", // Ensure declaration files go to the same directory
      insertTypesEntry: true, // Adds the types entry automatically
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts", // Path to your entry file
      name: "BSDatePicker",
      fileName: (format) => `bs-date-picker.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "@radix-ui/react-popover"], // Mark peer dependencies as external
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
