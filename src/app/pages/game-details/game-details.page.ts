import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonBackButton, IonAvatar, IonCard, IonCardContent, IonText, IonLabel, IonItem } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AventureTimeService } from 'src/app/services/aventure-time.service';
import { CardComponent } from 'src/app/component/card/card.component';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.page.html',
  styleUrls: ['./game-details.page.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonText, IonCardContent, IonCard, IonAvatar, IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,SharedModule, CardComponent ]
})
export class GameDetailsPage implements OnInit {
gameId: string='';
game: any;

  constructor(
    private actRoute: ActivatedRoute,
    private aventuretimeSvc: AventureTimeService
  ) { 
    this.gameId = this.actRoute.snapshot.paramMap.get('id') as string
    console.log(this.gameId);
  }

  ngOnInit() {
    this.getGame(this.gameId);
  }
  

  getGame(id: string) {
    this.aventuretimeSvc.getGameById(id).subscribe(
      (data) => {
        this.game = data;
        console.log(this.game);
      },
      (error) => {
        console.error('Error obteniendo el juego:', error);
      }
    );
  }
}