import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoPagina } from '../interfaces/info-age.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: infoPagina = {};
  cargada: boolean = false;
  equipo: any = [];

  constructor(private http: HttpClient) {

    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    this.http.get('assets/data/data-page.json')
      .subscribe((resp: infoPagina) => {
        this.cargada = true;
        this.info = resp;
        // console.log(resp);
      });
  }

  private cargarEquipo() {
    this.http.get('https://html-to-angular-c904d-default-rtdb.firebaseio.com/equipo.json')
      .subscribe(resp => {
        this.equipo = resp;
        // console.log(resp);
      });
  }
}
