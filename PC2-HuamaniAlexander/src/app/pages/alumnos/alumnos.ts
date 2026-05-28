import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.css'
})
export class Alumnos {

  nuevoCodigo: string = '';
  nuevoNombre: string = '';

  alumnos = [
    {
      codigo: 'A001',
      nombre: 'Alexaner Huamani',
      curso: 'Desarrollo Web',
      nota1: 15,
      nota2: 18
    },    
    {
      codigo: 'A002',
      nombre: 'Maria Gomez',
      curso: 'Desarrollo Web',
      nota1: 17,
      nota2: 16
    }
  ];

  calcularPromedio(nota1: number, nota2: number): number {
    return (nota1 + nota2) / 2;
  }

  obtenerEstado(n1: number, n2: number): string {

    const promedio: number = (n1 + n2) / 2;

    if (promedio >= 13) {
      return 'Aprobado';
    } else {
      return 'Desaprobado';
    }

  }

  agregarAlumno() {
    const nuevoAlumno = {
      codigo: this.nuevoCodigo,
      nombre: this.nuevoNombre,
      curso: 'Desarrollo Web',
      nota1: 0,
      nota2: 0
    };

    this.alumnos.push(nuevoAlumno);

    this.nuevoCodigo = '';
    this.nuevoNombre = '';
  }

  
}

