export class Animal{
    nombre: string;
    tipo:'mamifero' | 'Ave' | 'Reptil';
    cantidadDePatas:number;
    pesoPromedio : number;

    constructor(nombre:string, tipo:'mamifero' | 'Ave' | 'Reptil', cantidadDePatas:number, pesoPromedio:number){
        this.nombre = nombre;
        this.tipo = tipo;
        this.cantidadDePatas = cantidadDePatas;
        this.pesoPromedio = pesoPromedio;
    }
}