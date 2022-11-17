<template>
   <h1>测试vueUse的鼠标坐标</h1>
   <h3>Mouse:{{x}}x{{y}}</h3>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
  import {useMouse} from '@vueuse/core'
    export default defineComponent({
        name: 'VueUse',
        setup(){
            const {x,y}=useMouse()
            return {
                x,y
            }
        }
    });
</script>

<style lang="scss" scoped>
.img{
    width: 100px;
    height: 100px;
}
</style>