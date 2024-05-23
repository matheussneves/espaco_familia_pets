import { useEffect, useState } from "react";

export default function useFetch<T>({ url, paramdados = '' }: { url: string,  paramdados:string }) {
    const [dados, setDados] = useState<T | null>(null);
    const [erro, setErro] = useState('');

    useEffect(() => {
        fetch(`http://localhost:8080/${url}/${paramdados}`).then(
            resposta => resposta.json()
        ).then(dados => setDados(dados)).catch((erro => setErro(erro)))
    }, [url])

    return { dados, erro }

}