import { Component, OnInit } from '@angular/core';
import { GitGubService } from '../../servicios/git-gub.service';

interface Usuario {
  nombreUsuario: string;
  imagen: string;
  nombre: string;
  localidad: string;
  cantidadRepos: number; // Cambiado a number
}


@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css'
})
export class BienvenidaComponent implements OnInit {

  datos: Usuario = {
    nombreUsuario: '',
    imagen: '',
    nombre: '',
    localidad: '',
    cantidadRepos: 0, 
  };

  constructor(private github: GitGubService) {}

  ngOnInit(): void {
    this.github.traerDatos().subscribe((data) => {
      this.datos.nombreUsuario = data.nombreUsuario;
      this.datos.imagen = data.imagen;
      this.datos.nombre = data.nombre;
      this.datos.localidad = data.localidad;
      this.datos.cantidadRepos = data.cantidadRepos; // Se alinea con el tipo number
    });
  }
}
