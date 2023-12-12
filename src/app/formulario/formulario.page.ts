import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from '../services/publicaciones.service';
import { Publicaciones } from '../interfaces/publicacion';
import { ToastController } from '@ionic/angular';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  usuario!: string;
  publicacion!: string;
  publiAnadida: Publicaciones = {
    usuario: '', contenido: '',
    id: 0,
    likes: 0,
    respuestas: [{ usuario: '', contenido: '' }]
  };
  
  publicacionesSize! : number

  constructor(private servicio: PublicacionesService, private toast: ToastController, private route: Router) {

  }

  ngOnInit() {
    this.getSize();
  }

  getSize(){
    this.servicio.getAllPublis().subscribe(respuesta => {
      this.publicacionesSize = respuesta.length
      console.log(this.publicacionesSize);
    })
  };    
  

  addPublicacion() {
    this.publicacionesSize++;
    this.publiAnadida.id = this.publicacionesSize;
    this.publiAnadida.usuario = this.usuario;
    this.publiAnadida.contenido = this.publicacion;
    this.publiAnadida.likes = 0;
    this.servicio.addPubli(this.publiAnadida).subscribe(() => {
      this.presentToast('bottom', "Publicación añadida!!")
      this.route.navigate(['home']);
    })
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', mensaje: string) {
    const toast = await this.toast.create({
      message: mensaje,
      duration: 600,
      position: position,
    });


    await toast.present();
  }


}
