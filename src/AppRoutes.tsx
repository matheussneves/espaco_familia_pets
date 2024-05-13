import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pesquisa from "./pages/Pesquisa";

function AppRoutes(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Pesquisa" element={<Pesquisa/>}/>
        </Routes>
        
        </BrowserRouter>
    )
}

export default AppRoutes;