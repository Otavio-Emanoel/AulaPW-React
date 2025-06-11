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
            <Container children={
                <>
                    <h1>Page404</h1>
                    <p>Pagina não encontrada</p>
                    <img className={`${styles.errorImage}`} src={imagem_404} />
                    <Link to="/AulaPW-React" className={`${styles.errorBtn}`}>Voltar ao início</Link>
                </>
            } />
            <Footer />
        </>
    )
}

export default Page404