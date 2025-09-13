<script setup lang="ts">
import { Button } from '@/sidepanel/components/ui/button'
import { useVTTStore } from '@/sidepanel/stores/useVTTStore'
import { Download } from 'lucide-vue-next'

const { exportVTT } = useVTTStore()
</script>

<template>
  <Button size="icon" variant="ghost" title="Download VTT File" @click="exportVTT">
    <Download />
  </Button>
</template>
