import { Timestamp } from "rxjs";

export interface filme{
    titulo: string;
    data: Timestamp<Date>;
    descricao: string;
    sinopse: string;
    duracao: string;
    situacao: string;
    idioma: string;
    orcamento: string;
    receita: number;
    lucro: number;

}