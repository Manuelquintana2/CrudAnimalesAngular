import { Component, Input } from '@angular/core';
import { Veterinario } from '../../../../clases/Veterinario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-veterinario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-veterinario.component.html',
  styleUrl: './detalle-veterinario.component.css'
})
export class DetalleVeterinarioComponent {
  @Input() veterinarioSeleccionado!: Veterinario;
}
