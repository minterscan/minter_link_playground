<template>
  <div class="welcome">
    Welcome to
    <a :href="extensionUrl" target="_blank">{{ extensionName }}</a> playground
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Connect',
  computed: {
    ...mapState([ 'extensionName', 'extensionUrl'])
  },
}
</script>