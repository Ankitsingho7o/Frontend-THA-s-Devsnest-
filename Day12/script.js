let input = document.querySelector("input");
let plus = document.querySelector(".add");
let toDo = document.querySelector(".todos");
let button = document.querySelector(".button")
let quote = document.querySelector(".quote")

let items = [
    {
        title: "Click add to Add taks",
        done: false
    },
    {
        title: "Click minus to remove taks",
        done: false
    },
    {
        title: "Check checkbox to mark done.",
        done: false,
    }
]
localStorage.setItem("todos", items)
let sav = localStorage.getItem("todos");
console.log(sav);


function dos() {
    items.forEach((todu) => {
        update(todu);
    })

}
dos();
plus.addEventListener("click", () => {
    // Creating Taks
    let val = input.value;
    if (val.length !== 0) {
        const item = {
            title: val,
            done: false
        }
        items.push(item);
        update(item);
        // update(sav);
    }
    input.value = "";
})



function update(todu) {
    console.log(todu);
    let task = document.createElement("div");
    let del = document.createElement("button");
    let checkBox = document.createElement("input");
    task.classList.add("task");
    checkBox.type = "checkbox";
    del.classList.add("delete");
    del.addEventListener("click", (e) => {
        // e.path[1].classList.add("completedA");
        toDo.removeChild(e.path[1]);
        items = items.filter((item) => item !== todu.title)
        console.log(del, e);

    })
    checkBox.classList.add("check");
    checkBox.addEventListener("change", (e) => {
        e.path[1].classList.toggle("completed");
        if (todu.done) {
            todu.done = false
            console.log(e);   
        } else {
            todu.done = true
        }
    })
    task.innerHTML = todu.title;
    del.innerHTML = 'Delete'
    if (todu.done) {
        task.classList.add("completed");
    }
    task.appendChild(del);
    task.prepend(checkBox);
    // console.log(task);
    toDo.appendChild(task);
}


button.addEventListener("click", async () => {
    var fe = fetch("https://api.quotable.io/random?tags=famous-quotes");
    var aya = (await fe).json();
    var ayaa = await aya;
    quote.innerHTML =ayaa.content;
  })
// plus.addEventListener("click", () => {
//     //// Creating Taks
//     let val = input.value;
//     if (val.length !== 0) {
//         let creatingTasks = document.createElement("div");
//         creatingTasks.innerHTML = input.value;
//         creatingTasks.classList.add("task");
//         toDo.appendChild(creatingTasks);


//         /// Creating Delete 
//         let del = document.createElement("button");
//         del.innerHTML = "Delete";
//         del.classList.add("delete")
//         del.addEventListener("click", (e) => {
//             toDo.removeChild(e.path[1]);

//             console.log(del, e);

//         })
//         creatingTasks.appendChild(del);

//         //// Creating Check
//         let checkBox = document.createElement("input");
//         checkBox.type = "checkbox";
//         checkBox.classList.add("check");
//         creatingTasks.prepend(checkBox);
//         checkBox.addEventListener("change", (e) => {
//             e.path[1].classList.toggle("completed");
//         })
//         input.value = "";
//     }


// })

// function update() {
//     // checked  Elements

//     let task = document.querySelectorAll(".task");
//     let check = document.querySelectorAll(".check");

//     check.forEach((e, i) => {
//         e.addEventListener("change", () => {
//             console.log(task);
//             task[i].classList.toggle("completed");
//             console.log(i);
//         })
//     })


// }

// function removing() {
//     let dels = document.querySelectorAll(".delete");
//     let task = document.querySelectorAll(".task");
//     for (let a in dels)
//         dels[a].addEventListener("click", () => {
//             console.log(a);
//             task[a].remove();

//         })
// }