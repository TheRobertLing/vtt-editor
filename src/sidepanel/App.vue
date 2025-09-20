<script setup lang="ts">
import VTTToolbar from '@/sidepanel/vtt-toolbar/VTTToolbar.vue'
import { TooltipProvider } from '@/sidepanel/ui/tooltip'
import { Toaster } from '@/sidepanel/ui/sonner'
import 'vue-sonner/style.css'
import VTTMonacoEditor from '@/sidepanel/vtt-editor/VTTMonacoEditor.vue'
</script>

<template>
  <TooltipProvider>
    <div class="h-screen flex flex-col">
      <div class="border-b">
        <VTTToolbar />
      </div>
      <div class="flex-1 min-h-0">
        <VTTMonacoEditor class="size-full"/>
      </div>
    </div>
  </TooltipProvider>

  <!-- Global controllers -->
  <Toaster rich-colors />
</template>
