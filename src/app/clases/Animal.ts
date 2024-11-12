export class Animal{
    id?: string;
    nombre: string;
    tipo:'mamifero' | 'Ave' | 'Reptil';
    cantidadDePatas:number;
    pesoPromedio : number;

    constructor(nombre:string, tipo:'mamifero' | 'Ave' | 'Reptil', cantidadDePatas:number, pesoPromedio:number,id?: string){
        this.nombre = nombre;
        this.tipo = tipo;
        this.cantidadDePatas = cantidadDePatas;
        this.pesoPromedio = pesoPromedio;
        this.id = id;
    }
}