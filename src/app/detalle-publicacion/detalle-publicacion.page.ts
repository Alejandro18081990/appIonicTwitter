import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Publicaciones } from '../interfaces/publicacion';
import { PublicacionesService } from '../services/publicaciones.service';

@Component({
  selector: 'app-detalle-publicacion',
  templateUrl: './detalle-publicacion.page.html',
  styleUrls: ['./detalle-publicacion.page.scss'],
})
export class DetallePublicacionPage implements OnInit {
  idRecibida: number
  publicacion!: Publicaciones
  
  constructor(private route: ActivatedRoute, private servicio : PublicacionesService) {
    this.idRecibida = 0;
  }

  ngOnInit() {
    this.route.params.subscribe((params) => { this.idRecibida = params['id'] });
    this.getOnePubli();
  }


  

  getOnePubli() {
    this.servicio.getOnePubli(this.idRecibida).subscribe(respuesta => {this.publicacion = respuesta
      console.log(respuesta);
      })
  }
}
