<template>
  <div class="player">
    <img :src="image" />
    <span class="name">{{name}}</span>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Player extends Vue {
  @Prop() private name: string;
  @Prop() private image: string;
}
</script>
<style lang="scss" scoped>
  .player {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
  }
  img {
    width: 50px;
    border-radius: 50%;
    margin: 10px;
  }
  .name {
    font-size: 14px;
  }
</style>