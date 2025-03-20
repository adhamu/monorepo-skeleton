import styles from '../styles/Container.module.css'

import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Container = ({ children }: Props) => (
  <div className={styles.container}>{children}</div>
)

export default Container
