<template>
  <div class="main">
    <TheUnauthNavbar />
    <router-view></router-view>
  </div>
</template>

<script>
import TheUnauthNavbar from "./components/common/TheUnauthNavbar";
export default {
  components: {
    TheUnauthNavbar,
  },
};
</script>

<style lang="scss" scoped></style>
