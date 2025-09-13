import { useDark, useToggle } from '@vueuse/core'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const isDark = useDark()
  const toggleTheme = useToggle(isDark)

  return { isDark, toggleTheme }
})
