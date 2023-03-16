<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <router-link v-bind:to="{ path: '/' }">Home</router-link>
  <router-link v-bind:to="{ path: '/test' }">page2</router-link>

  <router-view></router-view>
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  max-width: 3%;
  height: auto;
}
</style>
