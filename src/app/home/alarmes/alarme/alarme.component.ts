import { ToastService } from './../../../shared/components/toast/toast.service';
import { finalize, tap, filter, switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpParams } from '@angular/common/http';

import { Equipamento } from './../../../shared/services/equipamentos/Equipamento';
import { Alarme } from './../../../shared/services/alarmes/Alarme';
import { AlarmesService } from 'src/app/shared/services/alarmes/alarmes.service';
import { EquipamentosService } from 'src/app/shared/services/equipamentos/equipamentos.service';
import { ToastType } from 'src/app/shared/components/toast/toast';

@Component({
  selector: 'app-alarme',
  templateUrl: './alarme.component.html',
  styleUrls: ['./alarme.component.scss']
})
export class AlarmeComponent implements OnInit {

  alarme!: Alarme
  equipamentoRelacionado!:Equipamento

  inputSearchEquipamento = new FormControl()
  showInputSearchEquipamento = false
  resultadoBuscaEquipamento: Equipamento[] = []
  inputLoading = false

  alarmeForm!: FormGroup

  constructor(
    private alarmesService:AlarmesService,
    private equipamentoService: EquipamentosService,
    private activatedRoute:ActivatedRoute,
    private toastService:ToastService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.alarme = this.activatedRoute.snapshot.data['alarme']
    this.equipamentoRelacionado = this.alarme.equipamento
    this.createAlarmeForm()
    this.inputSearchEquipamento.valueChanges
    .pipe(
      tap(()=>this.inputLoading = true),
      finalize(()=>this.inputLoading = false),
      filter((valorDigitado)=> valorDigitado.length >= 1),
      switchMap((valorDigitado)=>{
        let params = new HttpParams()
        params = params.set('nome', valorDigitado)
        return this.equipamentoService.filterByName(params)
      })
    )
    .subscribe((equipamentosPesquisados)=>{
      this.resultadoBuscaEquipamento = equipamentosPesquisados
    })
  }

  createAlarmeForm(){
    this.alarmeForm = this.fb.group({
      id:[this.alarme.id, [Validators.required]],
      descricao: [this.alarme.descricao, [Validators.required, Validators.minLength(8)]],
      classificacao_id:[this.alarme.classificacao_id, [Validators.required]],
      equipamento_id: [this.alarme.equipamento_id, Validators.required]
    })
  }

  toggleShowInputSearch(){
    this.showInputSearchEquipamento = !this.showInputSearchEquipamento
  }

  novoEquipamentoRelacionado(equipamento:Equipamento){
    this.equipamentoRelacionado = equipamento
    this.alarmeForm.get('equipamento_id')?.setValue(equipamento.id)
    this.inputSearchEquipamento.setValue('')
    this.resultadoBuscaEquipamento = []
    this.showInputSearchEquipamento = false
  }

  update(){
    if(this.alarmeForm.valid){
      this.alarmesService.update(this.alarmeForm.getRawValue()).subscribe(
        res => this.toastService.showToast('Alarme Atualizado com sucesso', ToastType.SUCESSO),
        erro => {
          console.log(erro)
          this.toastService.showToast('Erro', ToastType.PERIGO)
        }
      )
    }
  }

}
