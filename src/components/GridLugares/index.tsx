import { read } from 'fs';
import { Grid, Row, Col } from 'rsuite';
import ILocais from "../../types/ILocais";
import styled from "styled-components";
import GridCard from './GridCard';
import Titulo from '../Titulo';

interface Props {
    children?: React.ReactNode
    locais: ILocais[] | null
    cards?: number
}



export default function GridLugares ({ locais , children, cards = 1000 }: Props){
    return (
  <Grid fluid>
    <Titulo imagem="">{children}</Titulo>
    <Row gutter={1}>
      
    {locais?.map((local, index) => {
                    if (index < cards) {return <GridCard local={local} />}
                })}
    </Row>
  </Grid>
    )
}