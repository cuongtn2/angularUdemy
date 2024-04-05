import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server > </app-server>
  //   <app-server > </app-server>
  //   `,
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'no server was created!';
  serverName = 'TestServer';
  userName = '';
  serverCreated = false;
  servers = ['TestServer 1', 'TestServer 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
  }, 2000);
  }

  ngOnInit() {

  }

  onServerCreated() {
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = `server was created!, Name is  ${this.serverName}`
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

  onCreateUsername() {
    console.log('create username success')
    this.userName =''
  }
}
