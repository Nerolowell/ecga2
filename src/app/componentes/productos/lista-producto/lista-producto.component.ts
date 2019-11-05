import { Component, OnInit } from '@angular/core';
//servicio
import {productoService} from '../../../servicios/producto.service';
import { Producto } from 'src/app/modelos/producto';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {
  productoList:Producto[];

  constructor(public productoService: productoService, public toastr:ToastrService ) { }
 

  ngOnInit() {
    this.productoService.getProductos().snapshotChanges().subscribe(item=>{
      this.productoList=[];
      item.forEach(element =>{
        let x= element.payload.toJSON();
        x["$key"]=element.key;
        this.productoList.push(x as Producto);
      })
     })
  }

  onEdit(producto:Producto){
    this.productoService.selectedProducto=Object.assign({},producto);
  }

  onDelete($key:string){
    this.productoService.deleteProducto($key);
  
    this.toastr.success('SE HA BORRADO EXITOSAMENTE', "Producto eliminado");

  }


}
