import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated//None,Native
})
export class ServerElementComponent implements OnInit,OnChanges,DoCheck,AfterContentInit ,AfterContentChecked,AfterViewInit,AfterViewChecked{
  @Input('srvElement') element:{type:string,name:string,content:string};


  constructor() { 
    console.log('constructor called!');

  }
ngOnChanges(changes:SimpleChanges){
  console.log('ng on changes called!');
  console.log( changes);
}
  ngOnInit(): void {
    console.log('ng on init called!');
  }
ngDoCheck(){
  console.log('ngDocheck called!');
}
ngAfterContentInit(){
  console.log('ngAfterContentinit called!');
}
ngAfterContentChecked(){
  console.log('ngaftercontentchecked called!');
}
ngAfterViewInit(){
  console.log('ngAfterViewinit called!');
}
ngAfterViewChecked(){
  console.log('ngAfterViewchecked called!');
}

}
