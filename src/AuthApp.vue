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

<style lang="scss" scoped></style>
