<script setup lang="ts">
import ToolBar from '@/sidepanel/components/toolbar/ToolBar.vue'
import VTTEditor from '@/sidepanel/components/editor/VTTEditor.vue'
import AppLayout from '@/sidepanel/layout/AppLayout.vue'
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
</template>
