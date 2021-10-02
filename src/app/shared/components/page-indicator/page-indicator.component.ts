import { Observable } from 'rxjs';
import { PageIndicatorService } from './page-indicator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-indicator',
  templateUrl: './page-indicator.component.html',
  styleUrls: ['./page-indicator.component.scss']
})
export class PageIndicatorComponent implements OnInit {

  pageTitle$:Observable<string> = this.pageIndicatorService.getPage()

  constructor(
    private pageIndicatorService:PageIndicatorService
  ) { }

  ngOnInit(): void {
  }

}
