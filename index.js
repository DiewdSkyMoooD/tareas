const d=document;
let $formulario= d.getElementById("formulario");

$formulario.addEventListener('submit',introduciendo);


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



    
}

function render(){
    let $tbody=d.querySelector('tbody');
    
}
render();