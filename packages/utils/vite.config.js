import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
export default defineConfig({
  build: {
    //压缩
    minify: false,
    emptyOutDir:true,
    rollupOptions: {
      input: ['index.ts'],
      output: [
        {
          format: 'es',
          //不用打包成.es.js,这里我们想把它打包成.mjs
          entryFileNames: '[name].mjs',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports:"named",
          //配置打包根目录
          dir: resolve(__dirname, './dist/es')
        },
        {
          format: 'cjs',
          //不用打包成.mjs
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports:"named",
          //配置打包根目录
          dir: resolve(__dirname, './dist/lib')
        }
      ]
    },
    lib: {
      entry: './index.ts',
      name: 'seresutils'
    }
  },

  plugins: [
    dts({
      entryRoot:"./index.ts",
      outDir: [
        resolve(__dirname, './dist/es'),
        resolve(__dirname, './dist/lib')
      ],
      tsconfigPath: './tsconfig.json'
    })
  ]
});
