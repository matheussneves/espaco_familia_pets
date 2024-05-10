import styled from 'styled-components';
import logo from './assets/logo.png';
import perfil from './assets/perfil.png';

const CabecalhoEstilizado = styled.header`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em 4em
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-grow: .1;
`

const LinkEstilizado = styled.a`
 color: var(--azul-escuro);
 font-weight: 700;
`

function Cabecalho() {
    return (
        <CabecalhoEstilizado>
            <img src={logo} alt="logo da empresa Voll" />
            <Container>
            <label id="lugares">Tipos de lugares:</label>

            <select name="lugares" id="lugares">
              <option value="Bar">Bar</option>
              <option value="Cafetaria">Cafetaria</option>
              <option value="Cinema">Cinema</option>
              <option value="Espaço Cultural">Espaço Cultural</option>
              <option value="Espaço Gastronomico">Espaço Gastronomico</option>
              <option value="Hamburgueria">Hamburgueria</option>
              <option value="Loja">Loja</option>
              <option value="Padaria">Padaria</option>
              <option value="Parque">Parque</option>
              <option value="Restaurante">Restaurante</option>
              <option value="Shopping">Shopping</option>
              <option value="Sorveteria">Sorveteria</option>
            </select>
            </Container>
            <Container>
            <label id="cars">Aceita Crianças:</label>
            <input type="checkbox"  />
            </Container>
            <Container>
            <label id="cars">Aceita pets:</label>

            <input type="checkbox"  />
            </Container>
            <Container>
            <label id="cars">Área para trocar e amamentar:</label>

            <input type="checkbox"  />
            </Container>
            <Container>
            <label id="cars">Espaço Pets:</label>

            <input type="checkbox"  />
            </Container>
            <Container>
            <label id="cars">Espaço Kids:</label>

            <input type="checkbox"  />
            </Container>
           {/*} <Container>
                <img src={perfil} alt="imagem de perfil do usuário" />
                <LinkEstilizado href="#">Sair</LinkEstilizado>
    </Container>*/}
        </CabecalhoEstilizado>
    )
}

export default Cabecalho;