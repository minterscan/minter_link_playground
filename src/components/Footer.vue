<template>
  <div class="footer">
    <div class="container">
      <!-- Start -->
      <div class="start">
        <span>Powered by <a href="https://minter.org/" target="_blank">Minter</a>.</span>&nbsp;
        <span>Made by <a href="https://minterscan.net" target="_blank">Minterscan</a> &copy; {{ year }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    year () {
      return new Date().getFullYear()
    }
  },
}
</script>