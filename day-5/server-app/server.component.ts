import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, ViewChild, ElementRef, AfterContentInit, AfterViewInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements 
OnInit,
OnChanges,
AfterContentInit,
AfterViewInit {

   @Input('srvElement') element: {type:string, name:string, content:string};
  @Input() name: string;


@ViewChild('heading', {static:true}) header: ElementRef;
@ContentChild('contentParagraph', {static:true}) paragraph: ElementRef;
  constructor() {
    console.log('constructor is called');
   }

  ngOnInit() {
    console.log('ngOnInit is called');
    console.log("Name is " + this.header.nativeElement.textContent);
    console.log("Content is " + this.paragraph.nativeElement.textContent);
  }
  

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges is called');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit is called');
    console.log("Name is " + this.header.nativeElement.textContent);
    console.log("Content is " + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit is called');
    console.log("Name is " + this.header.nativeElement.textContent);
    console.log("Content is " + this.paragraph.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }

}
