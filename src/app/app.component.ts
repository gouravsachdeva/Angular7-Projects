import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  clear = 'AC';
  addition = '+';
  subtraction = '-';
  multiply = '*';
  equalto = '=';

  inputValue: any;

  getValue(event) {
    var valueRecieved = event.target.value;
    this.inputValue = valueRecieved;
  }
}
