import { Grid, Row } from 'rsuite';
import ILocais from "../../types/ILocais";
import GridCard from './GridCard';
import Titulo from '../Titulo';
import useDadosDeLocais from '../../useDadosDeLocais';

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