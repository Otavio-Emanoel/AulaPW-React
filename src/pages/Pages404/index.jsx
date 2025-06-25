import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Container from "../../components/Container"
import imagem_404 from "/error-404.jpg"
import styles from "./Page404.module.css"
import { Link } from "react-router-dom"

function Page404() {
    return (
        <>
            <Header />
            <Container>
                <div className={styles.errorContainer}>
                    <h1 className={styles.errorTitle}>404</h1>
                    <p className={styles.errorMsg}>
                        Opa! Parece que você se perdeu no espaço...<br />
                        <span className={styles.sadFace}>:(</span>
                    </p>
                    <img className={styles.errorImage} src={imagem_404} alt="Erro 404" />
                    <Link to="/AulaPW-React" className={styles.errorBtn}>
                        Voltar ao início
                    </Link>
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default Page404