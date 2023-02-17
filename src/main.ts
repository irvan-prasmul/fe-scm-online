import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "./plugins/pinia";
import vuetify from "./plugins/vuetify";
import axios from "./plugins/axios";
import VueAxios from "vue-axios";
import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
import VueLodash from "vue-lodash";

import "@/plugins/main.scss";

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(VueAxios, axios);
app.use(vuetify);
app.use(VueSidebarMenu);
app.component("EasyDataTable", Vue3EasyDataTable);
app.use(VueLodash, { name: "custom", lodash: { Map } });
app.mount("#app");
