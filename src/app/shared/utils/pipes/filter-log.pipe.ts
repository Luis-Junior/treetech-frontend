import { Log } from './../../services/logs/log';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterLog'
})
export class FilterLogPipe implements PipeTransform {

  transform(logs: Log[], descriptionQuery: string) {
    if (!descriptionQuery) {
      return logs
    }
    descriptionQuery = descriptionQuery.trim()

    if (descriptionQuery) {
      let reg = new RegExp(descriptionQuery, "i")
      return logs.filter(log => {
        if(
          reg.test(log.rota) || reg.test(log.acao) || reg.test(log.id.toString())
          ){return true}else{return false}
        })
    } else {
      return logs;
    }
  }

}
