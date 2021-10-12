import {CSSProperties, MouseEventHandler} from 'react'

export interface GlitchProps {
  children: string
  color?: string
  fontSize?: string
  className?: string
  style?: CSSProperties
  onClick?: MouseEventHandler<HTMLParagraphElement>
}
