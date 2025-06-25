import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import styles from './Sobre.module.css'

function Sobre() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.sobreCard}>
                    <h1 className={styles.titulo}>
                        <span>Sobre Nós</span>
                    </h1>
                    <p className={styles.texto}>
                        Somos <strong>Otavio</strong> e <strong>Samuel</strong>, estudantes apaixonados por tecnologia, programação e inovação.<br /><br />
                        Nosso objetivo é criar soluções criativas e funcionais para o mundo real, sempre aprendendo e evoluindo como <span className={styles.destaque}>Devs Full Stack</span>.<br /><br />
                        Aqui você encontra nossos projetos, experiências e um pouco da nossa jornada no universo do desenvolvimento web!
                    </p>
                    <div className={styles.devs}>
                        <div className={styles.devCard}>
                            <img src="https://avatars.githubusercontent.com/u/180762238?v=4" alt="Otavio" />
                            <span>Otavio Emanoel</span>
                        </div>
                        <div className={styles.devCard}>
                            <img src="https://ui-avatars.com/api/?name=Samuel&background=E94560&color=fff" alt="Samuel" />
                            <span>Samuel Santana</span>
                        </div>
                    </div>
                </section>
            </Container>
            <Footer />
        </>
    )
}

export default Sobre