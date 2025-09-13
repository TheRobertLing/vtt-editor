<script setup lang="ts">
import { Switch } from '@/sidepanel/components/ui/switch'
import { useThemeStore } from '@/sidepanel/stores/useThemeStore'
import { Moon, Sun } from 'lucide-vue-next'

const store = useThemeStore()
</script>

<template>
  <Switch :model-value="store.isDark" @update:model-value="store.toggleTheme()">
    <template #thumb>
      <Sun v-if="!store.isDark" class="size-4 p-0.5" />
      <Moon v-else class="size-4 p-0.5" />
    </template>
  </Switch>
</template>
