import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
function Sobre() {
    return (
        <>
            <Header />
            <Container children={
                <>
                    <h1>Sobre</h1>
                    <p>Somos Otavio e Samuel</p>
                </>
            } />
            <Footer />
        </>
    )
}
export default Sobre