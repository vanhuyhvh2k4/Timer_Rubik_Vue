<template>
   <!-- Register layout -->
  <component :is="layout">
    <!-- Render view -->
    <router-view/>
  </component>
</template>

<script>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

export default {
  setup() {
    const route = useRoute();
    var layout = computed(() => route.meta.layout || "Default");

    return {
      layout
    }
  }
}
</script>