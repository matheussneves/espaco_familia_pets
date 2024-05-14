import React from 'react';
import ReactDOM from 'react-dom';
import "rsuite/dist/rsuite.css";
import ILocais from "../../types/ILocais";


import { Modal, ButtonToolbar, Button, Loader, Placeholder, Grid, Row, Col } from 'rsuite';
import styled from '@emotion/styled';
import { Rating } from '@mui/material';

const ImagemEstilizada = styled.img`
    border-radius: 8px 8px 0px 0px;
    width: 100%;
    object-fit: cover;
    height: 20em;
`
const ItemEstilizado = styled.li`
    list-style-type: none;
`


const ItemInformacoesEstilizado = styled(ItemEstilizado)`
    flex-grow: 1;
`
const TituloFiltro = styled.h2`
font-family: var(--fonte-principal);
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 22px;
color: var(--cinza);
text-align: left;
margin: .5em 0em .5em 0em;
`

const ListaEstilizada = styled.ul`
    display: flex;
    align-items: center;
    width: 90%;
    justify-content: space-between;
    padding: 0;
    margin: 1em 0em 0em .5em;
`

const ParagrafoNomeEstilizado = styled.p`
    font-weight: 700;
`

const ParagrafoEstilizado = styled.p`
    align-items: left;
    margin: .5em 7px;
    font-size: 14px
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

export default function ModalDetalhes({ local }: { local: ILocais }) {
  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = React.useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleEntered = () => {
    setTimeout(() => setRows(80), 2000);
  };

  return (
    <>
      <ButtonToolbar>
        <Button onClick={handleOpen}>Ver mais...</Button>
      </ButtonToolbar>

      <Modal
        open={open}
        onClose={handleClose}
        onEntered={handleEntered}
        onExited={() => {
          setRows(0);
        }}
      >
        <Modal.Header>
          <Modal.Title>{local.nome}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Grid fluid>
    <Row className="show-grid">
    <ImagemEstilizada src={local.imagem} alt={`Foto local ${local.nome}`} />
    </Row>
        <Row>
        <ListaEstilizada>
             <ItemInformacoesEstilizado>
             <ParagrafoNomeEstilizado>Nome: {local.nome}</ParagrafoNomeEstilizado>
                </ItemInformacoesEstilizado>
                <ItemInformacoesEstilizado>
                    <ParagrafoEstilizado> Tipo: {local.especialidade}</ParagrafoEstilizado>
                </ItemInformacoesEstilizado>
                <ItemEstilizado>
                    <Rating
                        name="simple-controlled"
                        value={local.nota}
                        readOnly={true}
                    />
                </ItemEstilizado>
            </ListaEstilizada>

        </Row>
    <Row gutter={1}>
    <TituloFiltro>Informações:</TituloFiltro>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <label id="cars">Endereço: rua do restaurante</label>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <label id="cars">Horário de funcionamento: 9:00 as 18:00</label>
        </Col>
      </Row>
      <Row gutter={1}>
    <TituloFiltro>Caracteristicas:</TituloFiltro>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
            <ItemLista>
                <label id="cars">Aceita pets</label>
            </ItemLista>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
            <ItemLista>
                <label id="cars">Espaço Pets</label>
            </ItemLista>
        </Col>
      </Row>
  </Grid>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="subtle">
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

