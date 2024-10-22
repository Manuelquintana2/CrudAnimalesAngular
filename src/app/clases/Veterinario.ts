export class Veterinario{
    nombre: string;
    dni:number;
    edad:number;
    matricula:number;
    atiendeDomicilio:boolean;
    nacionalidad:string;

    constructor(nombre: string, dni:number, edad:number, matricula: number, atiendeDomicilio: boolean, nacionalidad: string){
        this.nombre = nombre;
        this.dni = dni;
        this.edad = edad;
        this.matricula = matricula;
        this.atiendeDomicilio = atiendeDomicilio;
        this.nacionalidad = nacionalidad;
    }
}