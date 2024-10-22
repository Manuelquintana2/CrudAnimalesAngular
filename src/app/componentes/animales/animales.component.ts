import { Component } from '@angular/core';
import { Animal } from '../../clases/Animal';
import { TablaAnimalesComponent } from "./componentes/tabla-animales/tabla-animales.component";
import { AltaAnimalesComponent } from "./componentes/alta-animales/alta-animales.component";
import { ModificacionAnimalComponent } from "./componentes/modificacion-animal/modificacion-animal.component";
import { BajaAnimalesComponent } from "./componentes/baja-animales/baja-animales.component";

@Component({
  selector: 'app-animales',
  standalone: true,
  imports: [TablaAnimalesComponent, AltaAnimalesComponent, ModificacionAnimalComponent, BajaAnimalesComponent],
  templateUrl: './animales.component.html',
  styleUrl: './animales.component.css'
})
export class AnimalesComponent {
  animalSeleccionado!: Animal;

  alSeleccionarAnimal(animal: Animal) {
    this.animalSeleccionado = animal;
  }
}
