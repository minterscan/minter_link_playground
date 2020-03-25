<template>
  <div class="block">
    <div class="title">Payment example</div>
    <img :alt="product.name" :src="`${publicPath}/img/${product.icon}.svg`">
    <div class="name">{{ product.name }}</div>
    <button class="button" @click="paymentRequest()">
      <template v-if="isInstalled && isUnlocked">
        Pay <b>{{ product.price }} {{ product.coin}}</b> 
      </template>
      <template v-else>
        <b>{{ product.price}} {{ product.coin }}</b>. Unlock {{ extensionName }} to pay
      </template>
    </button>
    <p class="error" v-if="paymentError">
      Payment was rejected
    </p>
    <p class="success" v-if="paymentAccept">
      <a :href="`https://minterscan.net/tx/${paymentHash}`" target="_blank">Payment accepted</a>
    </p>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Connect',
  computed: {
    ...mapGetters(['publicPath']),
    ...mapState([ 'extensionName', 'isInstalled', 'isUnlocked', 'wallet'])
  },
  data () {
    return {
      paymentHash: '',
      paymentAccept: false,
      paymentError: false,
      paymentAddress: 'Mx1111efde6d4a7b0d32ca6905deaa52e465111111',
      orderId: 'ORDER-1',
      product: {
        name: 'Delicious Pizza',
        icon: 'pizza',
        price: 1,
        coin: 'BIP',
      }
      
    }
  },
  methods: {
    paymentRequest () {
      this.paymentHash = ''
      this.paymentError = false
      this.paymentAccept = false

      const data = {
        address: this.paymentAddress,
        amount: this.product.price,
        coin: this.product.coin,
        payload: this.orderId
      }

      this.minterConnect.paymentRequest(data)
        .then((hash) => {
          this.paymentHash = hash
          this.paymentAccept = true
        })
        .catch(() => {
          this.paymentHash = ''
          this.paymentError = true
        })
    }
  }
}
</script>
