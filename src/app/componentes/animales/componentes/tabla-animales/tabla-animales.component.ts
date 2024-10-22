import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../../../../clases/Animal';
import { AnimalesService } from '../../../../servicios/animales.service';

@Component({
  selector: 'app-tabla-animales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-animales.component.html',
  styleUrl: './tabla-animales.component.css'
})
export class TablaAnimalesComponent {
  animales$!: Observable<Animal[]>

  constructor(
    private animalesService: AnimalesService
  ) { }

  ngOnInit(): void {
    this. animales$ = this.animalesService.getAnimales();
  }

  @Output() animalSeleccionado = new EventEmitter<Animal>();

  verDetalles(animal:Animal) {
    this.animalSeleccionado.emit(animal);
  }
}
