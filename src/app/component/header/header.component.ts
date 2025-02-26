import { Component, Input, OnInit } from '@angular/core';
import { IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton]
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() param: number = 0
}
