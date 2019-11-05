import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Producto } from '../modelos/producto';

@Injectable({
  providedIn: 'root'
})
export class productoService {
  productlist: AngularFireList<any>;
  selectedProducto: Producto=new Producto();


  constructor(private firebase: AngularFireDatabase) { }
  getProductos(){
    return this.productlist= this.firebase.list('Productos');
  }

  insertProducto(producto: Producto){
    this.productlist.push({
      nombre: producto.nombre,
      categoria: producto.categoria,
      marca: producto.marca,
      precio: producto.precio
    });
  }

  updateProducto(producto: Producto){
    console.log(producto.$key)
    this.productlist.update(
      producto.$key,{
      nombre: producto.nombre,
      categoria: producto.categoria,
      marca: producto.marca,
      precio: producto.precio
    });
  }
  
  deleteProducto($clave: string){
    this.productlist.remove($clave);
  }
}
