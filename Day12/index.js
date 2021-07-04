let input = document.querySelector("input");
let add = document.querySelector(".add");
let toDo = document.querySelector(".todos");
// let dele = document.querySelectorAll(".delete");


const todolist = [
    {
        title: "hello",
       
    },
    {
        title: "hey",
       
    },
  
]
 function dos(){
     todolist.map(todu =>{      
    console.log(todu);
    let task = document.createElement("div");
    let del = document.createElement("button");
    let check = document.createElement("input");
    check.type = "checkbox";
    del.classList.add("delete");
    task.classList.add("tasks");
    check.classList.add("check");    // console.log(del.classList);
    task.innerHTML = todu.title;
    del.innerHTML = "Delete"
    task.appendChild(del);
    task.prepend(check);
    // console.log(task);
    toDo.appendChild(task);



})}
dos();
add.addEventListener("click", () => {
    let val = input.value;
    let task = document.createElement("div");
    let del = document.createElement("button");
    let check = document.createElement("input");
    check.type = "checkbox";
    del.classList.add("delete");
    task.classList.add("tasks");
    check.classList.add("check");    // console.log(del.classList);
    task.innerHTML = val;
    del.innerHTML = "Delete";
    task.appendChild(del);
    task.prepend(check);
    // console.log(task);
    toDo.appendChild(task);
    input.value = " ";
    update();
    delma();
    // console.log(dele);
})

function update() {
    let tasks = document.querySelectorAll(".tasks");
    let ceh = document.querySelectorAll(".check");
     for(let j in ceh){
         console.log(j);
        ceh[j].addEventListener("change", () => {
            if(tasks[j].classList.contains("completed")){
                //  console.log(tasks[j].classList.contains("completed"));
                 tasks[j].classList.remove("completed");
            }else{
                tasks[j].classList.add("completed")
            }
            // tasks[j].classList.add("completed");
            // console.log(j);
        })
    }

}

function delma() {
    let tasks = document.querySelectorAll(".tasks");
    let dele = document.querySelectorAll(".delete");
    // dele.forEach((box, i)=>{
    //     dele[i].addEventListener("click", () => {
    //         console.log(i);
    //         tasks[i].remove();
    //     })
    // })
    for (let i in dele) {
        dele[i].addEventListener("click", () => {
            console.log(i);
            tasks[i].remove()
        })
    }
}
// update();
// dels();



// for (var i = 0; i < dele.length; i++) {
//     console.log(i);
//     dele[i].addEventListener("click", () => {
//         console.log(dele);
//         tasks.remove();

//     })
// }



