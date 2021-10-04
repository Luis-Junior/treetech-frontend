import { Equipamento } from './../../services/equipamentos/Equipamento';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEquipamento'
})
export class FilterEquipamentoPipe implements PipeTransform {

  transform(equipamentos: Equipamento[], descriptionQuery: string) {
    if (!descriptionQuery) {
      return equipamentos
    }
    descriptionQuery = descriptionQuery.trim()

    if (descriptionQuery) {
      let reg = new RegExp(descriptionQuery, "i")
      return equipamentos.filter(equipe => reg.test(equipe.descricao))
    } else {
      return equipamentos;
    }
  }

}
