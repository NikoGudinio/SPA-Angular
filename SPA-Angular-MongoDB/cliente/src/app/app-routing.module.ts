import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { HomeProductoComponent } from './components/home-producto/home-producto.component';
import { AboutUsComponent } from './components/about-us/about-us.component';


const routes: Routes = [
  { path: '', component: HomeProductoComponent},
  { path: 'listar-producto', component: ListarProductosComponent},
  { path: 'crear-producto', component: CrearProductoComponent},
  { path: 'editar-producto/:id', component: CrearProductoComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
