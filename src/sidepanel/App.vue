<script setup lang="ts">
import { Toaster } from '@/sidepanel/components/ui/sonner'
import 'vue-sonner/style.css'
import ToolBar from '@/sidepanel/components/toolbar/ToolBar.vue'
import VTTEditor from '@/sidepanel/components/editor/VTTEditor.vue'
</script>

<template>
  <Toaster rich-colors />
  <div class="h-screen flex flex-col">
    <div class="border-b bg-[#f5f5f5]  dark:border-[#282c34] dark:bg-[#21252b]">
      <ToolBar />
    </div>
    <div class="flex-1 min-h-0">
      <VTTEditor />
    </div>
  </div>
</template>
