<template>
  <div class="cp example">
    <div class="block extesion-installed" :class="isInstalled ? 'active' : ''">
      {{ isInstalled ? `Extension installed, v. ${ version }` : 'Extension not installed' }}
    </div>
    <div class="block extesion-status" :class="isUnlocked ? 'active' : ''">
      {{ isUnlocked ? 'Extension unlocked' : 'Extension locked' }}
    </div>
    <div class="block product" v-for='(item, index) in products' :key="index">
      <img alt="Bip Wallet logo" :src="`${publicPath}/img/${item.icon}.svg`">
      <div class="name">{{ item.name }}</div>
      <button class="button" @click="paymentRequest(index)">
        <template v-if="isInstalled && isUnlocked">
          Order for <b>{{ item.price }} {{ item.coin}}</b>
        </template>
        <template v-else>
          <b>1 BIP</b>. Unlock BIP Wallet to order
        </template>
      </button>
      <p class="error" v-if="paymentError">
        Payment was rejected
      </p>
      <p class="success" v-if="paymentAccept">
        Payment accepted
      </p>
    </div>
  </div>
</template>

<script>
import MinterConnect from 'minter-connect'

export default {
  name: 'Example',
  data() {
    return {
      publicPath: process.env.NODE_ENV === 'production' ? process.env.BASE_URL : '',
      paymentAddress: 'Mx1111efde6d4a7b0d32ca6905deaa52e465111111',
      mockOrderId: 'ORDER-1',
      products: [
        {
          name: 'Delicious Pizza',
          icon: 'pizza',
          price: 1,
          coin: 'BIP',
        }
      ],
      version: '',
      minterConnect: null,
      isInstalled: false,
      isUnlocked: false,
      paymentError: false,
      paymentAccept: false
    }
  },
  mounted() {
    this.minterConnect = new MinterConnect({
      name: 'Dodo Pizza',
      url: 'https://dodopizza.com/'
    })

    this.subscribe()
  },
  methods: {
    subscribe () {
      this.minterConnect.subscribe('isInstalled', (value) => {
        this.isInstalled = value
      })

      this.minterConnect.subscribe('isUnlocked', (value) => {
        this.isUnlocked = value
      })

      this.minterConnect.subscribe('version', (value) => {
        this.version = value
      })
    },
    paymentRequest(index) {
      if (!this.minterConnect.isUnlocked) return

      this.paymentError = false
      this.paymentAccept = false

      const data = {
        address: this.paymentAddress,
        amount: this.products[index].price,
        coin: this.products[index].coin,
        payload: this.mockOrderId
      }

      this.minterConnect.paymentRequest(data)
        .then(() => {
          this.paymentAccept = true
        })
        .catch(() => {
          this.paymentError = true
        })
    }
  }
}
</script>

