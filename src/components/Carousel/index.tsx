import { Carousel } from 'rsuite';
import ILocais from "../../types/ILocais";
interface Props {
    locais: ILocais[] | null
    banners?: number
}

function Slide({ locais, banners = 5 }: Props) {
    return(
        <Carousel autoplay className="custom-slider">
            {locais?.map((local, index) => {
                    if (index < banners) {return <img src={local.url} height="250" />}
                })}
        </Carousel>

    )


}
export default Slide;