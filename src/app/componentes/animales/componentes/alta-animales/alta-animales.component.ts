import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Animal } from '../../../../clases/Animal';
import { AnimalesService } from '../../../../servicios/animales.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-alta-animales',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './alta-animales.component.html',
  styleUrl: './alta-animales.component.css'
})
export class AltaAnimalesComponent {
  @Output() animalCreado = new EventEmitter<Animal>();

  form: FormGroup;
  tiposAnimales: ('mamifero' | 'Ave' | 'Reptil')[] = ['mamifero', 'Ave', 'Reptil'];

  constructor(private animalService: AnimalesService) {
    this.form = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚ\\s]+$')
      ]),
      tipo: new FormControl('', Validators.required),
      cantidadDePatas: new FormControl('', [
        Validators.required,
        Validators.max(4),
        Validators.pattern('^[0-9]*$')
      ]),
      pesoPromedio: new FormControl('', [
        Validators.required,
        Validators.min(5),
        Validators.max(50),
        Validators.pattern('^[0-9]*$')
      ])
    });
  }

  async crearAnimal() {
    if (this.form.valid) {
      const nuevoAnimal: Animal = new Animal(
        this.form.value.nombre,
        this.form.value.tipo,
        this.form.value.cantidadDePatas,
        this.form.value.pesoPromedio
      );
      try {
        await this.animalService.altaAnimal(nuevoAnimal);
        this.animalCreado.emit(nuevoAnimal);
        this.showSuccessAlert('Animal creado exitosamente');
        this.form.reset();
      } catch (error) {
        console.error('Error al crear el animal:', error);
      }
    }
  }
  private showSuccessAlert(message: string) {
    return Swal.fire({
      title: 'Exito',
      text: message,
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }
}
