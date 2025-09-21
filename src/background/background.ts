/// <reference types="chrome-types" />

async function setPanelBehavior() {
  try {
    await chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true })
  } catch (error) {
    console.error('Error setting side panel behavior:', error)
  }
}

setPanelBehavior()
