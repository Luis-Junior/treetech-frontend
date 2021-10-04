import { Component, OnInit } from '@angular/core';
import { Alarme } from 'src/app/shared/services/alarmes/Alarme';
import { AlarmesService } from 'src/app/shared/services/alarmes/alarmes.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  alarmes:Alarme[] = []

  constructor(
    private alarmesService:AlarmesService
  ) { }

  ngOnInit(): void {
    this.alarmesService.alarmesMaisAtuados().subscribe(alarmes=> {
      this.alarmes = alarmes
    })

  }

}
