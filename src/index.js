//import {saludar} from './js/funciones.js'
// import {Tareas} from './class/tareas.class'
// import {TareasList} from './class/tareas-lista.class'
import './styles.css'
import {Tareas, TareasList} from './class'
import {crearTareaHtml} from './js/funciones'

export const listaTareas = new TareasList;
const tarea = new Tareas('Practicar con webpack');

listaTareas.nuevaTarea(tarea);
console.log(listaTareas)

crearTareaHtml(tarea);