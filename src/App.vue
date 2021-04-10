<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <nav>
      <HomeLink />
      <a href="/about">About</a>
      <a href="/content">content</a>
    </nav>
    <p>Welcome to our <HomeLink /> page! </p>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HomeLink from './components/HomeLink.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    HomeLink
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
