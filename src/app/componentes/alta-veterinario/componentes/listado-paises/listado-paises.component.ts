import {Component, EventEmitter, Output} from '@angular/core';
import {PaisesService} from "../../../../servicios/paises.service";
import {CommonModule, NgForOf} from "@angular/common";

interface Pais {
  id: string;
  nombre: string;
  bandera: string;
}
@Component({
  selector: 'app-listado-paises',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-paises.component.html',
  styleUrl: './listado-paises.component.css'
})
export class ListadoPaisesComponent {
  paises: Pais[] = [];

  @Output() paisSeleccionado = new EventEmitter<string>();

  constructor(
    private countryService: PaisesService
  ) { }

  ngOnInit(): void {
    this.countryService.traerPaises().subscribe((data) => {
      this.paises = data.map((country) => ({
        id: country.cca3,
        nombre: country.name.common,
        bandera: country.flags.svg,
      }));
    });
  }

  elegirPais(name: string): void {
    this.paisSeleccionado.emit(name);
  }
}
