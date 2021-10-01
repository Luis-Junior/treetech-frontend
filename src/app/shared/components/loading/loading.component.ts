import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  loading$: Observable<string> = this.loadingService.getLoading().pipe(map(loadingType => loadingType.valueOf()))

  constructor(private loadingService:LoadingService) { }

  ngOnInit(): void {

  }

}
