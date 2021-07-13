let first = document.querySelector(".first")
let second = document.querySelector(".second")
let button = document.querySelectorAll(".btn");
let result = document.querySelector(".result")


for(let i in button){
    button[i].addEventListener("click", ()=>{
        let a = parseInt(first.value);
        let b = parseInt(second.value);
        let c= button[i].innerHTML;
        calc(a,b,c);
        
    })
}

function calc(a,b,c){
     console.log(a,b,c);
     switch (c) {
         case "+":
              result.innerHTML= a+b;
             break;
         case "-":
              result.innerHTML= a-b;
             break;
         case "*":
              result.innerHTML= a*b;
             break;
         case "/":
              result.innerHTML= a/b;
             break;
     
         default:
             
             break;
     }
}
















// button.addEventListener("click", ()=>{
//     let a = parseInt(first.value);
//     let b = parseInt(second.value);
//     console.log(a+b);
// })
