import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faAngleDown);

const app = createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
