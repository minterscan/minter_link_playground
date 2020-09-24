<template>
  <div id="app">
    <Header />
    <Example />
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Auth from './services/auth'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Example from './components/Example.vue'
import { MinterLinkObservableProps } from 'minter-connect'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Example
  },
  computed: {
    ...mapState(['wallet'])
  },
  watch: {
    wallet: function () {
      this.authCheck() 
    }
  },
  mounted () {
    this.subscribe()
    this.authCheck()
  },
  methods: {
    authCheck () {
      this.$store.commit('isAuthenticated', false)

      if (Auth.get(this.wallet)) {
        this.$store.commit('isAuthenticated', true)
      }
    },
    subscribe () {
      this.minterConnect.subscribe(MinterLinkObservableProps.IsInstalled, (value) => {
        this.$store.commit('isInstalled', value)
      })

      this.minterConnect.subscribe(MinterLinkObservableProps.IsUnlocked, (value) => {
        this.$store.commit('isUnlocked', value)
        if (!value) this.$store.commit('isAuthenticated', false)
      })

      this.minterConnect.subscribe(MinterLinkObservableProps.Version, (value) => {
        this.$store.commit('version', value)
      })

      this.minterConnect.subscribe(MinterLinkObservableProps.Wallet, (value) => {
        this.$store.commit('wallet', value)
      })
    },
  }
}
</script>
