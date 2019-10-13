<template>
  <div class="table">
    <div class="left"></div>
    <div class="middle">
      <slot>
      </slot>
    </div>
    <div class="right"></div>
  </div>
</template>
<script>
export default {
  name: "PTable",
  props: {
    layout: {
      type: String,
    }
  }
};
</script>
<style lang="scss">
$size: 300px;
$color: #09814a;
.table {
  display: flex;
}

.middle {
  background-color: $color;
  width: $size * 2;
  height: $size;
}

.right,
.left {
  width: $size;
  background: $color;
}

.right {
  border-bottom-right-radius: $size * 2;
  border-top-right-radius: $size * 2;
}

.left {
  border-bottom-left-radius: $size * 2;
  border-top-left-radius: $size * 2;
}
</style>