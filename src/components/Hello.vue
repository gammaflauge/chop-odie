<template>
  <div>
    <OdieBar v-bind:user="$route.params.id" />
    <h3>hello {{ $route.params.id }}</h3>
  </div>
</template>

<script>
import OdieBar from './OdieBar.vue';

export default {
  name: 'Hello',
  components: {
    OdieBar,
  },
}
</script>
