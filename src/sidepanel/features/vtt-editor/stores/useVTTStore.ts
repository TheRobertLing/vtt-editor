import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useVTTStore = defineStore('vtt', () => {
  const vtt = ref('WEBVTT')
  return { vtt }
})
