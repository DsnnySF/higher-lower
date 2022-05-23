import { Component } from '@angular/core';
import {Country} from "./country";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'higher-lower';
  countries: Country[] = [];

  constructor() {
  }

  ngOnInit(): void {

  }
}
