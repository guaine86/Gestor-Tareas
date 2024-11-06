export class TareasList{
    constructor(){
        this.listaTareas = [];
        this.cargarLocalStorage();
    }
    
    nuevaTarea(tarea){
        this.listaTareas.push(tarea);
        this.guardarLocalStorage();
    };
    
    eliminarTarea(id){
        this.listaTareas = this.listaTareas.filter(tarea => tarea.id != id);
        this.guardarLocalStorage();
    };
    
    marcarCompletado(id){
        for(const tarea of this.listaTareas){
            if(tarea.id == id){
                tarea.completado = !tarea.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    };

    eliminarCompletado(){
        this.listaTareas = this.listaTareas.filter(tarea => !tarea.completado);
    };
    guardarLocalStorage(){
        localStorage.setItem('tarea',JSON.stringify(this.listaTareas) );
    };
    cargarLocalStorage(){
        // if(localStorage.getItem('tarea')){
        //     this.listaTareas = JSON.parse(localStorage.getItem('tarea')) ;
        // }else{
        //     this.listaTareas = [];
        // };
        this.listaTareas = (localStorage.getItem('tarea')) ? JSON.parse(localStorage.getItem('tarea')) : [];
    };
}