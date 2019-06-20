import { Component } from '@angular/core';
@Component({
  selector: 'ecm-page',
  templateUrl: './page.component.html',
  styleUrls: [
    'page.component.scss']
})
 export class PageComponent {
  records = [
    {img: 'https://themefisher.com/wp-content/uploads/2019/06/navigator-free-responsive-bootstrap-templates.jpg', name: 'Home Page'},
    {img: 'https://www.gadgetbridge.com/wp-content/uploads/2019/02/D0emEYfWsAAHtgs.jpeg', name: 'Product Page'},
    {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3dqFAH2N8jpmLO5VxNzDTj_upLYqS2sw2FMvwvMpnbuAPdEDpOg', name: 'Checkout Page'}
  ];
 }
