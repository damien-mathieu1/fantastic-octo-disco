import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { setupI18n } from "./i18n";

library.add(faAngleDown);

export const i18n = setupI18n();

const app = createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(i18n)
  .mount("#app");