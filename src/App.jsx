import './App.css'
import Header from './components/Header/index'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      
      <section className='container'>
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
                <img className='img-home' src="/image-1.svg" alt="Imagem1" />
            </figure>
        </section>
      
      <Footer />
    </>
  )
}

export default App
