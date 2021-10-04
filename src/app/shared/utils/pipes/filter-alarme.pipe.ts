
import { Pipe, PipeTransform } from '@angular/core';
import { Alarme } from '../../services/alarmes/Alarme';

@Pipe({
  name: 'filterAlarme'
})
export class FilterAlarmePipe implements PipeTransform {

  transform(alarmes: Alarme[], descriptionQuery: string) {
    if (!descriptionQuery) {
      return alarmes
    }
    descriptionQuery = descriptionQuery.trim()

    if (descriptionQuery) {
      let reg = new RegExp(descriptionQuery, "i")
      return alarmes.filter(equipe => reg.test(equipe.descricao))
    } else {
      return alarmes;
    }
  }

}
