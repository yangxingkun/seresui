import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
// @ts-ignore
import DefineOptions from 'unplugin-vue-define-options/vite';
export default defineConfig({
  plugins: [
    // @ts-ignore
    vue(),
    VueSetupExtend(),
    //@ts-ignore
    DefineOptions()
  ]
});
