<script setup lang="ts">
import { Codemirror } from 'vue-codemirror'
import { storeToRefs } from 'pinia'
import { useVTTStore } from '../stores/useVTTStore'
import { extensions } from '../extensions'

// The responsibility of the VTTEditor is to wrap the existing functionality of the Codemirror editor
// To make it specifically oriented for VTT editing and nothing else.

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
