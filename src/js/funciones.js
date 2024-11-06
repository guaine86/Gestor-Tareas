import {Tareas} from '../class';
import {listaTareas} from '../index.js'

const divTareasLista = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');

export const crearTareaHtml = (tarea) =>{
    const htmlTarea = `
     <li class="${(tarea.completado)? 'completed': ''}" data-id="${tarea.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(tarea.completado)? 'checked': ''}>
            <label>${tarea.descripcion}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;
    const div = document.createElement('DIV');
    div.innerHTML = htmlTarea;
    
    divTareasLista.append(div.firstElementChild);
    return div;
}

//Eventos
txtInput.addEventListener('keyup',(evento)=>{
    //console.log(evento)
    if(evento.keyCode === 13 && txtInput.value.length >0){
        const nuevaTarea = new Tareas(txtInput.value);
        listaTareas.nuevaTarea(nuevaTarea);
        crearTareaHtml(nuevaTarea);
        txtInput.value = '';
    }
})

divTareasLista.addEventListener('click',(evento)=>{
    const nombreElemento = evento.target.localName;
    const tareaElemento = evento.target.parentElement.parentElement;
    const tareaId = tareaElemento.getAttribute('data-id');
    // console.log(nombreElemento);
    // console.log(tareaElemento);
    // console.log(tareaId);
    if (nombreElemento.includes('input')){
        listaTareas.marcarCompletado(tareaId);
        tareaElemento.classList.add('completed')
    }else if(nombreElemento.includes('button')){
        listaTareas.eliminarTarea(tareaId);
        divTareasLista.removeChild(tareaElemento);
    }
    //console.log(listaTareas)
})

btnBorrar.addEventListener('click', () =>{
    listaTareas.eliminarCompletado();
    //console.log(listaTareas);
    for(let i = divTareasLista.children.length -1; i>=0; i--){
        const elemento = divTareasLista.children[i];
        //console.log(elemento);
        if(elemento.classList.contains('completed')){
            divTareasLista.removeChild(elemento);
        }
    }


})