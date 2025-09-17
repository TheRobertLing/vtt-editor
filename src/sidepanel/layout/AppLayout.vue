<template>
  <div class="h-screen flex flex-col">
    <div class="border-b">
      <slot name="toolbar" />
    </div>
    <div class="flex-1 min-h-0">
      <slot name="editor" />
    </div>
  </div>
</template>
