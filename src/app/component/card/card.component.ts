import { Component, Input, OnInit } from '@angular/core';


import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonBackButton, IonAvatar, IonCard, IonCardContent, IonText, IonLabel, IonItem } from '@ionic/angular/standalone';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [ IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonBackButton, IonAvatar, IonCard, IonCardContent, IonText, IonLabel, IonItem]
})
export class CardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() thumbnail: string = '';


}
