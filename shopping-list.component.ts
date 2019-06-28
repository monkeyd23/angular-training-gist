import { Component, OnInit } from '@angular/core';
import { Part } from '../shared/part.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  parts: Part[] = [
      new Part('Core i5 Processor', 120),
      new Part('Seagate HDD 1TB', 300)
  ];

  constructor() { }

  ngOnInit() {
  }

}
