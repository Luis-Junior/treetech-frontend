import { FormControl } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { LogsService } from './../../shared/services/logs/logs.service';
import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/shared/services/logs/log';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  logs:Log[] = []
  filter = new FormControl()

  constructor(
    private logsService:LogsService
  ) { }

  ngOnInit(): void {
    this.getLogs()
  }

  getLogs(params?:HttpParams){
    this.logsService.getAll().subscribe(
      logs=>{
        this.logs= logs
      },erro=>console.log(erro)
    )
  }

}
