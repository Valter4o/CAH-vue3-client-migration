<template>
  <div class="main">
    <TheAuthNavbar />
    <router-view></router-view>
  </div>
</template>

<script>
import TheAuthNavbar from "./components/common/TheAuthNavbar";
export default {
  components: {
    TheAuthNavbar,
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
