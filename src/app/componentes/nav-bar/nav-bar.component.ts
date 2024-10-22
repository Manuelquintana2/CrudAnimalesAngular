import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, RouterOutlet,CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(
    private router: Router,
    public auth: Auth
  ) {
  }

  closeSession(){
    signOut(this.auth).then(() => {
      this.showErrorAlert("Logueate para acceder a las funciones").then(() => {
        this.router.navigate(['/Bienvenida']);
      });
    })
  }

  private showErrorAlert(message: string) {
    return Swal.fire({
      title: 'Cerraste sesión!',
      text: message,
      icon: 'error',
      confirmButtonText: 'Cerrar'
    });
  }
}
