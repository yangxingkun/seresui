import { createApp } from 'vue';
import type { Plugin } from 'vue';
import App from './app.vue';
import seres from '@seresui/pura';
// import "../packages/seres_ui/es/style.css"
const app = createApp(App);
app.use(seres as Plugin<[]>);
app.mount('#app');
