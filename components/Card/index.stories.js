import CCard from "./index.vue";

export default {
  title: "CCard",
  component: CCard
};

export const story = () => ({
  components: { CCard },
  data() {
    return {
      rank: "one",
      suit: "clubs"
    };
  },
  template: `<div style="display: flex"><CCard :rank="rank" :suit="suit" /><CCard :rank="rank" :suit="suit" /><CCard :rank="rank" :suit="suit" /></div>`
});
