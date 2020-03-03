import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: '<app-server></app-server><app-server></app-server><h3>servers works!</h3>',
  templateUrl: './servers.component.html',
  // styleUrls: ['./servers.component.css']
  styles: [`h3{color: dodgerblue}`]
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';

  serverCreated = false;

  public serverName2 = 'testServer';

  constructor() { 
    // ix6 arrow function
    setTimeout( () =>{
      this.allowNewServer=true;   
    },2000);

  }

  ngOnInit() {
  }

  public onCreateServer(){
    this.serverCreationStatus = 'Server was created , server name: ' + this.serverName2;
    this.serverCreated = true;
  }

  public onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
