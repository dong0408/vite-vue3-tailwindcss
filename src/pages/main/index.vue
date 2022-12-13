<template>
    <div>
        <Header />
    </div>
</template>
<script lang="ts" >
import { defineComponent } from 'vue'
import Header from '@/components/header.vue'
export default defineComponent({
    name: 'homePage',
    components: {
        Header
    }
})
</script>

<style lang="scss" scoped>

</style>