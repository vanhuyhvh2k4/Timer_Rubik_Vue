import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import registerLayout from './config/RegisterLayout'
import "@/assets/style/global.css";

const app = createApp(App);

app.use(store);

app.use(router);

registerLayout(app);

app.mount("#app");