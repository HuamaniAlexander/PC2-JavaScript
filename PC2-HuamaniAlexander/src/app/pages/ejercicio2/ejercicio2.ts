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
  nombre: string = '';
  correo: string = '';
  altura: number = 0;
  peso: number = 0;
  imc: number = 0;
  diagnostico: string = '';
  mensaje: string = '';

  validarInfoIMC(): boolean {
    if (this.altura <= 0 || this.peso <= 0) {
      this.mensaje = 'Por favor ingrese una altura y peso validos';
      return false;
    }
    return true;
  }

  validarDatosPersonales(): boolean {
    if (!this.nombre.trim()) {
      this.mensaje = 'Por favor ingrese un nombre valido';
      return false;
    }

    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(this.correo)) {
      this.mensaje = 'Por favor ingrese un correo valido';
      return false;
    }

    return true;
  }

  procesar() {
    if (!this.validarDatosPersonales() || !this.validarInfoIMC()) {
      this.imc = 0;
      return;
    }

    const alturaMetros = this.altura;
    this.imc = parseFloat((this.peso / (alturaMetros * alturaMetros)).toFixed(2));

    if (this.imc < 18.5) {
      this.diagnostico = 'Bajo peso';
    } else if (this.imc < 25) {
      this.diagnostico = 'Peso Saludable';
    } else if (this.imc < 30) {
      this.diagnostico = 'Sobrepeso';
    } else {
      this.diagnostico = 'Obesidad';    
    }
  }

  limpiar() {
    this.altura = 0;
    this.peso = 0;
    this.imc = 0;
    this.diagnostico = '';
    this.nombre = '';
    this.correo = '';
  }
  
}