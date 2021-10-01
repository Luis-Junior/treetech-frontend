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
