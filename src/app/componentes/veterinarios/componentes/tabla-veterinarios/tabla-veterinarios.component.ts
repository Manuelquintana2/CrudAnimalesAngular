import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Veterinario } from '../../../../clases/Veterinario';
import { VeterinariosService } from '../../../../servicios/veterinarios.service';

@Component({
  selector: 'app-tabla-veterinarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-veterinarios.component.html',
  styleUrl: './tabla-veterinarios.component.css'
})
export class TablaVeterinariosComponent {
  veterinarios$!: Observable<Veterinario[]>;

  @Output() veterinarioSeleccionado: EventEmitter<Veterinario> = new EventEmitter<Veterinario>();

  constructor(
    private veterinarioService: VeterinariosService
  ) {}

  ngOnInit(): void {
    this. veterinarios$ = this. veterinarioService.getVeterinarios();
  }

  seleccionarActor(veterinario : Veterinario): void {
    this.veterinarioSeleccionado.emit(veterinario);
  }

}
