import { Link, useLocation } from 'react-router-dom'

import styles from '../styles/Nav.module.css'

const links = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/about',
    label: 'About',
  },
]

const Nav = () => {
  const { pathname } = useLocation()

  return (
    <nav className={styles.nav}>
      <ul>
        {links.map(({ path, label }) => (
          <li key={path} className={pathname === path ? styles.active : ''}>
            <Link to={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
