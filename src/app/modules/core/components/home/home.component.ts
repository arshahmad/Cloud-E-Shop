import {Component} from '@angular/core';
import {ButtonService} from '@ecm-app/button.service';



@Component ({
  selector: 'ecm-home',
  templateUrl: './home.component.html',
  styleUrls: [
    'home.component.scss'
  ],
})
export class HomeComponent {

  constructor(private _eventBus: ButtonService) {
  }

  toggleDrawer() {
    this._eventBus.broadcast('drawer');
  }
}
