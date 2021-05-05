import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { ProductoDescripcion } from '../interfaces/producto-descripcion.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http.get<Producto[]>('https://html-to-angular-c904d-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((resp: Producto[]) => {
        this.productos = resp;
        this.cargando = false;
      });
  }

  getProducto(id: string) {
    return this.http.get<ProductoDescripcion>(`https://html-to-angular-c904d-default-rtdb.firebaseio.com/productos/${id}.json`);
  }
}
