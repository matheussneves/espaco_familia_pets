 
import Container from "../../components/Container";
import useDadosDeLocais from "../../useDadosDeLocais";
import Rodape from "../../components/Rodape";
import Menu from "../../components/Menu";
import Slide from "../../components/Carousel";
import GridLugares from "../../components/GridLugares";




export default function Home() {
  const { dados: locais, erro: locaisErro } = useDadosDeLocais('');

  return (
    <>
      <Menu />
      <Slide locais={locais} banners={10}/>
      <Container>
      <GridLugares locais={locais} cards={8}> Lugares:</GridLugares>
      </Container>
      <Rodape />
    </>
  )
}


