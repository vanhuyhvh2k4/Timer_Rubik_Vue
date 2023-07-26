<template>
    <div :class="$style.wrapper">
        <slot/>
        <Navbar :class="$style.nav"/>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar.vue';
export default {
    components: { Navbar }
}
</script>

<style lang="scss" module>
    .wrapper {
        width: 100%;
        height: 100%;
    }

    .nav {
        position: fixed;
        bottom: 0;
        left: 0;
    }
</style>