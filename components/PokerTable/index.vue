<template>
  <div class="card-layout poker">
    <template v-for="card in cards">
      <CCard :key="card.suit + card.rank" :rank="card.rank" :suit="card.suit" />
    </template>
  </div>
</template>
<script>
import CCard from '@cgds/card';
export default {
  name: "CPokerCardLayout",
  components: {CCard},
  props: {
    cards: {
      type: Array
    }
  }
};
</script>
<style lang="scss">
.card-layout {
  display: flex;
}
</style>