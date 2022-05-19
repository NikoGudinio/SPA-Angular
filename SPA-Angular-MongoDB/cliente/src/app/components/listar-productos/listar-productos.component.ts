import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  listProductos: Producto[] = [];

  constructor(private _productoservice: ProductoService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this._productoservice.getProductos().subscribe(data => {
      console.log(data);
      this.listProductos = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarProducto(id: any) {
    this._productoservice.eliminarProducto(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado con Exito', 'Producto Eliminado');
      this.getProductos();
    }, error => {
      console.log(error);
    })
  }
}
