<script setup lang="ts">
import { useDark } from '@vueuse/core'

const isDark = useDark()
</script>

<template>
  <svg
    width="565"
    height="458"
    viewBox="0 0 565 458"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M112.444 100.119C101.65 68.7764 61.6352 84.4217 73.0173 114.786L122.581 249.341C133.405 280.356 171.084 274.638 177.572 250.771L225.889 122.585H265.502V245.054C265.283 277.496 304.211 279.359 307.081 251.517L308.078 122.585H394.417V253.164C394.811 275.842 436.22 278.585 436.838 248.721V122.585H472.771C499.183 122.585 500.297 85.249 472.771 85.9782H222.8C207.56 77.4521 197.173 83.5518 192.794 95.5497L151.87 215.719L112.444 100.119Z"
      :fill="isDark ? 'white' : 'black'"
    />
    <path
      d="M15 229C15 128.126 15 77.6752 46.351 46.351C77.702 15.0267 128.126 15 229 15H336C436.874 15 487.325 15 518.649 46.351C549.973 77.702 550 128.126 550 229C550 329.874 550 380.325 518.649 411.649C487.298 442.973 436.874 443 336 443H229C128.126 443 77.6752 443 46.351 411.649C15.0267 380.298 15 329.874 15 229Z"
      :stroke="isDark ? 'white' : 'black'"
      stroke-width="30"
    />
    <rect x="71" y="300" width="30" height="30" rx="15" :fill="isDark ? 'white' : 'black'" />
    <rect x="463" y="359" width="30" height="30" rx="15" :fill="isDark ? 'white' : 'black'" />
    <rect x="72" y="359" width="361" height="30" rx="15" :fill="isDark ? 'white' : 'black'" />
    <rect x="132" y="300" width="361" height="30" rx="15" :fill="isDark ? 'white' : 'black'" />
  </svg>
</template>
