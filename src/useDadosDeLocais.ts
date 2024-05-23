import ILocais from "./types/ILocais";
import useFetch from "./useFetch";

const useDadosDeLocais = (dados:string) => {
    return useFetch<ILocais[]>({ url: 'lugar', paramdados:dados });
}

export default useDadosDeLocais;