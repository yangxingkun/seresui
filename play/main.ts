import { createApp } from "vue";
import App from "./app.vue";
import seres from "@seresui/components";
// import "../packages/seres_ui/es/style.css"
const app = createApp(App);
app.use(seres);
app.mount("#app");
