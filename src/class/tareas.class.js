export class Tareas{
    constructor(tarea){
        this.descripcion = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.fecha = new Date();
    }
}