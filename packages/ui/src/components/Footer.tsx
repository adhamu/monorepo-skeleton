import Container from './Container'

import styles from '../styles/Footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <Container>&copy; {new Date().getFullYear()}</Container>
  </footer>
)

export default Footer
