import { ToastService } from './toast.service';
import { Component, OnInit } from '@angular/core';
import { Toast, ToastType } from './toast';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  toast$ = this.toastService.getToast()
  show = false
  tipo = ''
  texto = ''

  constructor(
    private toastService:ToastService
  ) { }

  ngOnInit(): void {
    this.toast$.subscribe(
      toast=>{
        this.texto = toast.texto
        this.tipo = toast.tipo
        this.show = true
        setTimeout(()=>{
          this.show = false
        },toast.delay)
      }
      )
  }

}
