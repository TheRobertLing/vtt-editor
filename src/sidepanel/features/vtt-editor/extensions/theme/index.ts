import { EditorView } from '@codemirror/view'
import { HighlightStyle, type TagStyle, syntaxHighlighting } from '@codemirror/language'
import { tags as t } from '@lezer/highlight'

// https://github.com/vadimdemedes/thememirror/blob/main/source/create-theme.ts

const settings = {
  background: 'var(--color-card)',
  foreground: 'var(--color-card-foreground)',
  caret: 'var(--color-primary)',
  selection: 'var(--color-accent)',
  gutterBackground: 'var(--color-sidebar)',
  gutterForeground: 'var(--color-sidebar-foreground)',
  lineHighlight: 'var(--color-muted)',
}

const styles: TagStyle[] = [
  {
    tag: t.comment,
    color: '#404080',
  },
  {
    tag: [t.string, t.regexp],
    color: '#999999',
  },
  {
    tag: t.number,
    color: '#7090B0',
  },
  {
    tag: [t.bool, t.null],
    color: '#8080A0',
  },
  {
    tag: [t.punctuation, t.derefOperator],
    color: '#805080',
  },
  {
    tag: t.keyword,
    color: '#60B0FF',
  },
  {
    tag: t.definitionKeyword,
    color: '#B0FFF0',
  },
  {
    tag: t.moduleKeyword,
    color: '#60B0FF',
  },
  {
    tag: t.operator,
    color: '#A0A0FF',
  },
  {
    tag: [t.variableName, t.self],
    color: '#008080',
  },
  {
    tag: t.operatorKeyword,
    color: '#A0A0FF',
  },
  {
    tag: t.controlKeyword,
    color: '#80A0FF',
  },
  {
    tag: t.className,
    color: '#70E080',
  },
  {
    tag: [t.function(t.propertyName), t.propertyName],
    color: '#50A0A0',
  },
  {
    tag: t.tagName,
    color: '#009090',
  },
  {
    tag: t.modifier,
    color: '#B0FFF0',
  },
  {
    tag: [t.squareBracket, t.attributeName],
    color: '#D0D0FF',
  },
]

export const theme = () => {
  const theme = EditorView.theme({
    '&': {
      backgroundColor: settings.background,
      color: settings.foreground,
    },
    '.ͼ1.cm-focused': {
      outline: 'none !important',
      boxShadow: 'none !important',
    },
    '.cm-content': {
      caretColor: settings.caret,
    },
    '.cm-cursor, .cm-dropCursor': {
      borderLeftColor: settings.caret,
    },
    '&.cm-focused .cm-selectionBackgroundm .cm-selectionBackground, .cm-content ::selection': {
      backgroundColor: settings.selection,
    },
    '.cm-activeLine': {
      backgroundColor: settings.lineHighlight,
    },
    '.cm-gutters': {
      backgroundColor: settings.gutterBackground,
      color: settings.gutterForeground,
      borderRight: '1px solid var(--color-border)',
      border: '0px solid var(--color-border)',
    },
    '.cm-activeLineGutter': {
      backgroundColor: settings.lineHighlight,
    },
  })

  const highlightStyle = HighlightStyle.define(styles)
  const extension = [theme, syntaxHighlighting(highlightStyle)]

  return extension
}
