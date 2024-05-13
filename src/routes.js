import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import Pesquisa from "./Pesquisa";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Pesquisa }  path="/pesquisa" />
       </BrowserRouter>
   )
}

export default Routes;