import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor (
    private router: Router,
    private activadeRoute: ActivatedRoute
  ) {
    this.activadeRoute.paramMap.subscribe((param: ParamMap) => {

    })
  }

}