import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useVTTStore = defineStore('vtt', () => {
  const vtt = ref('WEBVTT')

  function loadFile(files: FileList | null) {
    if (!files || files.length === 0) {
      return
    }
    const file = files[0]

    const reader = new FileReader()
    reader.onload = (event) => {
      if (event.target?.result) {
        vtt.value = event.target.result as string
      }
    }
    reader.readAsText(file)
  }

  function saveFile() {
    const blob = new Blob([vtt.value], { type: 'text/vtt;charset=utf-8' })
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = 'subtitles.vtt'
    a.click()

    a.remove()
    URL.revokeObjectURL(url)
  }

  return { vtt, loadFile, saveFile }
})
