import Container from './Container'

import styles from '../styles/Header.module.css'

interface Props {
  response: string
}

const Header = ({ response }: Props) => (
  <header className={styles.header}>
    <Container>
      <p>
        <strong>My App - {response}</strong>
      </p>
    </Container>
  </header>
)

export default Header
