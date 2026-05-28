import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio2.html',
  styleUrl: './ejercicio2.css'
})
export class Ejercicio2 {
  producto: string = '';
  precio: number = 0;
  cantidad: number = 0;

  subtotal: number = 0;
  igv: number = 0;
  descuento: number = 0;
  total: number = 0;

  procesar() {
    if (this.precio <= 0 || this.cantidad <= 0) {
      alert('Ingrese precio y cantidad válidos');
      return;
    }

    this.subtotal = this.precio * this.cantidad;
    this.igv = this.subtotal * 0.18;

    if (this.subtotal >= 200) {
      this.descuento = this.subtotal * 0.10;
    } else {
      this.descuento = 0;
    }

    this.total = this.subtotal + this.igv - this.descuento;
  }

  limpiar() {
    this.producto = '';
    this.precio = 0;
    this.cantidad = 0;

    this.subtotal = 0;
    this.igv = 0;
    this.descuento = 0;
    this.total = 0;
  }
}