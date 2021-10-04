import { EquipamentosService } from './../../shared/services/equipamentos/equipamentos.service';
import { Component, OnInit } from '@angular/core';
import { Equipamento } from 'src/app/shared/services/equipamentos/Equipamento';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-equipamentos',
  templateUrl: './equipamentos.component.html',
  styleUrls: ['./equipamentos.component.scss']
})
export class EquipamentosComponent implements OnInit {

  equipamentos:Equipamento[]= []

  filterByDescriptionInput = new FormControl() 

  constructor(
    private equipamentosService:EquipamentosService,
  ) { }

  ngOnInit(): void {
    this.getEquipamentos()
    this.filterByDescriptionInput.valueChanges.subscribe(
      valorDigitado=>{
        console.log(valorDigitado)
      }
    )
  }

  getEquipamentos(){
    this.equipamentosService.getAll()
      .subscribe(equipamentos=>this.equipamentos=equipamentos)
  }
}
