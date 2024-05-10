import styled from "styled-components";
import ILocais from "../../types/ILocais";
import Botao from "../Botao";
import Card from "./Card";

const SecaoCard = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
width: 100%;
`

function Avaliacao({ locais }: { locais: ILocais[] | null }) {
    return (
        <>
            <SecaoCard>
                {locais?.map((profissional) => {
                    return <Card profissional={profissional} />
                })}
            </SecaoCard>
            <Botao>Ver mais</Botao>
        </>
    )
}

export default Avaliacao;