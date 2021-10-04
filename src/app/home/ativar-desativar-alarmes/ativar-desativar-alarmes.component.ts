import { HttpParams } from '@angular/common/http';
import { ToastService } from './../../shared/components/toast/toast.service';
import { AlarmesService } from './../../shared/services/alarmes/alarmes.service';
import { Component, OnInit } from '@angular/core';
import { ToastType } from 'src/app/shared/components/toast/toast';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ativar-desativar-alarmes',
  templateUrl: './ativar-desativar-alarmes.component.html',
  styleUrls: ['./ativar-desativar-alarmes.component.scss']
})
export class AtivarDesativarAlarmesComponent implements OnInit {

  alarmes:any = []
  filterByDescriptionInput = new FormControl() 
  
  constructor(
    private alarmesService:AlarmesService,
    private toastService:ToastService
  ) { }

  ngOnInit(): void {
    this.getAlarmes()
  }
  
  getAlarmes(params?:HttpParams){
    this.alarmesService.getAll(params).subscribe(
      alarmes=>{
        this.alarmes=alarmes
        // console.log(alarmes)
      }
    )
  }
  filtrarPorClassificacao(classificacao_id:number){
    if(classificacao_id === 0){
      let params = new HttpParams()
      this.getAlarmes(params)
    }else{
      this.alarmesService.filterByClassificacao(classificacao_id).subscribe(alarmes=>this.alarmes=alarmes)
    }
  }
  

  switchAlarme(status_id:number, alarme_id:number){
    if(status_id == 1){
      this.alarmesService.desativarAlarme(alarme_id).subscribe(
        res=>{
          this.getAlarmes()
        }
        )
      }else if(status_id == 2){
        this.alarmesService.ativarAlarme(alarme_id).subscribe(
          (res:any)=>{
            if(res.resultado){
              this.toastService.showToast(res.resultado, ToastType.PERIGO)
            }
          this.getAlarmes()
        },erro=>console.log(erro)
      )
    }
  }

}
