import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "./plugins/pinia";
import vuetify from "./plugins/vuetify";
import axios from "./plugins/axios";
import VueAxios from "vue-axios";
// import Vue3EasyDataTable from "vue3-easy-data-table";
// import "vue3-easy-data-table/dist/style.css";

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(VueAxios, axios);
app.use(vuetify);
// app.component("EasyDataTable", Vue3EasyDataTable);
app.mount("#app");
