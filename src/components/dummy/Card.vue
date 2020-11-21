<template>
  <div class="card" v-bind:class="typeClass" @click="emitClick">
    <div class="card__text">
      <span>{{ text }} </span>
    </div>
    <img
      src="@/assets/images/logo.svg"
      alt="Cards Against Humanity"
      class="card__logo"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    typeClass() {
      return this.type === "blue" ? "card--blue" : "card--red";
    },
  },
  methods: {
    emitClick() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  max-height: 25rem;
  min-width: 20rem;
  max-width: 20rem;

  padding: 15px;

  border-radius: 5%;
  font-size: 16px;
  font-weight: 600;
  font-size: 16px;
  background-color: black;

  cursor: pointer;

  &:hover {
    transform: scale(1.3);
  }

  &__text {
    min-height: 18rem;
    max-height: 20rem;
  }

  &__logo {
    max-height: 30px;
  }

  &--blue {
    border: solid 2px $color-secondary;
    color: $color-secondary;
    .card__logo {
      filter: $color-secondary-filter;
    }
  }

  &--red {
    border: solid 2px $color-primary;
    color: $color-primary;
    .card__logo {
      filter: $color-primary-filter;
    }
  }
}
</style>
