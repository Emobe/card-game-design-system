import CTable from "./index.vue";

export default {
  title: "CTable",
  component: CTable
};

export const blank = () => ({
  components: { CTable },
  template: "<CTable />"
});

export const withPlayers = () => ({
  components: { CTable },
  data() {
    return {
      players: []
    };
  },
  template: "<CTable />"
});
