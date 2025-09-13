import { LanguageSupport, StreamLanguage } from '@codemirror/language'

type VTTState = {
  sawHeader: boolean
  inCue: boolean
}

const TIME = String.raw`(?:\d{2}:)?\d{2}:\d{2}\.\d{3}`
const TIMING_LINE = new RegExp(`^${TIME}\\s*-->\\s*${TIME}(?:\\s+.*)?$`)

export const vttLanguage = StreamLanguage.define<VTTState>({
  name: 'vtt',

  startState() {
    return { sawHeader: false, inCue: false }
  },

  token(stream, state) {
    // Header: only recognize on the very first non-empty line
    if (!state.sawHeader && stream.sol()) {
      const line = stream.string
      if (/^\uFEFF?WEBVTT(?:[ \t][^\r\n]*)?$/.test(line)) {
        state.sawHeader = true
        stream.skipToEnd()
        return 'keyword'
      }

      if (!/^\s*$/.test(line)) state.sawHeader = true
    }

    // Timestamp line (opens/continues a cue block)
    if (stream.sol() && TIMING_LINE.test(stream.string)) {
      state.inCue = true
      stream.skipToEnd()
      return 'number'
    }

    if (state.inCue && !/^\s*$/.test(stream.string)) {
      stream.skipToEnd()
      return 'string'
    }

    stream.skipToEnd()
    return 'meta'
  },

  blankLine(state) {
    state.inCue = false
  },
})

export function vtt() {
  return new LanguageSupport(vttLanguage)
}
