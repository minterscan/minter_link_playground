<template>
  <div id="app">
    <img class="logo" :src="`${publicPath}/img/logo.svg`">
    <example />
  </div>
</template>

<script>
import Example from './components/Example.vue'

export default {
  name: 'App',
  components: {
    Example
  },
  data () {
    return {
      publicPath: process.env.NODE_ENV === 'production' ? process.env.BASE_URL : ''
    }
  }
}
</script>
