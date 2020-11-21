<template>
  <div class="wrapper">
    <div v-if="loading">
      <BaseSpinner></BaseSpinner>
    </div>
    <div v-else>
      <div class="question">
        <Card :text="question" type="red"></Card>
      </div>
      <div class="answers">
        <div class="answers__row">
          <Card
            v-for="card in firstRow"
            :key="firstRow.indexOf(card)"
            :text="card.text.trim()"
            type="blue"
            @click="cardClicked"
          ></Card>
        </div>
        <div class="answers__row">
          <Card
            v-for="card in secondRow"
            :key="secondRow.indexOf(card)"
            :text="card.text.trim()"
            type="blue"
            @click="cardClicked"
          ></Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/dummy/Card";
import BaseSpinner from "@/components/base/BaseSpinner";
import { mapActions } from "vuex";

export default {
  data: () => {
    return {
      deckId: "5fa4226ec85f0537b2786433",
      question: "",
      firstRow: [],
      secondRow: [],
      loading: true,
    };
  },
  components: {
    Card,
    BaseSpinner,
  },
  created() {
    this.fetchRound(this.deckId);
  },
  methods: {
    cardClicked() {
      this.loading = true;
      this.fetchRound(this.deckId);
    },

    fetchRound(deckId) {
      this.fetchSoloRound({ deckId }).then((data) => {
        this.loading = false;
        this.question = data[0][0].text.trim();
        this.firstRow = data[1];
        this.secondRow = data[2];
      });
    },
    ...mapActions("cards", ["fetchSoloRound"]),
  },
};
</script>

<style lang="scss" scoped>
.question {
  padding-top: 2rem;
  margin: 0 auto;
  width: fit-content;
  margin-bottom: 2rem;
}

.answers {
  width: 100%;
  &__row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;

    margin-bottom: 2rem;
    height: 50%;
  }
}
</style>
