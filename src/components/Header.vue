<template>
  <div class="header">
    <div class="container">
      <!-- Start -->
      <div class="start">
        <img class="logo" :src="`${publicPath}/img/logo.svg`">
      </div>

      <!-- End -->
      <div class="end">
        <!-- Hidden -->
        <span class="hidden" v-if="isAuthenticated">
          🦄 Hidden content, visible for logged-in users only
        </span>

        <!-- Sign In Rejected -->
        <span class="error" v-if="error">Rejected</span>

        <!-- Sign In -->
        <button class="button auth" @click="authRequest()" v-if="!isAuthenticated && wallet" :disabled="loading">
          Sign In
        </button>

        <!-- Sign Out -->
        <button class="button active auth" @click="signOut()" v-if="isAuthenticated">
          Sign out
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Auth from './../services/auth'

export default {
  name: 'Header',
  data () {
    return {
      publicPath: process.env.NODE_ENV === 'production' ? process.env.BASE_URL : '',
      loading: false,
      error: false
    }
  },
  computed: {
    ...mapState(['isAuthenticated', 'isUnlocked', 'wallet'])
  },
  methods: {
    authRequest () {
      if (!this.isUnlocked) return

      this.error = false
      this.loading = true

      this.minterConnect.signRequest('Hello Minter')
        .then((message) => {
          const { personalMessage, signature } = message

          this.loading = false

          if (Auth.verifySignature(this.wallet, personalMessage, signature)) {
            Auth.set(this.wallet, true)
            this.$store.commit('isAuthenticated', true)
          }
        })
        .catch(() => {
          this.error = true
        })
        .finally(() => {
          this.loading = false
        })
    },
    signOut () {
      Auth.clear(this.wallet)
      this.$store.commit('isAuthenticated', false)
    }
  }
}
</script>