import React from 'react'
import styles from '../../styles/Glitch.module.css'
import {GlitchProps} from '../@types'

const Glitch: (props: GlitchProps) => JSX.Element = ({
  children = 'React Glitch Text',
  color = 'whitesmoke',
  fontSize = '42px',
}) => {
  return (
    <p className={styles.item} style={{color, fontSize}}>
      <span aria-hidden='true'>{children}</span>
      {children}
      <span aria-hidden='true'>{children}</span>
    </p>
  )
}

export default Glitch
