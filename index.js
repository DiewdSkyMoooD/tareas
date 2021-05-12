const d=document;
const $formulario= d.getElementById("formulario");

$formulario.addEventListener('submit',introduciendo);

d.addEventListener('DOMContentLoaded',render)

function introduciendo(e){
    e.preventDefault();
    let $tarea=d.getElementById('tarea').value;
    let $descripcion=d.getElementById('descripcion').value;
    
    let tarea={
        $tarea,
        $descripcion
    }

    if(localStorage.getItem('tareas')===null){
        let tareas=[];
        tareas.push(tarea);
        localStorage.setItem('tareas',JSON.stringify(tareas))
    }else{
        let tareas=JSON.parse(localStorage.getItem('tareas'));
        tareas.push(tarea);
        localStorage.setItem('tareas',JSON.stringify(tareas));
    }
    
    render();
    $formulario.reset();
}

function render(){
    let $tbody=d.querySelector('tbody');
    let fragmento=d.createDocumentFragment();
    let tareas=JSON.parse(localStorage.getItem('tareas'));
    $tbody.innerHTML=''

        tareas.forEach(el => {
        
        let tdtarea= d.createElement('td');
        let tddescripcion= d.createElement('td');
        let tdboton=d.createElement('td');
        let boton=d.createElement('button');
        boton.classList.add('btn', 'btn-danger');
        boton.textContent="Borrar";
        let tr=d.createElement('tr');
        tdboton.appendChild(boton);
        tdtarea.textContent=el.$tarea;
        tddescripcion.textContent=el.$descripcion;
        tr.appendChild(tdtarea);
        tr.appendChild(tddescripcion);
        tr.appendChild(tdboton);
        fragmento.appendChild(tr);
        
        $tbody.appendChild(fragmento);
        
    });
    
    
    
}
