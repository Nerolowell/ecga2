import { Component, OnInit } from '@angular/core';
//servicio
import{productoService} from '../../../servicios/producto.service';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms'; import { ReactiveFormsModule } from '@angular/forms';


import { Producto } from 'src/app/modelos/producto';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(public productoService: productoService, public toastr: ToastrService) { }

  ngOnInit() {
    this.productoService.getProductos();
    this.resetForm();
  }
  onSubmit(productoForm: NgForm){
    if(productoForm.value.$key==undefined){
      this.productoService.insertProducto(productoForm.value);
      this.toastr.success("Producto agregado correctamente")
      
    }else if(productoForm.value.$key!=undefined){
      this.productoService.updateProducto(productoForm.value);
      this.toastr.success("Producto modificado correctamente")
    }
    this.resetForm(productoForm);
  }
  resetForm(productoForm?: NgForm){
    if(productoForm!=null)
    productoForm.reset();
    this.productoService.selectedProducto=new Producto();
  }


}
