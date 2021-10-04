import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastType } from 'src/app/shared/components/toast/toast';
import { ToastService } from 'src/app/shared/components/toast/toast.service';
import { EquipamentosService } from 'src/app/shared/services/equipamentos/equipamentos.service';

@Component({
  selector: 'app-novo-equipamento',
  templateUrl: './novo-equipamento.component.html',
  styleUrls: ['./novo-equipamento.component.scss']
})
export class NovoEquipamentoComponent implements OnInit {

  equipamentoForm!: FormGroup;
  
  constructor(
    private equipamentosService: EquipamentosService,
    private toastService: ToastService,
    private fb: FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.equipamentoForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      numero_serie: ['', [Validators.required, Validators.minLength(8)]],
      tipo_id: [2, Validators.required],
      descricao: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  create(){
    if(this.equipamentoForm.valid){
      this.equipamentosService.create(this.equipamentoForm.getRawValue()).subscribe(
        res => {
          this.toastService.showToast('Equipamento criado com sucesso', ToastType.SUCESSO)
          this.router.navigate(['/equipamentos'])
        },
        erro => {
          console.log(erro)
          this.toastService.showToast('Erro', ToastType.PERIGO)
        }
      )
    }
  }

}
