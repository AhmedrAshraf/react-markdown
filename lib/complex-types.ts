import type {ReactNode, ComponentType} from 'react'
import type {Position} from 'unist'
import type {Element} from 'hast'

/* File for types which are not handled correctly in JSDoc mode */

export interface ReactMarkdownProps {
  node: Element
  children: ReactNode[]
  /**
   * Passed when `options.rawSourcePos` is given
   */
  sourcePosition?: Position
  /**
   * Passed when `options.includeElementIndex` is given
   */
  index?: number
  /**
   * Passed when `options.includeElementIndex` is given
   */
  siblingCount?: number
}

export type NormalComponents = {
  [TagName in keyof JSX.IntrinsicElements]:
    | keyof JSX.IntrinsicElements
    | ComponentType<JSX.IntrinsicElements[TagName] & ReactMarkdownProps>
}
