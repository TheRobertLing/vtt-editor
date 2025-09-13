<script setup lang="ts">
import { Toaster } from '@/sidepanel/components/ui/sonner'
import 'vue-sonner/style.css'
</script>

<template>
  <div class="h-screen flex flex-col">
    <div class="border-b bg-[#f5f5f5] dark:border-[#282c34] dark:bg-[#21252b]">
      <slot name="toolbar" />
    </div>
    <div class="flex-1 min-h-0">
      <slot name="editor" />
    </div>
  </div>

  <!-- Global controllers -->
  <Toaster rich-colors />
</template>
