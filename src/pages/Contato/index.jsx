import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Container from "../../components/Container"

function Contato() {
    return (
        <>
            <Header />
            <Container children={
                <>
                    <h1>Contato</h1>
                    <p>Entre em contato conosco</p>
                </>
            } />
            <Footer />
        </>
    )
}

export default Contato