import React from 'react'
import styles from '../../styles/Glitch.module.css'
import {GlitchProps} from '../@types'

const Glitch: (props: GlitchProps) => JSX.Element = ({
  children,
  color = 'whitesmoke',
  fontSize = '42px',
  className = '',
  style = {},
  onClick = () => null,
}) => {
  return (
    <p
      className={`${styles.item}${className ? ` ${className}` : ''}`}
      style={{color, fontSize, ...style}}
      onClick={onClick}>
      <span aria-hidden='true'>{children}</span>
      {children}
      <span aria-hidden='true'>{children}</span>
    </p>
  )
}

export default Glitch
