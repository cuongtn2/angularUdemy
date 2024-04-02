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
  serverName =''
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
  }, 2000);
  }

  ngOnInit() {

  }

  onServerCreated() {
    this.serverCreationStatus = 'server was created!'
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
