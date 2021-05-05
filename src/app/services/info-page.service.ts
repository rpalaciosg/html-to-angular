import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoPagina } from '../interfaces/info-age.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: infoPagina = {};
  cargada: boolean = false;

  constructor(private http: HttpClient) {
    // console.log('Servicio de infoPage listo..!');

    //Leer archivo JSON src/assets/data/data-page.json con httpClient
    // Aqui puedo consumir sevricios Rest
    this.http.get('assets/data/data-page.json')
      .subscribe((resp: infoPagina) => {
        this.cargada = true;
        this.info = resp;
        console.log(resp);
      });
  }
}
