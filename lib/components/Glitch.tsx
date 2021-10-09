import styles from '../../styles/Glitch.module.css'
import {CSSProperties} from 'react'

const Glitch: (props: {
  children: string
  color?: string
  fontSize?: string
  style?: CSSProperties
  className?: string
  onClick?: () => void
}) => JSX.Element = ({
  children,
  color = 'whitesmoke',
  fontSize = '42px',
  style = {},
  className = null,
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
