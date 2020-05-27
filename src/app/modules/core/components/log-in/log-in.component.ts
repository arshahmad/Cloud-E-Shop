import {Component} from '@angular/core';
import {ServerService} from '@ecm-modules/core/server.service';

@Component({
  selector: 'ecm-login',
  templateUrl: './log-in.component.html',
  styleUrls: ['log-in.component.scss']
})
export class LogInComponent {

  servers = [
    {
      name: 'Test Server',
      capacity: 100,
      id: this.generateId()
    },
    {
      name: 'Live Server',
      capacity: 100,
      id: this.generateId()
    }
  ];

  constructor(private serverService: ServerService) {
  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onSave() {
    this.serverService.storeServers(this.servers)
      .subscribe((res) => console.log(res)), (error) => console.log(error);
  }

  getServer() {
    this.serverService.getServers()
      .subscribe(
        (servers: any) => this.servers = servers
      );
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
