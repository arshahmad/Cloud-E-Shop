import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()

export class ServerService {
constructor(private httpService: HttpClient) {

}

  storeServers(servers: any[]) {

 return  this.httpService.put('https://backend-setup.firebaseio.com/data.json', servers);
  }

  getServers() {
  return this.httpService.get('https://backend-setup.firebaseio.com/data.json');
  }
}
