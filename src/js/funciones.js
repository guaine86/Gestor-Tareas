import {Tareas} from '../class';
import {listaTareas} from '../index.js'

const divTareasLista = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');

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
    console.log(tareaElemento);
    console.log(tareaId);
    if (nombreElemento.includes('input')){
        listaTareas.marcarCompletado(tareaId);
        tareaElemento.classList.add('completed')
    }
    console.log(listaTareas)
})