import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <span className={styles.brand}>Samuel & Otavio</span>
            <nav>
                <NavLink to="/AulaPW-React" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Home</NavLink>
                <NavLink to="/sobre" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Sobre</NavLink>
                <NavLink to="/projetos" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Projetos</NavLink>
                <NavLink to="/contatos" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Contatos</NavLink>
            </nav>
        </header>
    )
}

export default Header