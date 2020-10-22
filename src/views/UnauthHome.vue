<template>
  <div>
    <section id="intro" class="intro">
      <div class="wrapper">
        <figure class="intro__logo">
          <img src="@/assets/images/playing-cards.svg" />
        </figure>
        <h1 class="intro__title mb-3">Cards Against Humanity</h1>
        <p class="intro__animated-text">Dumb animated text</p>
      </div>
    </section>
    <section id="about" class="about">
      <div class="wrapper">
        <div class="about__text-section">
          <h2 class="about__title">
            What is this Cards against humanity thing?
          </h2>
          <p class="about__paragraph">
            Glad you asked friend. First of all Cards Against Humanity (CAH) is
            an easy to learn *but hard to stop playing* game that brings joy by
            not really carying about political correctnes, moral or humanity.
            Second - this site is a place where you and your friends can enjoy
            this blyatiful game and even create your own decks and rules *okay
            you can't because we cannot implement that* but we know for sure
            that you are going to have fun *and if you don't that means you are
            not funny* *...or you are a Karen*
          </p>
        </div>
      </div>
    </section>
    <section id="dumb-counter" class="dumb-counters">
      <div class="wrapper">
        <div class="counters-wrapper">
          <h2 class="dumb-counters__title-text">
            If you don't believe me believe the numbers!
          </h2>
          <div id="counter-trigger"></div>
          <div class="dumb-counters__container">
            <div class="counter counter1">
              <h3 class="counter__title">
                Counter1
              </h3>
              <number
                ref="counter1"
                :from="0"
                animationPaused
                :to="numberTo1"
                :duration="2"
                easing="Circ.easeOut"
              />
            </div>
            <div class="counter counter2">
              <h3 class="counter__title">
                Counter2
              </h3>
              <number
                ref="counter2"
                :from="0"
                animationPaused
                :to="numberTo2"
                :duration="2"
                easing="Circ.easeOut"
              />
            </div>
            <div class="counter counter3">
              <h3 class="counter__title">
                Counter3
              </h3>
              <number
                ref="counter3"
                :from="0"
                animationPaused
                :to="numberTo3"
                :duration="2"
                easing="Circ.easeOut"
              />
            </div>
            <div class="counter counter4">
              <h3 class="counter__title">
                Counter4
              </h3>
              <number
                ref="counter4"
                :from="0"
                animationPaused
                :to="numberTo4"
                :duration="2"
                easing="Circ.easeOut"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="features" class="features">
      <div class="wrapper">
        <h2 class="features__title">
          Enought talking let's cut to the real deal. So without further ado
          here are your options to enjoy this lovely game
        </h2>
        <div class="features__container">
          <div class="feature feature1">
            <h3 class="feature__title">Non Registered Player</h3>
            <p class="feature__paragraph">
              As non registered player you can only play the solo mode. It is a
              good way to get idea of the game and of course fall in love with
              her.
            </p>
          </div>
          <div class="feature feature2">
            <h3 class="feature__title">Registered Player</h3>
            <p class="feature__paragraph">
              As a register player tho you can enjoy every single feature:
            </p>
            <ul class="feature__list">
              <li>Play solo</li>
              <li>Play online with other people</li>
              <li>
                Explore, use and create new decks or cards with which to play
              </li>
              <li>
                In a nutshell: You are gonna have fun *if you don't it's your
                problem*
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="footer">
      <!-- "Footer" icons to github tweeter etc.-->
    </section>
  </div>
</template>

<script>
export default {
  created() {
    window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  },
  data() {
    return {
      numberTo1: 42,
      numberTo2: 69,
      numberTo3: 420,
      numberTo4: 504,
      offsetTop: 0,
      animationPlayed: false,
    };
  },
  watch: {
    offsetTop(val) {
      this.checkVisibility();
    },
  },
  methods: {
    onScroll(e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
    },
    isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    },
    checkVisibility() {
      const section = document.querySelector("#counter-trigger");
      if (this.isElementInViewport(section) && !this.animationPlayed) {
        this.playAnimation();
        this.animationPlayed = true;
      }
    },
    playAnimation() {
      console.log("start");
      this.$refs.counter1.play();
      this.$refs.counter2.play();
      this.$refs.counter3.play();
      this.$refs.counter4.play();
    },
  },
};
</script>

<style lang="scss" scoped>
.intro {
  text-align: center;
  padding: 10% 5%;

  &__logo {
    max-width: 300px;
    max-height: 300px;
    margin: 0 auto;
    img {
      filter: $color-primary-filter;
      width: 100%;
      height: 100%;
    }
  }

  &__title {
    font-size: 75px;
    color: $color-primary;
  }

  &__animated-text {
    color: $color-secondary;
    font-size: 30px;
    font-family: "Open Sans";
  }
}

.about {
  padding-top: 100px;
  margin-bottom: 150px;
  &__text-section {
    padding: 100px 0px;
    width: 50%;
    text-align: center;
  }

  &__title {
    font-size: 35px;
    margin-bottom: 50px;
  }
  &__paragraph {
    line-height: 1.7em;
    font-size: 20px;
    font-weight: 600;
    font-family: "Open Sans";
    color: $color-secondary;
  }
}

.dumb-counters {
  clip-path: polygon(0 15%, 100% 0%, 100% 85%, 0% 100%);
  padding-top: 150px;
  padding-bottom: 200px;
  /* The only hardcoded color */
  background-color: #3b3e58;
  border: $color-secondary solid 10px;
  .counters-wrapper {
    height: 100%;
    transform: rotate(-4deg);
  }
  &__title-text {
    margin-bottom: 100px;
    text-align: center;
    font-size: 60px;
  }
  &__container {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    .counter {
      width: 25%;
      text-align: center;
      font-size: 30px;
      &__title {
        color: $color-secondary;
      }
    }
  }
}

.features {
  padding-top: 150px;
  padding-bottom: 150px;
  text-align: center;

  &__title {
    font-size: 50px;
    margin-bottom: 50px;
  }

  &__container {
    display: flex;
    flex-direction: row;

    .feature {
      width: 50%;
      color: $color-secondary;
      padding: 60px;
      font-size: 20px;

      &__title {
        font-size: 30px;
        color: $color-primary;
        margin-bottom: 30px;
      }
      &__list {
        text-align: left;
        padding-left: 100px;
      }
    }
  }
}
</style>
