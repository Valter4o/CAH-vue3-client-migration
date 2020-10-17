import Vue from "vue";
import AuthApp from "./AuthApp.vue";
import UnauthApp from "./UnauthApp.vue";
import AuthRouter from "./router/AuthRouter";
import UnauthRouter from "./router/UnauthRouter";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
const isAuth = false;
const router = isAuth ? AuthRouter : UnauthRouter;

new Vue({
  vuetify,
  router,
  store,
  render: (h) => {
    if (isAuth) {
      return h(AuthApp);
    } else {
      return h(UnauthApp);
    }
  },
}).$mount("#app");
