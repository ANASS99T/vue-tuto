<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/events">Events</router-link>
    </div>
    <router-view/>
    <Lifecycle />
    <p>
      The date stored in Vuex is :  {{ Year }} / {{ Month }} / {{ Day }}.
    </p>
  </div>
</template>

<script>
  import Lifecycle from './components/LifeCycle.vue'
  import { mapState } from 'vuex'

  export default {
    name: 'app',
    components: {
      Lifecycle,
      },
    computed: {
  ...mapState({
          Year: 'year',
          Month: 'month',
          Day: 'day',
      })
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
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
