import styles from './Home.module.css'
import imageFigure from '/image-1.svg'
import Header from '../../components/Header'
import Footer from '../../components/Footer'



function Home() {
    return (
        <>
            <Header />

            <section className={styles.container} >
                <div className='apresentacao'>
                    <p>
                        Olá, somos <br />
                        <span>Otavio e Samuel</span> <br />
                        Devs Full Stack
                    </p>
                    <button className='btn btn-red'>
                        Saiba mais sobre nós!
                    </button>
                </div>
                <figure>
                    <img className='img-home' src={imageFigure} alt="Imagem1" />
                </figure>
            </section>

            <Footer />
        </>
    )
}

export default Home