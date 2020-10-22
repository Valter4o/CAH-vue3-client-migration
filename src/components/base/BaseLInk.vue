<template>
  <button @click="redrectTo" class="link-btn">{{ value }}</button>
</template>

<script>
export default {
  props: {
    value: { String, required: true },
    link: { String, required: true },
  },
  methods: {
    redrectTo() {
      this.$router.push(this.link);
    },
  },
};
</script>

<style lang="scss" scoped>
.link-btn {
  color: $color-secondary;
  background: none;
  border: 0;
  box-sizing: border-box;
  margin: 1em;
  padding: 1em 2em;
  font-size: inherit;
  font-weight: 700;
  position: relative;
  vertical-align: middle;

  &::before,
  &::after {
    box-sizing: inherit;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
  }
  transition: color 0.25s;
  &::before,
  &::after {
    border: 2px solid transparent;
    border-radius: 7px;
    width: 0;
    height: 0;
  }

  &::before {
    top: 0;
    left: 0;
  }
  &::after {
    bottom: 0;
    right: 0;
  }

  &:hover {
    color: $color-secondary;
  }
  &:focus {
    outline: none;
  }
  &:hover::before,
  &:hover::after {
    width: 100%;
    height: 100%;
  }

  &:hover::before {
    border-top-color: $color-secondary; // Make borders visible
    border-right-color: $color-secondary;
    transition: width 0.25s ease-out, height 0.25s ease-out 0.25s; // And then height
  }

  &:hover::after {
    border-bottom-color: $color-secondary; // Make borders visible
    border-left-color: $color-secondary;
    transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s,
      height 0.25s ease-out 0.75s; // And finally height
  }
}
</style>