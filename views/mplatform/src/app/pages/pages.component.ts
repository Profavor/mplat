import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'pages',
  template: `
    <div class="ui container">
        <router-outlet></router-outlet>
    </div>
    `
})
export class Pages {

  constructor() {
  }

  ngOnInit() {

  }
}
