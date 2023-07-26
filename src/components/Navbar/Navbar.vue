<template>

    <div :class="$style.wrapper">
        <div>
            <router-link to="/">
                <IconSvg icon="home" :color="this.$route.path === '/' && 'blue'"/>
            </router-link>
        </div>
        <div>
            <IconSvg icon="category"/>
        </div>
        <div>
            <IconSvg icon="add" color="#FF2C61"/>
        </div>
        <div>
            <IconSvg icon="star"/>
        </div>
        <div>
            <IconSvg icon="setting"/>
        </div>
    </div>
</template>

<script>
import IconSvg from '../Icon/IconSvg.vue';
export default {
    components: { IconSvg }
}
</script>

<style lang="scss" module>
    @import "./Navbar.module.scss"
</style>