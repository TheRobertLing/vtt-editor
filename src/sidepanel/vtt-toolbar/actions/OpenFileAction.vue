<script setup lang="ts">
import { useVTTStore } from '@/sidepanel/stores/useVTTStore'
import { Button } from '@/sidepanel/ui/button'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/sidepanel/ui/tooltip'
import { useFileDialog } from '@vueuse/core'
import { FolderOpen } from 'lucide-vue-next'

const store = useVTTStore()
const { open, onChange } = useFileDialog({
  accept: '.vtt',
  multiple: false,
})

onChange((files) => {
  store.loadFile(files)
})
</script>

<template>
  <Tooltip>
    <TooltipTrigger as-child>
      <Button variant="ghost" size="icon" @click="open()">
        <FolderOpen />
      </Button>
    </TooltipTrigger>
    <TooltipContent align="start"> Open VTT File </TooltipContent>
  </Tooltip>
</template>
