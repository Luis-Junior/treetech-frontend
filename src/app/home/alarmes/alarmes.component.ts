import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AlarmesService } from './../../shared/services/alarmes/alarmes.service';
import { Alarme } from 'src/app/shared/services/alarmes/Alarme';

@Component({
  selector: 'app-alarmes',
  templateUrl: './alarmes.component.html',
  styleUrls: ['./alarmes.component.scss']
})
export class AlarmesComponent implements OnInit {

  alarmes: Alarme[] = []

  filterByDescriptionInput = new FormControl() 

  constructor(
    private alarmesService: AlarmesService,
  ) { }

  ngOnInit(): void {
    this.getAlarmes()
  }

  getAlarmes(){
    this.filterByDescriptionInput.setValue('')
    this.alarmesService.getAll()
      .subscribe(alarmes=>{
        this.alarmes=alarmes
      })
  }


}
