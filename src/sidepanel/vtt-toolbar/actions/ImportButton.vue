<script setup lang="ts">
import { useFileDialog } from '@vueuse/core'
import { Button } from '@/sidepanel/ui/button'
import { Upload } from 'lucide-vue-next'
import { useVTTStore } from '@/sidepanel/stores/useVTTStore'
import { toast } from 'vue-sonner'

const { importVTT } = useVTTStore()
const { open, reset, onChange } = useFileDialog({
  accept: '.vtt',
  multiple: false,
})

onChange(async (files) => {
  const file = files?.item(0)

  if (!file) return

  try {
    await importVTT(file)
    toast.success('VTT file imported successfully!')
  } catch (err) {
    toast.error('An error occurred during file import: ' + err)
  } finally {
    reset()
  }
})
</script>

<template>
  <Button size="icon" variant="ghost" title="Import VTT File" @click="open">
    <Upload />
  </Button>
</template>
