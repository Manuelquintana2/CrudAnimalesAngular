import { Component } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { FirebaseService } from '../../servicios/firebase.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  error:string = '';
  exito = true;

  constructor(private router: Router,private firestore : Firestore ,private firebaseService: FirebaseService ) {
  }

  async login() {
    try{
      // Implementación de la autenticación con Firebase
        await this.firebaseService.login(this.email, this.password).then(() => {
        let col = collection(this.firestore, "logins");
        let obj = {fecha : new Date(), "user": this.email}
        addDoc(col, obj);
        this.showSuccessAlert("Logueado exitosamente");
        this.router.navigate(['/Bienvenida']);
      });
    }catch(e:any){
      this.exito = false;
      switch (e.code) {
        case 'auth/invalid-email':
          this.error = 'La dirección de correo electrónico es inválida.';
          break;
        case 'auth/invalid-credential':
          this.error = 'Contraseña o mail incorrectos.';
          break;
        case 'auth/user-disabled':
          this.error ='La cuenta de usuario ha sido deshabilitada.';
          break;
        case 'auth/user-not-found':
          this.error ='No se encuentra una cuenta con esta dirección de correo electrónico.';
          break;
        case 'auth/wrong-password':
          this.error ='La contraseña proporcionada es incorrecta.';
          break;
        default:
          this.error ='Error desconocido.';
          break;
      }
      console.log(e.code);
    }
  }
  AutoCompletarAdmin() {
    this.email = "admin@gmail.com";
    this.password = "hola123";
  }
  AutoCompletarEmpleado() {
    this.email = "empleado@gmail.com";
    this.password = "hola123";
  }
  volverAlHome(){
    this.router.navigate(['/Bienvenida']);
  }
  private showSuccessAlert(message: string) {
    return Swal.fire({
      title: 'Exito',
      text: message,
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }
}
