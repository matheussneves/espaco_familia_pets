import { read } from 'fs';
import { Grid, Row, Col } from 'rsuite';
import ILocais from "../../types/ILocais";
import styled from "styled-components";
import GridCard from './GridCard';
import Titulo from '../Titulo';

interface Props {
    children?: React.ReactNode
    locais: ILocais[] | null
}



export default function GridLugares ({ locais , children }: Props){
    return (
  <Grid fluid>
    <Titulo imagem="">{children}</Titulo>
    <Row gutter={1}>
    {locais?.map((local) => {
                    return <GridCard local={local} />
                })}
    </Row>
  </Grid>
    )
}