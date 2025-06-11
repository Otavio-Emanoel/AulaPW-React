import styles from './Home.module.css'
import imageFigure from '/image-1.svg'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import Container from '../../components/Container'


function Home() {
    return (
        <>
            <Header />

            <Container children={
                <section className={styles.home} >
                    <div className='apresentacao'>
                        <p>
                            Olá, somos <br />
                            <span>Otavio e Samuel</span> <br />
                            Devs Full Stack
                        </p>
                        <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
                            Saiba mais sobre nós!
                        </Link>
                    </div>
                    <figure>
                        <img className='img-home' src={imageFigure} alt="Imagem1" />
                    </figure>
                </section>
            } />

            <Footer />
        </>
    )
}

export default Home