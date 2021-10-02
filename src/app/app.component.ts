import { PageIndicatorService } from './shared/components/page-indicator/page-indicator.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  theme = '';

  constructor(
    private activatedRoute:ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private pageIndicatorService:PageIndicatorService
  ){}

    ngOnInit(): void {
    this.router.events
    .pipe(
      filter(event=> event instanceof NavigationEnd)
    )
    .pipe(
      map(()=> this.activatedRoute)
    )
    .pipe(
      map(route => {
        while(route.firstChild) route = route.firstChild;
        return route
      })
    )
    .pipe(
      switchMap(route=> route.data)
    ).subscribe(event => {
      this.pageIndicatorService.setPage(event.title)
      this.titleService.setTitle(event.title)
    })
  }
}
