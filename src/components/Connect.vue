<template>
  <div class="block">
    <div class="title">Connect example</div>
    <img alt="Connect" :src="`${publicPath}/img/browser.svg`">
    <div class="name">
      <a :href="`https://minterscan.net/address/${wallet}`" target="_blank" v-if="wallet">
        {{ wallet }}
      </a>
      <template v-else>Not connected</template>
    </div>
    <button class="button" @click="connectRequest()" :class="wallet ? 'active': ''">
      <template v-if="isInstalled && isUnlocked">
        <template v-if="wallet">
          Connected
        </template>
        <template v-else>
          Connect
        </template>
      </template>
      <template v-else>
        Unlock {{ extensionName }} to connect
      </template>
    </button>
    <p class="error" v-if="connectError">
      Connect was rejected
    </p>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Connect',
  computed: {
    ...mapGetters(['publicPath']),
    ...mapState(['extensionName', 'isInstalled', 'isUnlocked', 'wallet'])
  },
  data () {
    return {
      connectError: false
    }
  },
  methods: {
    connectRequest () {
      this.connectError = false

      this.minterConnect.connectRequest()
        .then((wallet) => {
          this.$store.commit('wallet', wallet)
        })
        .catch(() => {
          this.connectError = true
        })
    },
  }
}
</script>