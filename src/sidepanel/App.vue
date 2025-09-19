<script setup lang="ts">
import ToolBar from '@/sidepanel/vtt-toolbar/ToolBar.vue'
import VTTEditor from '@/sidepanel/vtt-editor/components/VTTEditor.vue'
import { TooltipProvider } from '@/sidepanel/ui/tooltip'
import { Toaster } from '@/sidepanel/ui/sonner'
import 'vue-sonner/style.css'
</script>

<template>
  <TooltipProvider>
    <div class="h-screen flex flex-col">
      <div class="border-b">
        <ToolBar />
      </div>
      <div class="flex-1 min-h-0">
        <VTTEditor />
      </div>
    </div>
  </TooltipProvider>

  <!-- Global controllers -->
  <Toaster rich-colors />
</template>
