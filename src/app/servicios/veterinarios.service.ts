import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, CollectionReference, Firestore } from '@angular/fire/firestore';
import { Veterinario } from '../clases/Veterinario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeterinariosService {

  private veterinarioCollection: CollectionReference;

  constructor(
    private firestore: Firestore
  ) {
    this.veterinarioCollection = collection(this.firestore, 'veterinarios');
  }

  async altaVeterinario(veterinario: Veterinario): Promise<void> {
    try {
      await addDoc(this.veterinarioCollection, {
        nombre: veterinario.nombre,
        dni: veterinario.dni,
        edad: veterinario.edad,
        matricula: veterinario.matricula,
        atiendeDomicilio: veterinario.atiendeDomicilio,
        nacionalidad: veterinario.nacionalidad,
      });

    } catch (error) {
      throw error;
    }
  }

  getChoferes(): Observable<Veterinario[]> {
    return collectionData(this.veterinarioCollection, { idField: 'id' }) as Observable<Veterinario[]>;
  }
}
