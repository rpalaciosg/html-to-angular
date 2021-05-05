import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: any = {};
  cargada: boolean = false;

  constructor(private http: HttpClient) {
    // console.log('Servicio de infoPage listo..!');

    //Leer archivo JSON src/assets/data/data-page.json con httpClient
    // Aqui puedo consumir sevricios Rest
    this.http.get('assets/data/data-page.json')
      .subscribe(resp => {
        this.cargada = true;
        this.info = resp;
        console.log(resp);
      });
  }
}
