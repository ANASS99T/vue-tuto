<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>
      The date stored in Vuex is :  {{ $store.state.year }} / {{ $store.state.month }} / {{ $store.state.day }}.
    </p>
  </div>
</template>
