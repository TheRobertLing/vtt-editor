<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '@/sidepanel/stores/useThemeStore'
import { useVTTStore } from '@/sidepanel/stores/useVTTStore'
import { oneDark } from '@codemirror/theme-one-dark'
import { Codemirror } from 'vue-codemirror'
import { EditorView } from '@codemirror/view'
import { lintGutter } from '@codemirror/lint'
import { search } from '@codemirror/search'
import { vttLinter } from '@/sidepanel/lib/codemirror/vtt-lint'
import { vttLanguage } from '@/sidepanel/lib/codemirror/vtt-lang'

const theme = useThemeStore()
const vtt = useVTTStore()

const extensions = computed(() => {
  const result = [
    lintGutter(),
    vttLinter,
    vttLanguage,
    search({ top: true }),
    EditorView.lineWrapping,
  ]

  if (theme.isDark) result.push(oneDark)

  return result
})
</script>

<template>
  <Codemirror
    v-model="vtt.vtt"
    autofocus
    auto-destroy
    :extensions="extensions"
    :style="{ height: '100%' }"
  />
</template>
