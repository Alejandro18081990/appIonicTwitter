import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from '../services/publicaciones.service';
import { Publicaciones } from '../interfaces/publicacion';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  publicaciones!: Publicaciones[];

  constructor(private servicio: PublicacionesService) { }


  ngOnInit(): void {
    this.getAllPublis();
  }

  getAllPublis() {
    this.servicio.getAllPublis().subscribe(respuesta => {
      this.publicaciones = respuesta
    })
  };

  upLikes(publicacion: Publicaciones) {
    var indice = this.publicaciones.indexOf(publicacion)
    this.publicaciones[indice].likes++;
    this.servicio.updateLikes(this.publicaciones[indice].id, this.publicaciones[indice]);
  }

  ionViewWillEnter(){
    this.getAllPublis();
  }
}
