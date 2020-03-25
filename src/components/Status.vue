<template>
  <div class="status">
    Browser extension 
    
    <!-- Version -->
    <template v-if="isInstalled">
      v. {{ version }}
    </template>

    is
    <!-- Is Extension installed -->
    <span class="dashed">
      {{ isInstalled ? `installed` : 'not installed' }}
    </span>

    <!-- Is Extension unlocked -->
    <template v-if="isInstalled">
      and
      <span class="dashed">
        {{ isUnlocked ? 'unlocked' : 'locked' }}
      </span>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Status',
  computed: {
    ...mapState(['isInstalled', 'isUnlocked', 'version'])
  }
}
</script>