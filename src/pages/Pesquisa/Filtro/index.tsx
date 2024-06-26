
import styled from "styled-components"
import pesquisa from './assets/search.png';
import pin from './assets/pin.png'
import { Grid, Row, Col, Checkbox } from 'rsuite';
import GridLugares from "../../../components/GridLugares";
import { SetStateAction, useState } from "react";
import ILocais from "../../../types/ILocais";

interface Props {imagem?: string}

const CampoDigitacao = styled.input<Props>`
padding: 16px 16px 16px 30px;
background-image: url('${props => props.imagem === 'pesquisa' ? pesquisa : pin}');
background-repeat: no-repeat;
background-color: var(--cinza-claro);
background-position: 10px;
box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
border-radius: 8px;
border: none;
width: 60%;
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

function convertebool(bool : boolean, texto: string){if (bool === true) { return `${texto}S`} else { return ""}}

export default function Formulario() {
    const [dados, setDados] = useState<ILocais[] | null>(null)
    ,[aceita_criancasisChecked, aceita_criancassetIsChecked] = useState(false), aceita_criancashandleOnChange = () => { aceita_criancassetIsChecked(!aceita_criancasisChecked)}
    ,[aceita_petsisChecked, aceita_petssetIsChecked] = useState(false), aceita_petshandleOnChange = () => {aceita_petssetIsChecked(!aceita_petsisChecked)}
    ,[espaco_petsisChecked, espaco_petssetIsChecked] = useState(false), espaco_petshandleOnChange = () => {espaco_petssetIsChecked(!espaco_petsisChecked)}
    ,[espaco_kidsisChecked, espaco_kidssetIsChecked] = useState(false), espaco_kidshandleOnChange = () => {espaco_kidssetIsChecked(!espaco_kidsisChecked)}
    ,[banheiro_trocadorisChecked, banheiro_trocadorsetIsChecked] = useState(false), banheiro_trocadorandleOnChange = () => {banheiro_trocadorsetIsChecked(!banheiro_trocadorisChecked)}
    ,[nomevalor, nomesetValor] = useState(''),nomehandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        
        if(event.target.value === ""){
            nomesetValor(event.target.value)
            tplugarsetValor(event.target.value)
        }else{
            nomesetValor(`nome=${event.target.value}&`)
            tplugarsetValor(`tipo_lugar=${event.target.value}&`)
        }
    }
    ,[tplugarvalor, tplugarsetValor] = useState(''), [quervalor, quersetValor] = useState(``);
    function btn(){
        quersetValor(`?${nomevalor}${tplugarvalor}${convertebool(aceita_criancasisChecked,`aceita_criancas=`)}${convertebool(aceita_petsisChecked, '&aceita_pets=')}${convertebool(espaco_petsisChecked, '&espaco_pets=')}${convertebool(espaco_kidsisChecked,'&espaco_kids=')}${convertebool(banheiro_trocadorisChecked, '&banheiro_trocador=')}`)
        fetch(`https://api-espaco-familia-pets.onrender.com/lugar/${quervalor}`)
        .then(resposta => resposta.json())
        .then(dados => setDados(dados)).catch(erro => console.log(erro))
    }
    return (
        <Containerx>
            <Container>
            <ContainerFormulario>
                <CampoDigitacao placeholder={'Digite o tipo de estabelecimento'} imagem={'pesquisa'} onChange={nomehandleChange} /> 
            </ContainerFormulario>
            <Titulo>Use os filtros abaixo para encontrar o lugar perfeito para visitar hoje:</Titulo>
            <Grid fluid>
                <Row gutter={100}>
                    <Col xs={22} sm={12} md={12} lg={10} xl={10} xxl={10}>
                    <label>Para os pets:</label>
                        <Checkbox onChange={aceita_petshandleOnChange} >Aceita pets</Checkbox>
                        <Checkbox onChange={espaco_petshandleOnChange} >Espaço Pets</Checkbox>
                    </Col>
                    <Col xs={22} sm={12} md={12} lg={10} xl={10} xxl={10}>
                    <label>Para as crianças:</label>
                        <Checkbox onChange={aceita_criancashandleOnChange} >Aceita Crianças</Checkbox>
                        <Checkbox onChange={banheiro_trocadorandleOnChange}  >Trocador</Checkbox>
                        <Checkbox onChange={espaco_kidshandleOnChange} >Espaço Kids</Checkbox>
                    </Col>
                    <Botao onClick={btn}  >Buscar</Botao>
                </Row>
            </Grid>
            </Container>
            <GridLugares locais={dados} cards={10000}> </GridLugares>
            
        </Containerx>
        
    )
}