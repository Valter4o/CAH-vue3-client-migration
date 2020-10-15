import Vue from "vue";
import AuthApp from "./AuthApp.vue";
import UnauthApp from "./UnauthApp.vue";
import AuthRouter from "./router/AuthRouter";
import UnauthRouter from "./router/UnauthRouter";
import store from "./store";

Vue.config.productionTip = false;
const isAuth = false;
const router = isAuth ? AuthRouter : UnauthRouter;

new Vue({
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
