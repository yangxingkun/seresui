import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import DefineOptions from "unplugin-vue-define-options/vite";
import { name, version } from './package.json'
import { resolve } from 'path'
import { copyFileSync } from 'fs'
export default defineConfig({
  build: {
    //打包后文件目录
    outDir: "seres_ui",
    //压缩
    // emptyOutDir:true,
    // minify: false,
    rollupOptions: {
      //忽略打包vue文件 第三方npm包都设置成外部依赖就行了，我们只打包组件库本身
      external: ["vue", /\.(less|scss)/,"@seresui/utils"],
      // external: ["vue", /\.less/,"@seres/utils"],
      input: ["index.ts"],
      output: [
        {
          // 打包格式
          format: "es",
          //打包后文件名
          entryFileNames: "[name].mjs",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "../seres_ui/es",
        },
        {
          //打包格式
          format: "cjs",
          //打包后文件名
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "../seres_ui/lib",
        },
      ],
    },
    lib: {
      entry: "./index.ts",
    },
  },
  plugins: [
    vue(),
    //@ts-ignore
    dts({
      entryRoot: "./src",
      outDir: ["../seres_ui/es/src", "../seres_ui/lib/src"],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsconfigPath: "../../tsconfig.json",
       /**
         * 构建后回调钩子
         */
        afterBuild: (): void => {
          move()
        }
    }),
    DefineOptions(),
    {
      name: "style",
      generateBundle(config, bundle) {
        // console.log(config, bundle)
        //这里可以获取打包后的文件目录以及代码code
        const keys = Object.keys(bundle);

        for (const key of keys) {
          const bundler: any = bundle[key as any];
          //rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件

          this.emitFile({
            type: "asset",
            fileName: key, //文件名名不变
            source: bundler.code.replace(/\.(less|scss)/g, ".css"),
            // source: bundler.code.replace(/\.less/g, ".css")
          });
        }
      },
    },
  ],
  // test: {
  //     environment: "happy-dom"
  // }
});


const move = (): void => {
  // const files = [
  //   {
  //     input: './README.md',
  //     outDir: 'dist-icon/README.md'
  //   },
  //   {
  //     input: './package.json',
  //     outDir: 'dist-icon/package.json'
  //   },
  //   { input: './packages/fighting-icon/LICENSE', outDir: 'dist-icon/LICENSE' }
  // ] as const

  // files.forEach((item): void => {
  //   copyFileSync(item.input, item.outDir)
  // })
  console.warn('\n' + `${name} ${version} 版本打包成功 🎉🎉🎉` + '\n')
}