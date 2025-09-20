# Copilot Instructions for VTTEditorExtension

## Project Overview

- **VTTEditorExtension** is a browser extension and Vue 3 app for editing VTT (WebVTT) subtitle files, built with Vite and TypeScript.
- The codebase is split into extension logic (`background/`, `content/`) and a Vue-based sidepanel UI (`sidepanel/`).
- The extension interacts with web pages via content scripts and provides a rich editor UI in the sidepanel.

## Key Directories & Files

- `src/background/` – Extension background scripts (event/page context)
- `src/content/` – Content scripts injected into web pages
- `src/sidepanel/` – Vue 3 app for the extension's sidepanel UI
  - `vtt-editor/` – VTT editing logic and components
  - `vtt-toolbar/` – Toolbar UI and actions
  - `stores/` – Pinia stores for state management (e.g., `useVTTStore.ts`)
  - `ui/` – Shared UI components (button, switch, tooltip, etc.)
- `public/manifest.json` – Extension manifest (permissions, entrypoints)

## Developer Workflows

- **Install dependencies:** `npm install`
- **Start dev server:** `npm run dev` (hot reloads sidepanel UI)
- **Build extension:** `npm run build` (outputs production assets)
- **Unit tests:** `npm run test:unit` (Vitest)
- **E2E tests:** `npm run test:e2e` (Playwright)
- **Lint:** `npm run lint`

## Patterns & Conventions

- **Vue 3 + Composition API**: All Vue components use `<script setup lang="ts">` and the Composition API.
- **Pinia for state**: All global state is managed via Pinia stores in `stores/`.
- **TypeScript everywhere**: All logic and components are written in TypeScript.
- **Component structure**: UI is modularized by feature (e.g., `vtt-editor/`, `vtt-toolbar/`, `ui/`).
- **No direct DOM manipulation**: Use Vue reactivity and events for UI updates.
- **Testing**: Unit tests live alongside source; E2E tests in `e2e/`.

## Integration & Data Flow

- **Background <-> Content <-> Sidepanel**: Communicate via `chrome.runtime` messaging.
- **VTT data**: Loaded/edited in Pinia store, passed to components as props or via store access.
- **Toolbar actions**: Trigger store mutations or emit events to parent components.

## Examples

- See `src/sidepanel/vtt-editor/` for VTT editing logic and UI patterns.
- See `src/sidepanel/stores/useVTTStore.ts` for state shape and actions.
- See `src/sidepanel/vtt-toolbar/ToolBar.vue` for toolbar action dispatching.

## Special Notes

- **Manifest**: Always update `public/manifest.json` for new permissions or entrypoints.
- **Testing**: E2E tests require a built extension (`npm run build`) before running.
- **Type safety**: Use types from `src/types.ts` for VTT and store data.

---

For more, see the project [README.md](../README.md) and in-code comments for details.
