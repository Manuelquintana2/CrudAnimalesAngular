import { Component, EventEmitter, Output } from '@angular/core';
import { Veterinario } from '../../clases/Veterinario';
import { TablaVeterinariosComponent } from "./componentes/tabla-veterinarios/tabla-veterinarios.component";
import { DetalleVeterinarioComponent } from "./componentes/detalle-veterinario/detalle-veterinario.component";
import { DetallePaisComponent } from "./componentes/detalle-pais/detalle-pais.component";

@Component({
  selector: 'app-veterinarios',
  standalone: true,
  imports: [TablaVeterinariosComponent, DetalleVeterinarioComponent, DetallePaisComponent],
  templateUrl: './veterinarios.component.html',
  styleUrl: './veterinarios.component.css'
})
export class VeterinariosComponent {
  veterinarioSeleccionado!: Veterinario;

  @Output()veterinarioSeleccionadoParaDetalle: EventEmitter<Veterinario> = new EventEmitter<Veterinario>();

  alSeleccionarUnVeterinario(veterinario: Veterinario): void {
    this.veterinarioSeleccionado = veterinario;
    this.veterinarioSeleccionadoParaDetalle.emit(veterinario);
  }
}
