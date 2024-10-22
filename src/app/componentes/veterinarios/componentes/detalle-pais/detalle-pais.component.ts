import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { PaisesService } from '../../../../servicios/paises.service';

@Component({
  selector: 'app-detalle-pais',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-pais.component.html',
  styleUrl: './detalle-pais.component.css'
})
export class DetallePaisComponent {

  @Input() pais!: string | undefined;
  countryDetails: any; // Holds country information like population, capital, etc.
  errorMessage: string = '';

  constructor(private paisesService: PaisesService) {
  }

  // React to changes in the country input
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pais'] && this.pais) {
      this.getPaisDetails(this.pais);
    }
  }

  // Fetch country details by name
  getPaisDetails(nombre: string) {
    this.paisesService.traerPaisporNombre(nombre).subscribe({
      next: (data) => {
        this.countryDetails = data;
      },
      error: (err) => {
        this.errorMessage = `Error fetching details for ${nombre}`;
        console.error(err);
      }
    });
  }

}
