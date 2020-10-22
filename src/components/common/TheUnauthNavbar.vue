<template>
  <div class="nav">
    <div class="left-links">
      <BaseLink link="/solo" value="Solo" />
    </div>
    <img class="nav__logo" src="@/assets/images/playing-cards.svg" v-on:click="redirectTo" />
    <div class="right-links">
      <BaseLink link="/login" value="Login" />
      <BaseLink link="/register" value="Register" />
    </div>
  </div>
</template>

<script>
import BaseLink from "../base/BaseLInk";
export default {
  components: { BaseLink },
  data: () => {
    return {
      isActive: false,
    };
  },
  methods: {
    redirectTo() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  background-color: $color-accent;
  border-bottom: solid 2px $color-secondary;
  width: 100%;
  max-height: 90px;
  display: flex;
}
.left-links {
  float: left;
}
.right-links {
  float: right;
}
.nav__logo {
  width: 69px;
  margin: 0 auto;
  cursor: pointer;
  filter: $color-secondary-filter
}
</style>