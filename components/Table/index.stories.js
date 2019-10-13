import CTable from "./index.vue";

export default {
  title: "CTable",
  component: CTable
};

export const story = () => ({
  components: { CTable },
  template: "<CTable />"
});

export const withPokerCards = () => ({
  components: { CTable, CCard },
  template: `<CTable layout="poker"></CTable>`
});
