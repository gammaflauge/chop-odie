<template>
  <div>
    <OdieBar v-bind:user="$route.params.id" />
    <h3>hello {{ $route.params.id }}</h3>
    <router-link :to="{ name: 'newproject', params: { id: $route.params.id }}">New Project Link</router-link>
    <router-view></router-view>
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
