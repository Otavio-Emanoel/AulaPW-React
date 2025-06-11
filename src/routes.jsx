import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import Sobre from "./pages/Sobre/index";
import Projetos from "./pages/Projetos/index";
import Contatos from "./pages/Contato/index";
import Page404 from "./pages/Pages404";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/AulaPW-React" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/contatos" element={<Contatos />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
