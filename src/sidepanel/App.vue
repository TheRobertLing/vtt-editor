<script setup lang="ts">
import ToolBar from '@/sidepanel/components/toolbar/ToolBar.vue'
import AppLayout from '@/sidepanel/layout/AppLayout.vue'
import { Toaster } from '@/sidepanel/components/ui/sonner'
import 'vue-sonner/style.css'
import VTTEditor from '@/sidepanel/features/vtt-editor/components/VTTEditor.vue'
</script>

<template>
  <AppLayout>
    <template #toolbar>
      <ToolBar />
    </template>
    <template #editor>
      <VTTEditor />
    </template>
  </AppLayout>
  <!-- Global controllers -->
  <Toaster rich-colors />
</template>
