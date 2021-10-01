import { ToastService } from './../../../shared/components/toast/toast.service';
import { EquipamentosService } from './../../../shared/services/equipamentos/equipamentos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize, switchMap } from 'rxjs/operators';
import { Equipamento } from 'src/app/shared/services/equipamentos/Equipamento';
import { Alarme } from 'src/app/shared/services/alarmes/Alarme';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastType } from 'src/app/shared/components/toast/toast';

@Component({
  selector: 'app-equipamento',
  templateUrl: './equipamento.component.html',
  styleUrls: ['./equipamento.component.scss']
})
export class EquipamentoComponent implements OnInit {

  equipamento!: Equipamento
  alarmesRelacionados: Alarme[] = []

  equipamentoForm!: FormGroup

  constructor(
    private activatedRouter: ActivatedRoute,
    private equipamentosService: EquipamentosService,
    private toastService: ToastService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    let id = this.activatedRouter.snapshot.params.id
    this.equipamento = this.activatedRouter.snapshot.data['equipamento']
    this.alarmesRelacionados = this.activatedRouter.snapshot.data['alarmesRelacionados']
    this.createForm()
  }

  createForm() {
    this.equipamentoForm = this.fb.group({
      id: [this.equipamento.id, Validators.required],
      nome: [this.equipamento.nome, [Validators.required, Validators.minLength(3)]],
      numero_serie: [this.equipamento.numero_serie, [Validators.required, Validators.minLength(8)]],
      tipo_id: [this.equipamento.tipo_id, Validators.required],
      descricao: [this.equipamento.descricao, [Validators.required, Validators.minLength(8)]]
    })
  }

  getEquipamento(id: number) {
    this.equipamentosService.getById(id)
      .pipe(
        switchMap((equipamento) => {
          this.equipamento = equipamento
          return this.equipamentosService.getAlarmesrelacionados(equipamento.id)
        })
      ).subscribe(alarmes => this.alarmesRelacionados = alarmes)
  }

  update() {
    let equipamento = {
      nome: this.equipamentoForm.get('nome')?.value,
      descricao: this.equipamentoForm.get('descricao')?.value,
      tipo_id: this.equipamentoForm.get('tipo_id')?.value,
      numero_serie: this.equipamentoForm.get('numero_serie')?.value,
    }
    this.equipamentosService.update(this.equipamento.id, equipamento)
      .subscribe(
        res => this.toastService.showToast('Equipamento Atualizado com sucesso', ToastType.SUCESSO),
        erro => {
          console.log(erro)
          this.toastService.showToast('Erro', ToastType.PERIGO)
        }
    )
  }

}
