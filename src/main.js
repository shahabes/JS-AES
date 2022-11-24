import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "bootstrap/dist/css/bootstrap.min.css";
// import "@/assets/aes/aes.js";
import "bootstrap";
import './registerServiceWorker'

import APP_METHODS from "@/utility/appMethods"
import App from "./App.vue";
import BaseCard from "@/elements/BaseCard/baseCard.vue";
import BaseHr from "@/elements/BaseHr/TheHr.vue";
import Vue3PersianDatetimePicker from "vue3-persian-datetime-picker";
import { createApp } from "vue";
import router from "./router/index";
import VueCryptojs from 'vue-cryptojs';
// import * as CryptoJS from "@/assets/CryptoJs/crypto-js.min.js";

const app = createApp(App);

app.config.globalProperties.$utils = APP_METHODS;

app
  .component("base-card", BaseCard)
  .component("base-hr", BaseHr)
  .component("DatePicker", Vue3PersianDatetimePicker)
  .use(router, VueCryptojs)
  .mount("#app");
