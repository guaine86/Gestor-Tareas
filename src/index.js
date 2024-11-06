//import {saludar} from './js/funciones.js'
// import {Tareas} from './class/tareas.class'
// import {TareasList} from './class/tareas-lista.class'
import './styles.css';
import {Tareas, TareasList} from './class';
import {crearTareaHtml} from './js/funciones';

export const listaTareas = new TareasList;
console.log(listaTareas);
listaTareas.listaTareas.forEach(descripcion => {
    crearTareaHtml(descripcion);
});
// const tarea = new Tareas('Practicar con webpack');

// listaTareas.nuevaTarea(tarea);
// console.log(listaTareas)

// crearTareaHtml(tarea);

//localStorage.setItem('mi-key','ABC123');
//sessionStorage.setItem('nombre','Edward');

// setTimeout(()=>{
//     localStorage.removeItem('mi-key');
//     sessionStorage.removeItem('nombre');
// },1500)