
//// keyboard
window.addEventListener("keydown", (e) => {
    var key = e.key;
    anime(key)
})


function anime(key) {
    var ke = document.querySelector("." + key)
    var h1 = document.querySelector(".heading")
    h1.innerHTML = "You pressed " + ke.innerHTML + " key!";
    ke.classList.add("awe")
    setTimeout(() => {
        ke.classList.remove("awe")
    }, 700);
}


/////Dragable

function draging(e){
    console.log(e);
    e.dataTransfer.setData("text", e.target.id)
}
function dropEvent(e){
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    console.log(e.target);
    e.target.appendChild(document.getElementById(data));
}

function allowDrop(event){
    event.preventDefault();
}

////Video
var video = document.querySelector(".video");
var h1 = document.querySelector(".h1")
var h2 = document.querySelector(".h2")
window.addEventListener("keydown", (e)=>{
    console.log(e.key);
     if(e.code === "Space"){
         if(video.paused){
             video.play();
             h1.innerHTML = "Video is Played!"
              
         }else{
             video.pause();
             h1.innerHTML = "Video is Paused!"
         }
     }
    if(e.key == "m"){
       if(video.muted){
          video.muted = false
          h2.innerHTML = "Video is Unmuted!"
       }else{
           video.muted= true
           h2.innerHTML = "Video is Muted!"
       }
    }

})