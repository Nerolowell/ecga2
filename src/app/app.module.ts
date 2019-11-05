import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ToastrModule} from 'ngx-toastr'
import {CommonModule} from '@angular/common' 

// firebase
import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import{FormsModule} from '@angular/forms';
//Componentes
import { ProductosComponent } from './componentes/productos/productos.component';
import { ListaProductoComponent } from './componentes/productos/lista-producto/lista-producto.component';
import { ProductoComponent } from './componentes/productos/producto/producto.component';
//servicios
import {productoService} from './servicios/producto.service';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ListaProductoComponent,
    ProductoComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right'
    }),
    
    
    
  ],
  providers: [
    productoService,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
