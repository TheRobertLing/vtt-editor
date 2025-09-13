import { linter, type Diagnostic } from '@codemirror/lint'
import { WebVTTParser } from 'webvtt-parser'

export const vttLinter = linter(
  (view) => {
    const text = view.state.doc.toString()
    const parser = new WebVTTParser()
    const { errors = [] } = parser.parse(text)

    const doc = view.state.doc
    const lineCount = doc.lines

    const diagnostics: Diagnostic[] = errors.map((err) => {
      const lineNumber = Math.min(err.line ?? 1, lineCount)
      const lineInfo = doc.line(lineNumber)

      const colOffset = Math.max((err.col ?? 1) - 1, 0)
      const from = Math.min(lineInfo.from + colOffset, lineInfo.to)
      const to = Math.min(from + 1, lineInfo.to)

      return {
        from,
        to,
        severity: 'error',
        message: err.message ?? 'VTT parsing error',
      }
    })

    return diagnostics
  },
  {
    delay: 100,
  },
)
