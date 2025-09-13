<script setup lang="ts">
import ExportButton from '@/sidepanel/components/ExportButton.vue'
import ImportButton from '@/sidepanel/components/ImportButton.vue'
import LightDarkSwitch from '@/sidepanel/components/LightDarkSwitch.vue'
</script>

<template>
  <div class="flex flex-wrap items-center gap-2 p-2">
    <ImportButton />
    <ExportButton />
    <div class="flex-1"></div>
    <LightDarkSwitch />
  </div>
</template>
