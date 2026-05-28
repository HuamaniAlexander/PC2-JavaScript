import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio1.html',
  styleUrl: './ejercicio1.css'
})
export class Ejercicio1 {
  nota1: number = 0;
  nota2: number = 0;
  nota3: number = 0;
  nota4: number = 0;

  suma: number = 0;
  resta: number = 0;
  multiplicacion: number = 0;
  promedio: number = 0;
  promedioSinMenor: number = 0;
  estado: string = '';

  validarNota(event: Event, campo: 'nota1' | 'nota2' | 'nota3' | 'nota4') {
    const input = event.target as HTMLInputElement;

    let valor = input.value.replace(/[^0-9.]/g, '');

    if (valor === '') {
      this[campo] = 0;
      input.value = '';
      return;
    }

    let numero = Number(valor);

    if (numero > 20) {
      numero = 20;
    }

    if (numero < 0) {
      numero = 0;
    }

    this[campo] = numero;
    input.value = String(numero);
  }

  validarNotas(): boolean {
    const notas = [this.nota1, this.nota2, this.nota3, this.nota4];

    for (let nota of notas) {
      if (nota < 0 || nota > 20) {
        alert('Las notas deben estar entre 0 y 20');
        return false;
      }
    }

    return true;
  }

  procesar() {
    if (!this.validarNotas()) {
      return;
    }

    const notas = [this.nota1, this.nota2, this.nota3, this.nota4];

    this.suma = this.nota1 + this.nota2 + this.nota3 + this.nota4;
    this.resta = this.nota1 - this.nota2 - this.nota3 - this.nota4;
    this.multiplicacion = this.nota1 * this.nota2 * this.nota3 * this.nota4;
    this.promedio = this.suma / 4;

    const menor = Math.min(...notas);
    this.promedioSinMenor = (this.suma - menor) / 3;

    this.estado = this.promedio >= 11 ? 'Aprobado' : 'Desaprobado';
  }

  limpiar() {
    this.nota1 = 0;
    this.nota2 = 0;
    this.nota3 = 0;
    this.nota4 = 0;

    this.suma = 0;
    this.resta = 0;
    this.multiplicacion = 0;
    this.promedio = 0;
    this.promedioSinMenor = 0;
    this.estado = '';
  }
}