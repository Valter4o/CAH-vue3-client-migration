import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

const opts = {
  icons: {
    iconfont: 'md',
  },
  theme: {
    themes: {
      light: {
        primary: "#66FCF1",
        secondary: "#C3073F",
        accent: "#000000",
        error: "#c92634",
      },
    },
  },
};
export default new Vuetify(opts);
