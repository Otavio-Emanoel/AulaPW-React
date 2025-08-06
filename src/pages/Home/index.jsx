import styles from './Home.module.css'
import imageFigure from '/image-1.svg'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import Modal from '../../components/Modal'
import { useEffect, useState } from 'react'

function Home() {
    const [likes, setLikes] = useState(0);
    const [showModal, setShowModal] = useState(false);

    function handleLike() {
        setLikes(likes + 1);
        console.log(`Quantidade de likes: ${likes + 1}`);
    }

    useEffect(() => {
        if (likes === 10) {
            setShowModal(true);
        }
    }, [likes]);

    function handleCloseModal() {
        setShowModal(false);
        setLikes(0);
    }

    return (
        <>
            <Header />
            <Container>
                <section className={styles.home}>
                    <div className={styles.glass}>
                        <div className={styles.apresentacao}>
                            <h1>
                                <span role="img" aria-label="Rocket">🚀</span> Olá, somos <span>Otavio & Samuel</span>
                            </h1>
                            <h2>Devs Full Stack & Criadores de Soluções</h2>
                            <p>
                                <span className={styles.destaque}>Apaixonados por tecnologia</span>, inovação e desenvolvimento web.<br />
                                Confira nossos projetos, conecte-se e faça parte dessa jornada!
                            </p>
                            <Link to="/sobre" className={styles.btn_red}>
                                <span>Saiba mais sobre nós!</span>
                                <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </Link>
                        </div>
                        <figure className={styles.figure}>
                            <img className={styles.img_home} src={imageFigure} alt="Dev Illustration" />
                        </figure>
                    </div>
                </section>
                <div className={styles.like_container}>
                    <button className={styles.like} onClick={handleLike}>
                        <img src="https://cdn-icons-png.flaticon.com/512/7626/7626718.png" />
                    </button>
                    <p className={styles.like_text}>Quantidade de likes: {likes}</p>
                </div>
                <Modal isOpen={showModal} onClose={handleCloseModal}>
                    <div className={styles.modalContent}>
                        <h2>Obrigado pelo seu apoio!</h2>
                        <p>Você é incrível por nos ajudar a alcançar 10 likes!</p>
                    </div>
                </Modal>
            </Container>
            <Footer />
        </>
    )
}

export default Home