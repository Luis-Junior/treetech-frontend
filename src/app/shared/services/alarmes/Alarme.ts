export interface Alarme {
  id: number
  descricao: string
  classificacao_id: number
  creat_at: string
  equipamento_id: number
  status_id: number
  vezes_autuado: number
  classificacao: Classificacao
  equipamento: Equipamento
  status: Status
  entrada: string
  saida: string
}

export interface Classificacao {
  id: number
  classificacao: string
}

export interface Equipamento {
  id: number
  nome: string
  numero_serie: string
  tipo_id: number
  descricao: string
  creat_at: string
  tipo: Tipo
}

export interface Tipo {
  id: number
  tipo: string
}

export interface Status {
  id: number
  status: string
}
