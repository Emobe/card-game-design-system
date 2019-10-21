<template>
  <div :class="`card ${suit}`">
    <span class="suit">{{suitIcon}}</span>
    <span>{{rank}}</span>
  </div>
</template>
<script>
export default {
  name: "PCard",
  computed: {
    suitIcon() {
      switch (this.suit) {
        case "clubs":
          return "♣";
        case "diamonds":
          return "♦";
        case "spades":
          return "♠";
        case "hearts":
          return "♥";
      }
    }
  },
  props: {
    suit: {
      type: String,
      validator: val => ["clubs", "diamonds", "spades", "hearts"].includes(val)
    },
    rank: {
      type: String,
      validator: val =>
        [
          "one",
          "two",
          "three",
          "four",
          "five",
          "six",
          "seven",
          "eight",
          "nine",
          "ten",
          "jack",
          "queen",
          "king",
          "ace"
        ].includes(val)
    }
  }
};
</script>
<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 100px;
  height: 160px;
  box-shadow: 2px 2px 5px 1px #00000033;
  border-radius: 2px;
  color: white;
  .suit {
    font-size: 30px;
  }
  &.clubs {
    background-color: #05c46b;
  }
  &.diamonds {
    background-color: blue;
  }
  &.hearts {
    background-color: red;
  }
  &.spades {
    background-color: black;
  }
}
</style>