import { defineAsyncComponent } from "vue";

const registerLayout = (app) => {
    app.component("Default", defineAsyncComponent(() => import("@/layouts/DefaultLayout.vue")));
}

export default registerLayout;