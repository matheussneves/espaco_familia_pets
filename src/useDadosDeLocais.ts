import ILocais from "./types/ILocais";
import useFetch from "./useFetch";

const useDadosDeLocais = () => {
    return useFetch<ILocais[]>({ url: 'lugares' });
}

export default useDadosDeLocais;