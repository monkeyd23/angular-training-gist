import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {type:'server', name:'testServer', content:'TestContent'},
    {type:'blueprint', name:'testBlueprint', content:'TestContent'}
  ];

  onServerAdded(serverData: {serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }


  onBluePrintAdded(serverData: {serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
 
}
