import './App.css';
import Avaliacao from './components/Avaliacao';
import Botao from './components/Botao';
import Cabecalho from './components/Cabecalho';
import Filtros from './components/Filtros';
import Container from './components/Container';
import Rodape from './components/Rodape';
import Subtitulo from './components/Subtitulo';
import Titulo from './components/Titulo';
import useDadosDeLocais from './useDadosDeLocais';

function Pesquisa() {
  const { dados: locais, erro: locaisErro } = useDadosDeLocais();

  if ( locaisErro) {
    console.log("Ocorreu um erro na requisição")
  }

  return (
    <>
      <Cabecalho />
      <Filtros />
      <Container>
      <Titulo imagem="">Melhores locais:</Titulo>
      <Avaliacao locais={locais} />
      </Container>
      <Rodape />
    </>
  );
}

export default Pesquisa;
