export class Aluno {

  id?: number;
  nome: string;
  sorteado?: boolean;
  professora?: ProfessoraEnum;
  genero?: GeneroEnum;
}


export enum GeneroEnum {
  MENINO,
  MENINA
}

export enum ProfessoraEnum {
  THAYS,
  OUTRA
}
