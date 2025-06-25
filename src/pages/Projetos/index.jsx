import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Container from "../../components/Container"
import styles from "./Projetos.module.css"

const projetosOtavio = [
    {
        nome: "GoLocal",
        link: "https://github.com/Otavio-Emanoel/GoLocal",
        tecnologias: "React Native Expo & TypeScript",
        descricao: "Aplicativo para conectar moradores e turistas da cidade de Peruíbe com os principais pontos de turismo. Com sistema de salvamento de locais favoritos, pontos exibidos no mapa, e informações detalhadas sobre cada local com capacidade de perguntas usando IA.",
        image: "https://raw.githubusercontent.com/Otavio-Emanoel/GoLocal/refs/heads/main/src/assets/icon.png"
    },
    {
        nome: "BeautyHub",
        link: "https://github.com/Otavio-Emanoel/BeautyHub",
        tecnologias: "TypeScript & NextJS",
        descricao: "BeautyHub é uma plataforma completa para agendamento de serviços de beleza, desenvolvida com TypeScript e Next.js (App Router). O sistema oferece experiências personalizadas para clientes, profissionais e administradores de salões, com interface moderna e navegação intuitiva.",
        image: "https://raw.githubusercontent.com/Otavio-Emanoel/BeautyHub/refs/heads/master/frontend/public/favicon.png"
    },
    {
        nome: "LoveYou",
        link: "https://github.com/Otavio-Emanoel/LoveYou",
        tecnologias: "React Native (TS)",
        descricao: "Aplicativo de mensagens fofas, quiz de perguntas, contador de histórias com IA do gemini e tocador de músicas. Desenvolvido em React Native em TypeScript.",
        image: "https://github.com/Otavio-Emanoel/LoveYou/blob/main/assets/images/icon.png?raw=true"
    },
    {
        nome: "Jademo-Studio",
        link: "https://github.com/Otavio-Emanoel/Jademo-Studio",
        tecnologias: "Monaca.io, MIT License",
        descricao: "Aplicativo mobile criado com Monaca.io, que conta com uma camera com filtros e inclusão do media pipe para reconhecimento facial e chatbot para interação com o usuário.",
        image: "https://raw.githubusercontent.com/Otavio-Emanoel/Jademo-Studio/refs/heads/master/www/assets/JademoStudioLogo.png"
    },
    {
        nome: "MecanicaForm",
        link: "https://github.com/Otavio-Emanoel/MecanicaForm",
        tecnologias: "Windows Forms C#",
        descricao: "Sistema desktop para oficinas mecânicas, com cadastro de clientes, veículos e serviços.",
        image: "https://raw.githubusercontent.com/Otavio-Emanoel/MecanicaForm/refs/heads/main/MecanicaForm/Resources/Mano%20Power1.png"
    },
    {
        nome: "AppNamoro",
        link: "https://github.com/Otavio-Emanoel/AppNamoro",
        tecnologias: "React Native (JS)",
        descricao: "App de parabenização de namoro, desenvolvido em React Native com JavaScript.",
        image: "https://github.com/Otavio-Emanoel/AppNamoro/blob/main/src/assets/icone.png?raw=true"
    },
    {
        nome: "AulaPW-React",
        link: "https://github.com/Otavio-Emanoel/AulaPW-React",
        tecnologias: "JavaScript, React",
        descricao: "Projeto de estudos em React, com exemplos de rotas, componentes e deploy no GitHub Pages.",
        image: "https://raw.githubusercontent.com/Otavio-Emanoel/AulaPW-React/refs/heads/main/public/Logo.ico"
    },
    {
        nome: "AulaReact_PW_Deploy",
        link: "https://github.com/Otavio-Emanoel/AulaReact_PW_Deploy",
        tecnologias: "React, Vercel Deploy",
        descricao: "Exemplo de deploy de aplicação React utilizando Vercel, com estrutura simples e responsiva.",
        image: "https://raw.githubusercontent.com/Otavio-Emanoel/AulaPW-React/refs/heads/main/public/Logo.ico"
    },
    {
        nome: "AnyBuy",
        link: "https://github.com/Otavio-Emanoel/AnyBuy",
        tecnologias: "EJS",
        descricao: "Marketplace simples feito com Node.js e EJS, para compra e venda de produtos.",
        image: "https://raw.githubusercontent.com/Otavio-Emanoel/AulaPW-React/refs/heads/main/public/Logo.ico"
    },
    
];

function Projetos() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.projetosSection}>
                    <h1 className={styles.titulo}>Projetos em Destaque</h1>
                    
                    <h2 className={styles.subtitulo}>Projetos do Otavio</h2>
                    <div className={styles.gridProjetos}>
                        {projetosOtavio.map((proj) => (
                            <div className={styles.projetoCard} key={proj.nome}>
                                <div className={styles.imgContainer}>
                                    <img src={proj.image} alt={proj.nome} />
                                </div>
                                <div className={styles.infoProjeto}>
                                    <h3>{proj.nome}</h3>
                                    <span className={styles.tecnologias}>{proj.tecnologias}</span>
                                    <p className={styles.descricao}>{proj.descricao}</p>
                                </div>
                                <a href={proj.link} target="_blank" rel="noopener noreferrer" className={styles.btnAcessar}>
                                    Ver no GitHub
                                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className={styles.samuelSection}>
                        <h2 className={styles.subtitulo}>Projetos do Samuel</h2>
                        <p className={styles.semProjetos}>Ainda não há projetos públicos cadastrados para o Samuel.</p>
                    </div>
                </section>
            </Container>
            <Footer />
        </>
    )
}

export default Projetos