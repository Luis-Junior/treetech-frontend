import { ToastService } from './../../../shared/components/toast/toast.service';
import { AlarmesService } from 'src/app/shared/services/alarmes/alarmes.service';
import { EquipamentosService } from './../../../shared/services/equipamentos/equipamentos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { filter, finalize, switchMap, tap } from 'rxjs/operators';
import { Equipamento } from 'src/app/shared/services/equipamentos/Equipamento';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastType } from 'src/app/shared/components/toast/toast';

@Component({
  selector: 'app-novo-alarme',
  templateUrl: './novo-alarme.component.html',
  styleUrls: ['./novo-alarme.component.scss']
})
export class NovoAlarmeComponent implements OnInit {

  equipamentoRelacionado!:Equipamento

  inputSearchEquipamento = new FormControl()
  showInputSearchEquipamento = true
  resultadoBuscaEquipamento: Equipamento[] = []
  inputLoading = false

  alarmeForm!: FormGroup

  constructor(
    private fb:FormBuilder,
    private equipamentoService:EquipamentosService,
    private alarmesService:AlarmesService,
    private router:Router,
    private toastService:ToastService
  ) { }

  ngOnInit(): void {
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
      descricao: ['', [Validators.required, Validators.minLength(8)]],
      classificacao_id:[1, [Validators.required]],
      equipamento_id: ['', Validators.required]
    })
  }
  toggleShowInputSearch(){
    if(this.equipamentoRelacionado){
      this.showInputSearchEquipamento = !this.showInputSearchEquipamento
    }
  }
  novoEquipamentoRelacionado(equipamento:Equipamento){
    this.equipamentoRelacionado = equipamento
    this.alarmeForm.get('equipamento_id')?.setValue(equipamento.id)
    this.inputSearchEquipamento.setValue('')
    this.resultadoBuscaEquipamento = []
    this.showInputSearchEquipamento = false
  }

  create(){
    if(this.alarmeForm.valid){
      this.alarmesService.create(this.alarmeForm.getRawValue()).subscribe(
        res => {
          this.toastService.showToast('Alarme criado com sucesso', ToastType.SUCESSO)
          this.router.navigate(['/alarmes'])
        },
        erro => {
          console.log(erro)
          this.toastService.showToast('Erro', ToastType.PERIGO)
        }
      )
    }
  }

}
