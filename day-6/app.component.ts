import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  numbers = [1,2,3,4,5];
  oddNumbers = [1,3,5];
  showAll = true;
  showOdd = false;

  value = 10;

  toggle() {
    this.showAll = !this.showAll;
    this.showOdd = !this.showOdd;
    console.log("show all -> " + this.showAll);
    console.log("show odd -> " + this.showOdd);
  }

}
