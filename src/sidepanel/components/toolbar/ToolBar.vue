<script setup lang="ts">
import ExportButton from '@/sidepanel/components/toolbar/actions/ExportButton.vue'
import ImportButton from '@/sidepanel/components/toolbar/actions/ImportButton.vue'
import LightDarkSwitch from '@/sidepanel/components/toolbar/actions/LightDarkSwitch.vue'
</script>

<template>
  <div class="flex flex-wrap items-center gap-2 p-2">
    <ImportButton />
    <ExportButton />
    <div class="flex-1" />
    <LightDarkSwitch />
  </div>
</template>
