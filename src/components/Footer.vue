<template>
  <div class="footer">
    <div class="container">
      <!-- Start -->
      <div class="start">
        <span><a href="https://github.com/minterscan/minter_link_playground" target="_blank">Source Code</a></span>&nbsp;
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