<script setup lang="ts">
import { Button } from '@/sidepanel/ui/button'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/sidepanel/ui/tooltip'
import { Moon, Sun } from 'lucide-vue-next'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleTheme = useToggle(isDark)
</script>

<template>
  <Tooltip>
    <TooltipTrigger as-child>
      <Button variant="ghost" size="icon" @click="toggleTheme()">
        <transition name="spin-fade" mode="out-in">
          <Sun v-if="!isDark" />
          <Moon v-else />
        </transition>
      </Button>
    </TooltipTrigger>
    <TooltipContent> Toggle Theme </TooltipContent>
  </Tooltip>
</template>

<style scoped>
.spin-fade-enter-active,
.spin-fade-leave-active {
  transition:
    transform 0.1s ease,
    opacity 0.1s ease;
}
.spin-fade-enter-from {
  transform: rotate(-180deg);
  opacity: 0;
}
.spin-fade-enter-to {
  transform: rotate(0deg);
  opacity: 1;
}
.spin-fade-leave-from {
  transform: rotate(0deg);
  opacity: 1;
}
.spin-fade-leave-to {
  transform: rotate(180deg);
  opacity: 0;
}
</style>
