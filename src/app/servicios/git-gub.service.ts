import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

interface UserResponse {
  login: string;
  avatar_url: string;
  name: string;
  location: string;
  public_repos: number; 
}

export interface Usuario {
  nombreUsuario: string;
  imagen: string;
  nombre: string;
  localidad: string;
  cantidadRepos: number; 
}

@Injectable({
  providedIn: 'root'
})
export class GitGubService {

  private apiUrl: string = 'https://api.github.com/users/Manuelquintana2';

  constructor(private http: HttpClient) {}

  traerDatos(): Observable<Usuario> {
    return this.http.get<UserResponse>(this.apiUrl).pipe(
      map(response => ({
        nombreUsuario: response.login,
        imagen: response.avatar_url,
        nombre: response.name,
        localidad: response.location,
        cantidadRepos: response.public_repos,
      }))
    );
  }
}
