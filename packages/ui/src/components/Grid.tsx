import styles from '../styles/Grid.module.css'

import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  columns?: 2 | 3
}

const Grid = ({ children, columns = 3 }: Props) => (
  <div className={styles[`grid${columns}`]}>{children}</div>
)

export default Grid
