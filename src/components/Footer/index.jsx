import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <span>Turminha 2DS &copy; {new Date().getFullYear()}</span>
                <nav>
                    <a href="https://github.com/Otavio-Emanoel/AulaPW-React" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className={styles.icon} />
                    </a>
                    <a href="mailto:otabrue6@gmail.com" title="Contato por email">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Email" className={styles.icon} />
                    </a>
                    <a href="https://www.instagram.com/2.ds25/" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" alt="Instagram" className={styles.icon} />
                    </a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer