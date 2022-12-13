<template>
  <UsePinia />
  <background>
    <div class="container">
      <Login />
      <Header />
    </div>
  </background>
  <br />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import UsePinia from '@/components/UsePinia.vue';
import background from '@/components/background.vue'
import Login from '@/pages/login/index.vue'
import Header from '@/components/header.vue'
export default defineComponent({
    name: 'IndexPage',
    components: {
        Login,
        background,
        Header,
    },
})
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
