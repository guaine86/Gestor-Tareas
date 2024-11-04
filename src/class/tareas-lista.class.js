export class TareasList{
    constructor(){
        this.listaTareas = [];
    }
    
    nuevaTarea(tarea){
        this.listaTareas.push(tarea);
    };
    
    eliminarTare(id){

    };
    
    marcarCompletado(id){
        for(const tarea of this.listaTareas){
            if(tarea.id == id){
                tarea.completado = !tarea.completado;
                break;
            }
        }
    };

    eliminarCompletado(){
        
    }
}