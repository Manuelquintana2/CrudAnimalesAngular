import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, CollectionReference, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { Animal } from '../clases/Animal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {

  private animalesCollection: CollectionReference;

  constructor(
    private firestore: Firestore
  ) {
    this.animalesCollection = collection(this.firestore, 'animales');
  }

  async altaAnimal(animal: Animal): Promise<void> {
    try {
      await addDoc(this.animalesCollection, {
        nombre: animal.nombre,
        tipo : animal.tipo,
        cantidadDePatas: animal.cantidadDePatas,
        pesoPromedio: animal.pesoPromedio
      });
    } catch (error) {
      throw error;
    }
  }

  async actualizarAnimal(id: string, animal: Animal): Promise<void> {
    const animalDoc = doc(this.firestore, `animales/${id}`);
    try {
      await updateDoc(animalDoc, {
        tipo: animal.tipo,
        cantidadDePatas: animal.cantidadDePatas,
        pesoPromedio: animal.pesoPromedio
      });
    } catch (error) {
      throw error;
    }
  }

  async eliminarAnimal(id: string): Promise<void> {
    const vehiculoDoc = doc(this.firestore, `animales/${id}`);
    try {
      await deleteDoc(vehiculoDoc);
    } catch (error) {
      throw error;
    }
  }
  getAnimales(): Observable<Animal[]> {
    return collectionData(this.animalesCollection, { idField: 'id' }) as Observable<Animal[]>;
  }
}
