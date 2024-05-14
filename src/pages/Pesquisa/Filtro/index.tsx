import styled from "styled-components"
import pesquisa from './assets/search.png';
import pin from './assets/pin.png'
import { Grid, Row, Col } from 'rsuite';

interface Props {
    imagem?: string,
}

const CampoDigitacao = styled.input<Props>`
padding: 16px 16px 16px 30px;
background-image: url('${props => props.imagem === 'pesquisa' ? pesquisa : pin}');
background-repeat: no-repeat;
background-color: var(--cinza-claro);
background-position: 10px;
box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
border-radius: 8px;
border: none;
width: 40%;
::placeholder {
    color: var(--cinza-escuro);
    font-family: var(--fonte-principal)
}
`

const Container = styled.section`
background: var(--branco);
box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.15);
border-radius: 8px;
padding: 2em 5em;
text-align: center;
margin: 3em 0;
`

const Botao = styled.button`
padding: 12px 16px;
background-color: var(--azul-escuro);
border-radius: 8px;
border: none;
color: var(--branco);
`

const ContainerFormulario = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`

const Titulo = styled.h2`
font-family: var(--fonte-principal);
font-style: normal;
font-weight: 700;
font-size: 18px;
margin: 1em;
line-height: 22px;
color: var(--cinza);
`
const TituloFiltro = styled.h2`
font-family: var(--fonte-principal);
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 22px;
color: var(--cinza);
text-align: left;
`

const Lista = styled.ul`
display: flex;
`

const ItemLista = styled.li`
background-color: var(--branco);
color: var(--cinza);
padding: 8px 8px;
list-style-type: none;
font-size: 14px;
line-height: 16px;
border-radius: 4px;

box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.06);
text-align: center;
margin: 1em 0em 1em 0.5em;

`

export default function Formulario() {
    return (
        <Container>
            <ContainerFormulario>
                <CampoDigitacao placeholder={'Digite o tipo de estabelecimento'} imagem={'pesquisa'} />
                <CampoDigitacao placeholder={'Digite sua localização'} imagem={'pin'} />
                <Botao>Buscar</Botao>
            </ContainerFormulario>
            <Titulo>Use os filtros abaixo para encontrar o lugar perfeito para visitar hoje:</Titulo>
            <Grid fluid>
            <TituloFiltro>Para os pets:</TituloFiltro>
                <Row gutter={1}>
                    <Col xs={22} sm={12} md={12} lg={9} xl={6} xxl={3}>
                        <ItemLista>
                            <label id="cars">Aceita pets: </label>
                            <input type="checkbox"  />
                        </ItemLista>
                    </Col>
                    <Col xs={22} sm={12} md={12} lg={9} xl={6} xxl={3}>
                        <ItemLista>
                            <label id="cars">Espaço Pets: </label>
                            <input type="checkbox"  />
                        </ItemLista>
                    </Col>
                </Row>
                <TituloFiltro>Para as crianças:</TituloFiltro>
                <Row gutter={1}>
                    <Col xs={22} sm={12} md={12} lg={9} xl={6} xxl={3}>
                        <ItemLista>
                        <label id="cars">Aceita Crianças: </label>
                        <input type="checkbox"  />
                        </ItemLista>
                    </Col>
                    <Col xs={22} sm={12} md={12} lg={9} xl={6} xxl={3}>
                        <ItemLista>
                            <label id="cars">Trocador: </label>
                            <input type="checkbox"  />
                        </ItemLista>
                    </Col>
                    <Col xs={22} sm={12} md={12} lg={9} xl={6} xxl={3}>
                        <ItemLista>
                            <label id="cars">Espaço Kids: </label>
                            <input type="checkbox"  />
                        </ItemLista>
                    </Col>
                </Row>
            </Grid>
            
        </Container>
    )
}