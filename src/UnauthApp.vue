<template>
  <v-app>
    <div class="main">
      <TheUnauthNavbar />
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
import TheUnauthNavbar from "./components/common/TheUnauthNavbar";
export default {
  components: {
    TheUnauthNavbar,
  },
};
</script>

<style lang="scss" scoped>
.main {
  background: $color-accent;
  width: 100%;
  height: 100%;
  color: $color-primary;
  font-family: "Oswald";
  font-size: $font-size-root;
}
</style>
