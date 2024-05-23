 
import styled from "styled-components"
import pesquisa from './assets/search.png';
import pin from './assets/pin.png'
import { Grid, Row, Col, Checkbox } from 'rsuite';
import GridLugares from "../../../components/GridLugares";
import { SetStateAction, useState } from "react";
import useDadosDeLocais from "../../../useDadosDeLocais";


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
margin: 0em 0 3em 0;
`
const Containerx = styled.section`
background: var(--branco);
margin: 0em 0 3em 0;
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
function convertebool(bool : boolean){if (bool === true) { return "Sim"} else { return "Não"}}

export default function Formulario() {
    //const { dados: locais } = 
    const titulo = ""//"Resultado:"
    const [aceita_criancasisChecked, aceita_criancassetIsChecked] = useState(true);
    const aceita_criancashandleOnChange = () => {
        aceita_criancassetIsChecked(!aceita_criancasisChecked);
    };
    const [aceita_petsisChecked, aceita_petssetIsChecked] = useState(true);
    const aceita_petshandleOnChange = () => {
        aceita_petssetIsChecked(!aceita_petsisChecked);
    };
    const [espaco_petsisChecked, espaco_petssetIsChecked] = useState(true);
    const espaco_petshandleOnChange = () => {
        espaco_petssetIsChecked(!espaco_petsisChecked);
    };
    const [espaco_kidsisChecked, espaco_kidssetIsChecked] = useState(true);
    const espaco_kidshandleOnChange = () => {
        espaco_kidssetIsChecked(!espaco_kidsisChecked);
    };
    const [banheiro_trocadorisChecked, banheiro_trocadorsetIsChecked] = useState(true);
    const banheiro_trocadorandleOnChange = () => {
        banheiro_trocadorsetIsChecked(!banheiro_trocadorisChecked);
    };
    const [nomevalor, nomesetValor] = useState('');
    const nomehandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
          nomesetValor(event.target.value);
    };
    const [tplugarvalor, tplugarsetValor] = useState('');
    const tplugarhandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
                tplugarsetValor(event.target.value);
    };
    const [quervalor, quersetValor] = useState(`?nome=${nomevalor}&tipo_lugar=${tplugarvalor}&aceita_criancas=${convertebool(aceita_criancasisChecked)}&aceita_pets=${convertebool(aceita_petsisChecked)}&espaco_pets=${convertebool(espaco_petsisChecked)}&espaco_kids=${convertebool(espaco_kidsisChecked)}&banheiro_trocador=${convertebool(banheiro_trocadorisChecked)}`);


    return (
        <Containerx>
            <Container>
            <ContainerFormulario>
                <CampoDigitacao placeholder={'Digite o tipo de estabelecimento'} imagem={'pesquisa'} onChange={nomehandleChange} />
                <CampoDigitacao placeholder={'Digite sua localização'} imagem={'pin'}  onChange={tplugarhandleChange}/>
                <Botao onClick={() => quersetValor(`nome=${nomevalor}&tipo_lugar=${tplugarvalor}&aceita_criancas=${aceita_criancasisChecked}&aceita_pets=${aceita_petsisChecked}&espaco_pets=${espaco_petsisChecked}&espaco_kids=${espaco_kidsisChecked}&banheiro_trocador=${banheiro_trocadorisChecked}`)}  >Buscar</Botao>
            </ContainerFormulario>
            <Titulo>Use os filtros abaixo para encontrar o lugar perfeito para visitar hoje:</Titulo>
            <Grid fluid>
                <Row gutter={1}>
                    <Col xs={22} sm={12} md={12} lg={10} xl={10} xxl={10}>
                    <label>Para os pets:</label>
                        <Checkbox onChange={aceita_petshandleOnChange}>Aceita pets</Checkbox>
                        <Checkbox onChange={espaco_petshandleOnChange}>Espaço Pets</Checkbox>
                    </Col>
                    <Col xs={22} sm={12} md={12} lg={10} xl={10} xxl={10}>
                    <label>Para as crianças:</label>
                        <Checkbox onChange={aceita_criancashandleOnChange}>Aceita Crianças</Checkbox>
                        <Checkbox onChange={banheiro_trocadorandleOnChange} >Trocador</Checkbox>
                        <Checkbox onChange={espaco_kidshandleOnChange}>Espaço Kids</Checkbox>
                    </Col>
                </Row>
            </Grid>
            </Container>
            <label>{quervalor}</label>
            <GridLugares locais={useDadosDeLocais(quervalor).dados} cards={ 0}> {titulo}</GridLugares>
            
        </Containerx>
        
    )
}