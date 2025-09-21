<script setup lang="ts">
import { useVTTStore } from '@/sidepanel/stores/useVTTStore'
import { Button } from '@/sidepanel/ui/button'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/sidepanel/ui/tooltip'
import { Save } from 'lucide-vue-next'

const store = useVTTStore()
</script>
<template>
  <Tooltip>
    <TooltipTrigger as-child>
      <Button variant="ghost" size="icon" @click="store.saveFile()">
        <Save />
      </Button>
    </TooltipTrigger>
    <TooltipContent> Save VTT File </TooltipContent>
  </Tooltip>
</template>
