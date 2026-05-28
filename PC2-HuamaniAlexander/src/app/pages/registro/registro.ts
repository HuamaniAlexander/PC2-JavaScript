import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { productosData } from '../productos/productos';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {
  nombre = '';
  categoria = '';
  precio = 0;
  stock = 0;
  productoRegistrado = false;

  guardarProducto() {
    productosData.push({
      nombre: this.nombre,
      categoria: this.categoria,
      precio: this.precio,
      fechaRegistro: new Date(),
      stock: this.stock
    });
    this.productoRegistrado = true;
  }

  limpiarFormulario() {
    this.nombre = '';
    this.categoria = '';
    this.precio = 0;
    this.stock = 0;
    this.productoRegistrado = false;
  }
}