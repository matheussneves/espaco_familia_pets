import Container from "../../components/Container";

import useDadosDeLocais from "../../useDadosDeLocais";
import Titulo from "../../components/Titulo";
import Rodape from "../../components/Rodape";
import Filtro from "./Filtro";
import Menu from "../../components/Menu";
import GridLugares from "../../components/GridLugares";

export default function Pesquisa() {
  const { dados: locais, erro: locaisErro } = useDadosDeLocais();

  if ( locaisErro) {
    console.log("Ocorreu um erro na requisição")
  }
  console.log(locais)
  return (
    <>
      <Menu />
      <Filtro />
      <Container>
      <GridLugares locais={locais} > Resultado:</GridLugares>
      </Container>
      <Rodape />
    </>
  );
}


