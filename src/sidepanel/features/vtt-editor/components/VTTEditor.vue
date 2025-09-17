<script setup lang="ts">
import { computed } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { EditorView } from '@codemirror/view'
import { lintGutter } from '@codemirror/lint'
import { search } from '@codemirror/search'
import { vttLinter } from '@/sidepanel/lib/codemirror/vtt-lint'
import { vttLanguage } from '@/sidepanel/lib/codemirror/vtt-lang'
import { storeToRefs } from 'pinia'
import { useVTTStore } from '@/sidepanel/features/vtt-editor/stores/useVTTStore'
import { theme } from '@/sidepanel/features/vtt-editor/extensions/theme'


const extensions = computed(() => {
  const result = [
    lintGutter(),
    theme(),
    vttLinter,
    vttLanguage,
    search({ top: true }),
    EditorView.lineWrapping,
  ]


  return result
})

// The responsibility of the VTTEditor is to wrap the existing functionality of the Codemirror editor
// To make it specifically oriented for VTT editing and nothing else.

// Refactor

const { vtt } = storeToRefs(useVTTStore())
</script>

<template>
  <Codemirror
    v-model="vtt"
    autofocus
    auto-destroy
    :extensions="extensions"
    :style="{ height: '100%' }"
  />
</template>
