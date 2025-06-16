import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    standalone: false,
    // template: '<app-server></app-server>',
    templateUrl: './server.component.html',
})

export class ServerComponent{
    serverId: Number = 10; 
    serverStatus: String = "offline"
    allowNewServer = true;
    serverCreationStatus = 'No server was created!';
    serverName = '';
    serverCreated = false; 

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online': 'offline';
    }

    // constructor(){
    //     setTimeout(() => {
    //         this.allowNewServer = true;
    //     }, 2000)
    // }

    getServerStatus(){
        return this.serverStatus;
    }

    onCreateSever(){
        this.serverCreated = true;
        this.serverCreationStatus = 'Server was Created! Name is ' + this.serverName;
    }

    onUpdateServerNmae(event:Event){
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}