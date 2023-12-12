import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Publicaciones } from '../interfaces/publicacion';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  rutaGetAllPublis = `${environment.apiURL}/publicaciones`
  rutaGetOnePubli = `${environment.apiURL}/publicaciones/`
  rutaAddOnePubli = `${environment.apiURL}/publicaciones/`
  constructor(private http: HttpClient) { }

  getAllPublis(): Observable<Publicaciones[]> {
    return this.http.get<Publicaciones[]>(this.rutaGetAllPublis);
  }


  getOnePubli(idRecibida: number): Observable<Publicaciones> {
    return this.http.get<Publicaciones>(this.rutaGetOnePubli + idRecibida);
  }


  addPubli(publicacion: Publicaciones): Observable<Publicaciones> {
    return this.http.post<Publicaciones>(this.rutaAddOnePubli, publicacion)
  }

  updateLikes(idRecibida : number, newPubli : Publicaciones) : Observable<Publicaciones>{
    return this.http.put<Publicaciones>(this.rutaGetOnePubli + idRecibida,newPubli) ;
  }
}
