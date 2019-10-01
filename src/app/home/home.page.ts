import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user = {
    name: 'WAQAS BHAI',
    city: 'Murree',
    interests: ['gaming','Movies','learning']
  };
  constructor() {}

}
