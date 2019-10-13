import CCard from "./index.vue";

export default {
  title: "CCard",
  component: CCard
};

export const story = () => ({
  components: { CCard },
  data(){ 
    return ({
      rank: 'one',
      suit: 'clubs'
    })
  },
  template: `<CCard :rank="rank" :suit="suit" />`
});
