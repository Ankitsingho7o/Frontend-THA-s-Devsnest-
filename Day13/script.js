var button = document.querySelector(".btn")
var divs = document.querySelector(".image")
var photo = document.querySelector("img")


// //////////////// discord API/////////
// button.addEventListener("click",  async()=>{
//        fetch("",{
//        method:"post" ,
//        headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//           },
//           body:JSON.stringify({content:"Band kro Band kro atyachar band kro"})

//        })
//       .then(res => res.json())
//       .then(data=> console.log(data))
// })

button.addEventListener("click", async () => {
  var fe = fetch("https://meme-api.herokuapp.com/gimme");
  var aya = (await fe).json();
  var ayaa = await aya;

  var img = ayaa.url;
  console.log(img);
   photo.src= `${img}`;
})

// button.addEventListener("click",  async()=>{
//     fetch("https://meme-api.herokuapp.com/gimme")
//     .then(res=> res.json())
//     .then(data=> data.url)

//     })




// setInterval(async()=>{
//     fetch("https://discord.com/api/webhooks/860475816177827840/z8a1zy_bVQdL_FMHuOPl6yBmhZJi-3Sw4Q1_pqy4dQXllpZOiKhtT8E1hFVYH2Yy-lcl",{
//     method:"post" ,
//     headers: {
//          'Accept': 'application/json',
//          'Content-Type': 'application/json'
//        },
//        body:JSON.stringify({content:"Band kro Band kro atyachar band kro"})

//     })
//    .then(res => res.json())
//    .then(data=> console.log(data))
// }, 5000)
// })