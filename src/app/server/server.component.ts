import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent{
    public serverId: number = 10;
    public serverStatus: string = 'offline'
   

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
        console.log(this.serverStatus);
    }

    public getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

}