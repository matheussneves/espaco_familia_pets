export default interface ILocais {
    nome: string,
    tipo_de_lugar: string,
    endereco: string,
    aceita_criancas: boolean,
    aceita_pets: boolean,
    banheiro_trocador:  boolean,
    espaco_pets:  boolean,
    horario_de_funcionamento: string,
    espaco_kids:  boolean,
    rede_social: string,
    avaliacao: number,
    imagens: Array<string>
}