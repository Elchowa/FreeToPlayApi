import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonItem, 
  IonButton, IonSpinner, IonInfiniteScrollContent, IonInfiniteScroll, IonGrid, 
  IonRow, IonCol, IonCard, IonCardContent, IonText, IonSearchbar } from '@ionic/angular/standalone';
import { AventureTimeService } from 'src/app/services/aventure-time.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core'; 
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonSearchbar, IonText, IonCardContent, 
    IonCard, IonCol, IonRow, IonGrid, IonInfiniteScroll, IonInfiniteScrollContent, 
    IonSpinner, IonButton, IonItem, IonLabel, IonList, IonContent, IonHeader, 
    IonTitle, IonToolbar, CommonModule, FormsModule, SharedModule, RouterModule, HttpClientModule
  ]
})
export class HomePage implements OnInit {
  games: any[] = [];
  allGames: any[] = [];
  pageSize = 10;
  currentPage = 0; 
  cantidadCargar = 10;

  constructor(
    private aventuretimeSvc: AventureTimeService, 
    private router: Router,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit() {
    this.obtenerJuegos();
  }

  obtenerJuegos() {
    this.aventuretimeSvc.getGames().subscribe({
      next: (data) => {
        console.log('📌 Juegos obtenidos de la API:', data);
        this.allGames = Array.isArray(data) ? data : []; 
  
        if (this.allGames.length === 0) {
          console.warn('⚠️ No se recibieron juegos desde la API.');
        } else {
          console.log('🎮 Primer juego recibido:', this.allGames[0]); // Ver el primer juego
        }
  
        this.games = [...this.allGames.slice(0, this.cantidadCargar)];
        console.log('📝 Lista inicial de juegos:', this.games);
      },
      error: (err) => console.error('❌ Error al obtener los juegos', err)
    });
  }
  

  cargarMasJuegos(event?: any) {
    const siguienteCarga = this.games.length + this.cantidadCargar;

    if (siguienteCarga < this.allGames.length) {
      this.games = this.allGames.slice(0, siguienteCarga);
    } else {
      this.games = this.allGames;
    }

    if (event) {
      event.target.complete(); 
    }
  }

  buscarJuego(event: any) {
    console.log('📢 Evento de búsqueda:', event.detail.value);
  
    const termino = event.detail.value ? event.detail.value.trim().toLowerCase() : '';
  
    if (!termino) {
      this.games = [...this.allGames.slice(0, this.cantidadCargar)];
      console.log('🔄 Lista restaurada:', this.games);
      this.cdr.detectChanges();
      return;
    }
  
    if (!this.allGames || this.allGames.length === 0) {
      console.error('⚠️ No hay juegos en allGames');
      return;
    }
  
    this.games = this.allGames.filter(juego => 
      juego?.title?.toLowerCase().includes(termino) 

    );
  
    console.log('✅ Juegos filtrados:', this.games);
    this.cdr.detectChanges();
  }
  
  
  
  
}
