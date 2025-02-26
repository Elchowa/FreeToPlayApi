import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonBackButton, IonAvatar, IonCard, IonCardContent, IonText, IonLabel, IonItem } from '@ionic/angular/standalone';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [ IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonBackButton, IonAvatar, IonCard, IonCardContent, IonText, IonLabel, IonItem, CommonModule]
})
export class CardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() thumbnail: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() genre: string = '';
  @Input() platform: string = '';
  @Input() publisher: string = '';
  @Input() release_date: string = '';
  @Input() minimum_system_requirements_graphics: string = '';
  @Input() minimum_system_requirements_memory: string = '';
  @Input() minimum_system_requirements_os: string = '';
  @Input() minimum_system_requirements_processor: string = '';
  @Input() minimum_system_requirementsstorage: string = '';
  @Input() screenshots: { image: string }[] = [];
  @Input() param: number = 0;


}
