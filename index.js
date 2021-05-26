const d=document;
const $formulario= d.getElementById("formulario");
$formulario.addEventListener('submit',introduciendo);
d.addEventListener('DOMContentLoaded',render)
// add task
function introduciendo(e){
    e.preventDefault();
    let $tarea=d.getElementById('tarea').value;
    let $descripcion=d.getElementById('descripcion').value;
    if($tarea===''||$descripcion===''){
    }else{
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
}
//render the view
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
        boton.onclick=borrar;
        let tr=d.createElement('tr');
        tdboton.appendChild(boton);
        tdtarea.textContent=el.$tarea;
        tddescripcion.textContent=el.$descripcion;
        tr.appendChild(tdtarea);
        tr.appendChild(tddescripcion);
        tr.appendChild(tdboton);
        fragmento.appendChild(tr);
    });
    $tbody.appendChild(fragmento);
}
//delete a task
function borrar(e){
    let tr=e.target.parentNode.parentNode;
    let tareas=JSON.parse(localStorage.getItem('tareas'));
    for(let i=0;i<tareas.length;i++){
        if(tareas[i].$tarea===tr.firstChild.textContent){
            tareas.splice(i,1)
        }
        localStorage.setItem('tareas',JSON.stringify(tareas));
    }
    render();
}