import { Equipamento } from './../../../shared/services/equipamentos/Equipamento';
import { Alarme } from './../../../shared/services/alarmes/Alarme';
import { AlarmesService } from 'src/app/shared/services/alarmes/alarmes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alarme',
  templateUrl: './alarme.component.html',
  styleUrls: ['./alarme.component.scss']
})
export class AlarmeComponent implements OnInit {

  alarme!: Alarme
  equipamentoRelacionado!:Equipamento

  alarmeForm!: FormGroup

  constructor(
    private alarmesService:AlarmesService,
    private activatedRoute:ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.alarme = this.activatedRoute.snapshot.data['alarme']
    console.log(this.alarme)
    this.createAlarmeForm()
    // this.alarmeForm.controls['resultado'].valueChanges.subscribe()
  }

  createAlarmeForm(){
    this.alarmeForm = this.fb.group({
      id:[this.alarme.id, [Validators.required]],
      descricao: [this.alarme.descricao, [Validators.required, Validators.minLength(8)]],
      classificacao_id:[this.alarme.classificacao_id, [Validators.required]]
    })
  }

  update(){

  }

}
