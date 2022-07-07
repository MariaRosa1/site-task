//funcao para adicionar a task
function task(){

    const taskTitle = document.querySelector("#task-title").value;
    
    if(taskTitle){

        //seleciona a li
        const liClone = document.querySelector(".li-clone")

        //faz o clone da li
        const newTask = liClone.cloneNode(true)
               
        //add o texto do input
        newTask.querySelector(".task-title").textContent = taskTitle

        //remove as classes
        newTask.classList.remove("li-clone")
        newTask.classList.remove("hide")

        //add a task
        const list = document.getElementById("task-list")
        list.appendChild(newTask)

        //deixa o input vazio para adicionar uma nova task
        document.querySelector("#task-title").value = ""


        // evento remover task
        const btnRemove = newTask.querySelector('.remove-btn').addEventListener("click", function(){
            removeTask(this);
        })

        //evento task feita
        const btnDone = newTask.querySelector('.done-btn').addEventListener("click", function(){
            completeTask(this);

        })

    } else{
        alert("Digite uma tarefa para adicionar")
    }
}

//funcao de remover a task
function removeTask(task){
    task.parentNode.remove(true)
}


//funcao da task completa
function completeTask(task){
    const taskToComplete = task.parentNode.classList.toggle("done")
}


//mapeando botao
const addBtn = document.getElementById('add-btn');

addBtn.addEventListener("click", function(){
    task();
})