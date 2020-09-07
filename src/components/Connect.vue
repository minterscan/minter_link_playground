<template>
  <div class="block">
    <div class="title">Connect example</div>
    <img :src="`${publicPath}/img/charge.svg`" v-if="wallet">
    <img :src="`${publicPath}/img/plug.svg`" v-else >

    <!-- Wallet -->
    <template v-if="wallet">
      <div class="name">
        <div>Wallet connected</div>
        <a :href="`https://minterscan.net/address/${wallet}`" target="_blank">
          {{ wallet }}
        </a>
      </div>
    </template>

    <template v-else>
      <div class="name">
        Not connected
      </div>

      <!-- Unlocked -->
      <button 
        class="button" 
        @click="connectRequest()" 
        :class="wallet ? 'active': ''"
        v-if="isInstalled && isUnlocked"
      >  
        Connect
      </button>

      <!-- Locked -->
      <template v-else>
        Unlock {{ extensionName }} to connect
      </template>  
    </template>

    

    <!-- Error -->
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
  watch: {
    wallet () {
      this.connectError = false
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