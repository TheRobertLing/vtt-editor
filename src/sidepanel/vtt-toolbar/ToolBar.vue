<script setup lang="ts">
import ExportButton from '@/sidepanel/vtt-toolbar/actions/ExportButton.vue';
import ImportButton from '@/sidepanel/vtt-toolbar/actions/ImportButton.vue';
import LightDarkSwitch from '@/sidepanel/vtt-toolbar/actions/LightDarkSwitch.vue'
</script>

<template>
  <div class="flex flex-wrap items-center gap-2 p-2">
    <ImportButton />
    <ExportButton />
    <div class="flex-1" />
    <LightDarkSwitch />
  </div>
</template>
