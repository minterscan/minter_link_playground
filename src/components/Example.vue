<template>
  <div class="cp example">
    <div class="container">
      <!-- Welcome -->
      <welcome />
      
      <!-- Status -->
      <status />
      
      <!-- Blocks -->
      <div class="blocks">

        <!-- Connect -->
        <connect />

        <!-- Payment -->
        <payment />
      </div>
    </div>
  </div>
</template>

<script>
import Status from './Status.vue'
import Connect from './Connect.vue'
import Payment from './Payment.vue'
import Welcome from './Welcome.vue'

export default {
  name: 'Example',
  components: { 
    Connect,
    Payment,
    Status,
    Welcome
  }
}
</script>