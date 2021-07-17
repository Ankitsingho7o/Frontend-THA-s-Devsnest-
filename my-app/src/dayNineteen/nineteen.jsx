// import React from 'react'

// const Nineteen = ()=>{
//       let i =0;
//     let a = document.getElementById("counter");
//     console.log(a);
//     return(

//       <>
//        <button id="counter">
//          {i}
//        </button>
//       </>
//     )
// }


// export default Nineteen;


import React, { Component } from 'react'

export default class Nineteen extends Component {
    render() {
        let i =0;
        let a = document.getElementById("counter");
        console.log(a);
        a.addEventListener("click", ()=>{
            i++;
        })
        return (
            <div>
                <button id="counter">
                          {i}
                </button>
            </div>
       
        )
    }
}

// export default function nineteen() {
//     return (
//         <div>
            
//         </div>
//     )
// }
