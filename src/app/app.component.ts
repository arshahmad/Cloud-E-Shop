import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ButtonService} from '@ecm-app/button.service';

@Component({
  selector: 'ecm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'e-commerce';
  opened = false;
  constructor(private _eventBus: ButtonService) {
  }

  ngOnInit(): void {
    this._eventBus.listen('drawer')
      .subscribe(() => this.opened = !this.opened);
  }
}
