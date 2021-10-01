import { ToastService } from './../../../shared/components/toast/toast.service';
import { EquipamentosService } from './../../../shared/services/equipamentos/equipamentos.service';
import { Equipamento } from './../../../shared/services/equipamentos/Equipamento';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ToastType } from 'src/app/shared/components/toast/toast';

@Component({
  selector: 'app-tabela-equipamentos',
  templateUrl: './tabela-equipamentos.component.html',
  styleUrls: ['./tabela-equipamentos.component.scss']
})
export class TabelaEquipamentosComponent implements OnInit {

  @Input() equipamentos: Equipamento[] = []

  @Output() aoExcluir = new EventEmitter()

  constructor(
    private equipamentosService: EquipamentosService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
  }


  delete(id: number) {
    this.equipamentosService.delete(id)
      .pipe(finalize(() => this.aoExcluir.emit()))
      .subscribe(
        () => this.toastService.showToast('Equipamento excluido com sucesso', ToastType.SUCESSO),
        (erro) => this.toastService.showToast('Existe um alarme relacionado a este equipamento', ToastType.PERIGO)
      )
  }

}
