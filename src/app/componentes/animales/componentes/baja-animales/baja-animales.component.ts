import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Animal } from '../../../../clases/Animal';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AnimalesService } from '../../../../servicios/animales.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-baja-animales',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './baja-animales.component.html',
  styleUrl: './baja-animales.component.css'
})
export class BajaAnimalesComponent {

  @Input() animal!: Animal;
  form: FormGroup;

  constructor(private animalService: AnimalesService) {
    this.form = new FormGroup({
      nombre: new FormControl({ value: '', disabled: true }),
      tipo: new FormControl({ value: '', disabled: true }),
      cantidadDePatas: new FormControl({ value: '', disabled: true }),
      pesoPromedio: new FormControl({ value: '', disabled: true })
    });
  }

  ngOnInit(): void {
    if (this.animal) {
      this.form.patchValue({
        nombre: this.animal.nombre,
        tipo: this.animal.tipo,
        cantidadDePatas: this.animal.cantidadDePatas,
        pesoPromedio: this.animal.pesoPromedio
      });
    }
  }

  async eliminarAnimal() {
    if (this.animal) {
      try {
        await this.animalService.eliminarAnimal(this.animal.id!);
        console.log(`Animal ${this.animal.nombre} eliminado.`);
        this.showSuccessAlert("Eliminado correctamente")
        this.form.reset();
      } catch (error) {
        console.error('Error al eliminar el animal:', error);
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
