import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Container from "../../components/Container"
import styles from "./Contato.module.css"

function Contato() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.contatoSection}>
                    <h1 className={styles.titulo}>
                        <span role="img" aria-label="Contato">📬</span> Fale Conosco
                    </h1>
                    <p className={styles.subtitulo}>
                        Tem alguma dúvida, sugestão ou quer apenas bater um papo? Preencha o formulário ou use nossas redes!
                    </p>
                    <form className={styles.formContato} autoComplete="off" onSubmit={e => e.preventDefault()}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome" name="nome" placeholder="Seu nome" required />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" name="email" placeholder="seu@email.com" required />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="mensagem">Mensagem</label>
                            <textarea id="mensagem" name="mensagem" rows={4} placeholder="Digite sua mensagem..." required />
                        </div>
                        <button className={styles.btnEnviar} type="submit">
                            Enviar
                            <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </button>
                    </form>
                    <div className={styles.redes}>
                        <a href="mailto:otabrue6@gmail.com" title="E-mail" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Email" />
                        </a>
                        <a href="https://github.com/Otavio-Emanoel" title="GitHub" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                        </a>
                        <a href="https://www.instagram.com/2.ds25/" title="Instagram" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" alt="Instagram" />
                        </a>
                    </div>
                </section>
            </Container>
            <Footer />
        </>
    )
}

export default Contato