import { Component, OnInit } from '@angular/core';


import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonBackButton, IonAvatar, IonCard, IonCardContent, IonText, IonLabel, IonItem } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AventureTimeService } from 'src/app/services/aventure-time.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [ IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonBackButton, IonAvatar, IonCard, IonCardContent, IonText, IonLabel, IonItem]
})
export class CardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
