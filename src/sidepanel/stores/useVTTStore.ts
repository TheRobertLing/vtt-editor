import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useVTTStore = defineStore('vtt', () => {
  const vtt = ref('WEBVTT')

  async function importVTT(file: File): Promise<void> {
    try {
      vtt.value = await file.text()
    } catch (err) {
      throw new Error('Error in loading file: ' + err)
    }
  }

  function exportVTT(): void {
    const blob = new Blob([vtt.value], { type: 'text/vtt;charset=utf-8' })
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.setAttribute('href', url)
    link.setAttribute('download', 'transcript.vtt')
    console.log(link)

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    URL.revokeObjectURL(url)
  }

  return { vtt, importVTT, exportVTT }
})
