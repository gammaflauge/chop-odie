<template>
  <div id="app">
    <b-container align="center">
      <transition name="fade">
        <router-view></router-view>
      </transition>
      <p>testing links:
        <router-link to="/">login </router-link>
        <router-link to="/user/mattster">hello</router-link>
      </p>
    </b-container>
  </div>
</template>


<script>
export default {
  name: 'app',
}
</script>


<style>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
