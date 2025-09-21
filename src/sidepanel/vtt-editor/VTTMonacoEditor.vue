<script setup lang="ts">
import { VueMonacoEditor } from '@guolao/vue-monaco-editor'
import { useDark } from '@vueuse/core'
import { useVTTStore } from '../stores/useVTTStore'

const isDark = useDark()
const vtt = useVTTStore()

</script>

<template>
  <VueMonacoEditor
    v-model:value="vtt.vtt"
    :theme="isDark ? 'vs-dark' : 'vs'"
    :options="{
      automaticLayout: true,
      fontSize: 14,
      minimap: { enabled: false },
      lineNumbers: 'on',
      scrollBeyondLastLine: false,
      renderLineHighlight: 'none',
    }"
  />
</template>
