import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assign3';
  showSecret=false;
  count=0;
  log:any=[];
  showSecretCode()
{
  this.showSecret=!this.showSecret;
  this.count=this.count+1;
  this.log.push(this.log.length+1);
}
}

