import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class PageHeaderComponent implements OnInit {
  @Input() title:string;
  
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        var splitPath = event.url.split('/')
        var actualPage = splitPath.length - 2
        this.title = splitPath[actualPage]
        console.log(this.title);
      }
    })
  }

  ngOnInit(): void {
  }

}
