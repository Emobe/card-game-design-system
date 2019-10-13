import CPokerCardLayout from "./index.vue";

export default {
  title: "CPokerCardLayout",
  component: CPokerCardLayout
};

export const story = () => ({
  components: { CPokerCardLayout},
  data() {
    return ({
      cards: [
        {
          suit: 'clubs',
          rank: 'one'
        },
        {
          suit: 'hearts',
          rank: 'five'
        },
        {
          suit: 'spades',
          rank: 'three'
        },
        {
          suit: 'diamonds',
          rank: 'two'
        },
        {
          suit: 'clubs',
          rank: 'five'
        }
      ]
    })
  },
  template: `<CPokerCardLayout :cards="cards"/>`
});
