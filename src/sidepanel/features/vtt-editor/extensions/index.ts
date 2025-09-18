import {
  EditorView,
  lineNumbers,
  highlightActiveLine,
  highlightActiveLineGutter,
  highlightSpecialChars,
  drawSelection,
  dropCursor,
  rectangularSelection,
  crosshairCursor,
} from '@codemirror/view'
import { keymap } from '@codemirror/view'
import { EditorState } from '@codemirror/state'
import { defaultKeymap, history, historyKeymap } from '@codemirror/commands'
import { highlightSelectionMatches, searchKeymap } from '@codemirror/search'
import { lintGutter, lintKeymap } from '@codemirror/lint'
import {
  bracketMatching,
  indentOnInput,
  HighlightStyle,
  syntaxHighlighting,
} from '@codemirror/language'
import {
  autocompletion,
  closeBrackets,
  closeBracketsKeymap,
  completionKeymap,
} from '@codemirror/autocomplete'
import { tags as t } from '@lezer/highlight'

/**
 * Theme and Highlighting
 */

const colors = {
  background: 'var(--color-card)',
  foreground: 'var(--color-card-foreground)',
  caret: 'var(--color-primary)',
  selection: 'var(--color-accent)',
  gutterBackground: 'var(--color-sidebar)',
  gutterForeground: 'var(--color-sidebar-foreground)',
  lineHighlight: 'var(--color-muted)',
  border: 'var(--color-border)',
  popover: 'var(--color-popover)',
  popoverForeground: 'var(--color-popover-foreground)',
  accentMuted: 'var(--color-accent-muted, #72a1ff59)',
  secondary: 'var(--color-secondary, #bad0f847)',
  mutedForeground: 'var(--color-muted-foreground, #ddd)',
  warning: 'var(--color-warning, #eab308)',
  info: 'var(--color-info, #38bdf8)',
  success: 'var(--color-success, #22c55e)',
  destructive: 'var(--color-destructive, #ef4444)',
}
const customTheme = EditorView.theme({
  '&': {
    color: colors.foreground,
    backgroundColor: colors.background,
  },
  '&.cm-focused': {
    outline: 'none',
  },

  '.cm-content': {
    caretColor: colors.caret,
    padding: '0 0',
  },

  '.cm-cursor, .cm-dropCursor': { borderLeftColor: colors.caret },
  '&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
    {
      backgroundColor: colors.selection,
    },

  '.cm-panels': {
    backgroundColor: colors.popover,
    color: colors.popoverForeground,
  },
  '.cm-panels.cm-panels-top': { borderBottom: `2px solid ${colors.border}` },
  '.cm-panels.cm-panels-bottom': { borderTop: `2px solid ${colors.border}` },

  '.cm-searchMatch': {
    backgroundColor: colors.accentMuted,
    outline: `1px solid ${colors.caret}`,
  },
  '.cm-searchMatch.cm-searchMatch-selected': {
    backgroundColor: colors.selection,
  },

  '.cm-activeLine': { backgroundColor: colors.lineHighlight },
  '.cm-selectionMatch': { backgroundColor: colors.accentMuted },

  '&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket': {
    backgroundColor: colors.secondary,
  },

  '.cm-gutters': {
    backgroundColor: colors.gutterBackground,
    color: colors.gutterForeground,
    borderRight: `1px solid ${colors.border}`,
  },

  '.cm-activeLineGutter': {
    backgroundColor: colors.lineHighlight,
  },

  '.cm-foldPlaceholder': {
    backgroundColor: 'transparent',
    border: 'none',
    color: colors.mutedForeground,
  },

  '.cm-tooltip': {
    border: 'none',
    backgroundColor: colors.popover,
    color: colors.popoverForeground,
  },
  '.cm-tooltip .cm-tooltip-arrow:before': {
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  '.cm-tooltip .cm-tooltip-arrow:after': {
    borderTopColor: colors.popover,
    borderBottomColor: colors.popover,
  },
  '.cm-tooltip-autocomplete': {
    '& > ul > li[aria-selected]': {
      backgroundColor: colors.lineHighlight,
      color: colors.foreground,
    },
  },
})

const customHighlightStyle = HighlightStyle.define([
  { tag: t.keyword, color: colors.caret },
  { tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName], color: colors.foreground },
  { tag: [t.function(t.variableName), t.labelName], color: colors.caret },
  { tag: [t.color, t.constant(t.name), t.standard(t.name)], color: colors.warning },
  { tag: [t.definition(t.name), t.separator], color: colors.foreground },
  {
    tag: [
      t.typeName,
      t.className,
      t.number,
      t.changed,
      t.annotation,
      t.modifier,
      t.self,
      t.namespace,
    ],
    color: colors.info,
  },
  {
    tag: [t.operator, t.operatorKeyword, t.url, t.escape, t.regexp, t.link, t.special(t.string)],
    color: colors.caret,
  },
  { tag: [t.meta, t.comment], color: colors.lineHighlight },
  { tag: t.strong, fontWeight: 'bold' },
  { tag: t.emphasis, fontStyle: 'italic' },
  { tag: t.strikethrough, textDecoration: 'line-through' },
  { tag: t.link, color: colors.lineHighlight, textDecoration: 'underline' },
  { tag: t.heading, fontWeight: 'bold', color: colors.caret },
  { tag: [t.atom, t.bool, t.special(t.variableName)], color: colors.success },
  { tag: [t.processingInstruction, t.string, t.inserted], color: colors.selection },
  { tag: t.invalid, color: colors.destructive },
])

/**
 * Linting and Syntax
 */

export const extensions = [
  lineNumbers(),
  highlightActiveLineGutter(),
  highlightSpecialChars(),
  history(),
  drawSelection(),
  dropCursor(),
  EditorState.allowMultipleSelections.of(true),
  indentOnInput(),
  bracketMatching(),
  closeBrackets(),
  autocompletion(),
  rectangularSelection(),
  crosshairCursor(),
  highlightActiveLine(),
  highlightSelectionMatches(),
  keymap.of([
    ...closeBracketsKeymap,
    ...defaultKeymap,
    ...searchKeymap,
    ...historyKeymap,
    ...completionKeymap,
    ...lintKeymap,
  ]),
  lintGutter(),
  EditorView.lineWrapping,
  customTheme,
  syntaxHighlighting(customHighlightStyle),
]
