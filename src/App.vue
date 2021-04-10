<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <nav>
      <HomeLink />
      <NavLink url='/about' text='About'/>
      <NavLink url='/contact' text='Contact'/>
    </nav>
    <p>Welcome to our <HomeLink /> page! </p>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HomeLink from './components/HomeLink.vue'
import NavLink from './components/NavLink.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    HomeLink,
    NavLink,
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
