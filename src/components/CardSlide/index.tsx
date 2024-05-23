import { Carousel } from 'rsuite';
interface Props {
    imagens: Array<string>,
    banners?: number
}

function CardSlide({ imagens }: Props) {
    return(
        <Carousel autoplay className="custom-slider">
            {imagens?.map((imagem) => {
                    return <img src={imagem} height={5} width={10} alt=''/>
                })}
        </Carousel>

    )


}
export default CardSlide;