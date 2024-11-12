import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Animal } from '../../../../clases/Animal';
import { AnimalesService } from '../../../../servicios/animales.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-modificacion-animal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './modificacion-animal.component.html',
  styleUrl: './modificacion-animal.component.css'
})
export class ModificacionAnimalComponent {
  @Input() animal!: Animal;
  @Output() animalModificado = new EventEmitter<Animal>();

  form: FormGroup;
  tiposAnimal: ('mamifero' | 'Ave' | 'Reptil')[] = ['mamifero', 'Ave', 'Reptil'];

  constructor(private animalService: AnimalesService) {
    this.form = new FormGroup({
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

  ngOnInit(): void {
    if (this.animal) {
      this.form.patchValue({
        tipo: this.animal.tipo,
        cantidadDePatas: this.animal.cantidadDePatas,
        pesoPromedio: this.animal.pesoPromedio
      });
    }
  }

  async modificarVehiculo() {
    if (this.form.valid) {
      const animalModificado: Animal = new Animal(
        this.animal.nombre, // No se modifica el nombre
        this.form.value.tipo,
        this.form.value.cantidadDePatas,
        this.form.value.pesoPromedio
      );
      try {
        await this.animalService.actualizarAnimal(this.animal.id!, animalModificado);
        this.animalModificado.emit(animalModificado);
        this.showSuccessAlert("Animal modificado exitosamente")
        this.form.reset();
      } catch (error) {
        console.error('Error al modificar el vehículo:', error);
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
