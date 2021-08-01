import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpCreated') blueprintCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @ViewChild('serverContentInput',{static:true}) serverContentInput:ElementRef;
  //newServerName = '';
  newServerContent = '';


  constructor() { }

  ngOnInit(): void {
  }


  onAddServer(nameInput:HTMLInputElement) {
  console.log(this.serverContentInput)

    // console.log(nameInput);
    this.serverCreated.emit(
      {
        serverName:nameInput.value,
        serverContent:this.serverContentInput.nativeElement.value
      }
    );
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    this.blueprintCreated.emit(
      {
        serverName:nameInput.value,
        //serverName:this.newServerName ,
        serverContent:this.serverContentInput.nativeElement.value
      }
    );
  }

}
