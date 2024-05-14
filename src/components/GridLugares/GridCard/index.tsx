import { read } from 'fs';
import { Grid, Row, Col } from 'rsuite';
import ILocais from "../../../types/ILocais";
import styled from "styled-components";
import { Rating } from "@mui/material";
import Botao from "../../Botao";
import Modal from '../../Modal';


const ContainerEstilizado = styled.div`
    width: 100%;
    background-color: #dcdcdc;
    padding: 0em 0em 2em 0em;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.15);
    border-radius: 8px;
    color: var(--cinza);
    margin: 1em 1em;
    height: 19em;
`

const ItemEstilizado = styled.li`
    list-style-type: none;
`


const ItemInformacoesEstilizado = styled(ItemEstilizado)`
    flex-grow: 1;
`

const ImagemEstilizada = styled.img`
    border-radius: 8px 8px 0px 0px;
    width: 100%;
    object-fit: cover;
    height: 70%;
`
const ListaEstilizada = styled.ul`
    display: flex;
    align-items: center;
    width: 90%;
    justify-content: space-between;
    padding: 0;
    margin: 1em 0em 0em 1em;
`

const ParagrafoNomeEstilizado = styled.p`
    font-weight: 700;
`

const ParagrafoEstilizado = styled.p`
    align-items: left;
    margin: .5em 7px;
    font-size: 14px
`

export default function GridCard ({ local }: { local: ILocais }){

    return (
      <Col xs={22} sm={12} md={12} lg={9} xl={6} xxl={6}>
        <ContainerEstilizado >
        <ImagemEstilizada src={local.imagens[(Math.floor(Math.random() * local.imagens.length))]} alt={`Foto local ${local.nome}`} />
             
             <ListaEstilizada>
             <ItemInformacoesEstilizado>
             <ParagrafoNomeEstilizado>{local.nome}</ParagrafoNomeEstilizado>
                </ItemInformacoesEstilizado>
                <ItemEstilizado>
                    <Rating
                        name="simple-controlled"
                        value={local.avaliacao}
                        readOnly={true}
                    />
                </ItemEstilizado>
            </ListaEstilizada>
            <ListaEstilizada>
                <ItemInformacoesEstilizado>
                    <ParagrafoEstilizado>{local.tipo_de_lugar}</ParagrafoEstilizado>
                </ItemInformacoesEstilizado>
                <ItemInformacoesEstilizado>
                    <ParagrafoEstilizado></ParagrafoEstilizado>
                </ItemInformacoesEstilizado>
                <ItemEstilizado>
                    <Modal local={local}/>
                </ItemEstilizado>
                
               
            </ListaEstilizada>
            </ContainerEstilizado>
      </Col>
    )
}