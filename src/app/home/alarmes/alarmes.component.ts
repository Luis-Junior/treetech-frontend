import { AlarmesService } from './../../shared/services/alarmes/alarmes.service';
import { Component, OnInit } from '@angular/core';
import { Alarme } from 'src/app/shared/services/alarmes/Alarme';

@Component({
  selector: 'app-alarmes',
  templateUrl: './alarmes.component.html',
  styleUrls: ['./alarmes.component.scss']
})
export class AlarmesComponent implements OnInit {

  alarmes: Alarme[] = []

  constructor(
    private alarmesService: AlarmesService,
  ) { }

  ngOnInit(): void {
    this.getAlarmes()
  }

  getAlarmes(){
    this.alarmesService.getAll()
      .subscribe(alarmes=>this.alarmes=alarmes)
  }


}
