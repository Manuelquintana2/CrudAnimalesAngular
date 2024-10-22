import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from "sweetalert2";
import { ListadoPaisesComponent } from "./componentes/listado-paises/listado-paises.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { VeterinariosService } from '../../servicios/veterinarios.service';
import { Veterinario } from '../../clases/Veterinario';

@Component({
  selector: 'app-alta-veterinario',
  standalone: true,
  imports: [CommonModule, ListadoPaisesComponent, ReactiveFormsModule],
  templateUrl: './alta-veterinario.component.html',
  styleUrl: './alta-veterinario.component.css'
})
export class AltaVeterinarioComponent {

  form!: FormGroup;
  nacionalidad: string = '';

  constructor(
    private veterinarioService:VeterinariosService
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl("", [
        Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚ\\s]+$'),
        Validators.required
      ]),
      edad: new FormControl("", [
        Validators.min(21),
        Validators.max(65),
        Validators.required
      ]),
      dni: new FormControl("", [
        Validators.pattern('^[0-9]{8}$'),
        Validators.required
      ]),

      matricula: new FormControl("", [
        Validators.pattern(/^\d{6,}$/),  // Correcto: Sin comillas y usando regex directamente
        Validators.required
      ]),

      atiendeDomicilio: new FormControl("",Validators.required),

      nacionalidad: new FormControl("", [
        Validators.required
      ]),
    });
  }

  get nombre() {
    return this.form.get('nombre');
  }

  get edad() {
    return this.form.get('edad');
  }

  get dni() {
    return this.form.get('dni');
  }

  get matricula(){
    return this.form.get("matricula");
  }

  
  alSeleccionarUnPais(nombrePais: string): void {
    this.nacionalidad = nombrePais;
    this.form.patchValue({nacionalidad: nombrePais});
  }

  altaVeterinario(): void {
    if (this.form.invalid) {
      return;
    }

    const veterinario = new Veterinario(this.form.value.nombre,
      this.form.value.dni,
      this.form.value.edad,
      this.form.value.matricula,
      this.form.value.atiendeDomicilio,
      this.nacionalidad
    );
    this.veterinarioService.altaVeterinario(veterinario)
      .then((): void => {
        this.showSuccessAlert('Veterinario dado de alta exitosamente.').then(() => {
          this.form.reset();
          this.nacionalidad = "";
        });
      })
      .catch(error => {
        this.showErrorAlert('Error al dar de alta al veterinario: ' + error).then(() => {
          this.form.reset();
          this.nacionalidad = "";
        });
      });
  }

  /**
   * Muestra mensaje de exito
   * @param message
   * @private
   */
  private showSuccessAlert(message: string) {
    return Swal.fire({
      title: 'Nuevo Veterinario!',
      text: message,
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }

  /**
   * Muestra mensaje de error
   * @param message
   * @private
   */
  private showErrorAlert(message: string) {
    return Swal.fire({
      title: 'Error!',
      text: message,
      icon: 'error',
      confirmButtonText: 'Cerrar'
    });
  }
}
