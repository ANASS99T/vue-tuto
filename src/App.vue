<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/events">Events</router-link>
    </div>
    <router-view/>
    <Lifecycle />
    <h5>
      The date stored in Vuex is :  {{ Year }} / {{ Month }} / {{ Day }}.
    </h5>
    <h5> The date stored from getters in vuex is : {{ formattedDate }}. </h5>
  </div>
</template>

<script>
  import Lifecycle from './components/LifeCycle.vue'
  import { mapState, mapGetters } from 'vuex'

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
      }),
      ...mapGetters(['formattedDate'])
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
