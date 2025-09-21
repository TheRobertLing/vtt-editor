<script setup lang="ts">
import GithubLinkAction from '@/sidepanel/vtt-toolbar/actions/GithubLinkAction.vue'
import OpenFileAction from '@/sidepanel/vtt-toolbar/actions/OpenFileAction.vue'
import SaveFileAction from '@/sidepanel/vtt-toolbar/actions/SaveFileAction.vue'
import ThemeToggleAction from '@/sidepanel/vtt-toolbar/actions/ThemeToggleAction.vue'
</script>

<template>
  <div class="flex flex-wrap items-center p-2">
    <OpenFileAction />
    <SaveFileAction />
    <div class="flex-1" />
    <ThemeToggleAction />
    <GithubLinkAction />
  </div>
</template>
