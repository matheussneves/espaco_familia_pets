export default interface ILocais {
    id: number,
    nome: string,
    tipo_lugar: string,
    endereco: string,
    aceita_criancas: string,
    aceita_pets: string,
    banheiro_trocador:  string,
    espaco_pets:  string,
    horario: string,
    espaco_kids:  string,
    instagram_link: string,
    avaliacao: number,
    imagens:Array<string>
}