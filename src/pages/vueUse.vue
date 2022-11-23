<template>
  <!-- <h1>测试vueUse的鼠标坐标</h1>
  <h3>Mouse:{{ x }}x{{ y }}</h3> -->
  <div class="goods-image">
    <!-- 显示在右侧的放大之后的区域 -->
    <div
      class="large"
      v-show="!isOutside"
      :style="[
        {
          backgroundImage: 'url(' + images + ')',
          backgroundPosition: `-${position.x * 2}px -${position.y * 2}px`,
        },
      ]"
    ></div>

    <div class="middle" ref="target">
      <img :src="images" alt="" />
      <!-- 移动遮罩 -->
      <div
        class="layer"
        ref="target"
        v-show="!isOutside"
        :style="{ left: position.x + 'px', top: position.y + 'px' }"
      ></div>
    </div>
    <!-- <pre lang="yaml">{{text}}</pre> -->
  </div>
</template>

<script lang="ts" setup>
import { ref,reactive } from "vue";
import { reactify, useMouse, useMouseInElement } from "@vueuse/core";
import { computed } from "@vue/reactivity";
// import { stringify } from '@vueuse/docs-utils'
const target = ref(null);
const active = ref(0);
const images = ref(
  "https://images.mepai.me/app/works/178221/2022-07-14/w_62d01aa163e45/062d01aa163f41.jpg!1200w.jpg"
);

const position = computed(() => {
  let x = elementX.value - 100;
  let y = elementY.value - 100;
  x = x < 0 ? 0 : x;
  y = y < 0 ? 0 : y;
  return {
    x,
    y,
  };
});
const { isOutside, elementX, elementY } = useMouseInElement(target);
const mouse=reactive(useMouse())
const text=mouse
console.log(text);

// export default defineComponent({
//   name: "VueUse",
//   setup() {
//
//     return {
//       x,
//       y,
//     };
//   },
// });
</script>

<style lang="scss" scoped>
.img {
  width: 100px;
  height: 100px;
}
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;
  z-index: 500;
  .large {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    // 放大一倍
    background-size: 800px 800px;
    background-color: #f8f8f8;
  }
  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;
    position: relative;
    cursor: move;
    img {
      width: 400px;
      height: 400px;
    }
    .layer {
      width: 200px;
      height: 200px;
      background: rgba(0, 0, 0, 0.2);
      left: 0;
      top: 0;
      // 可以移动
      position: absolute;
    }
  }
  .small {
    width: 80px;
    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;
      &:hover,
      &.active {
        border: 2px solid red;
      }
    }
  }
}
</style>
