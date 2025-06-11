import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Container from "../../components/Container"

function Projetos() {
    return (
        <>
            <Header />
            <Container children={
                <>
                    <h1>Projetos</h1>
                    <p>Projetos bem legais</p>
                </>
            } />
            <Footer />
        </>
    )
}

export default Projetos