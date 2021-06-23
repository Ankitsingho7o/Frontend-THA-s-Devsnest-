var box = document.querySelectorAll(".box");
var boxClicked = document.querySelectorAll(".boxClicked");
var firstHeading = document.querySelector(".first");
var secondHeading = document.querySelector(".second");
var bookedSeat =0;
firstHeading.innerHTML = "Booked Seat:" + 0;
secondHeading.innerHTML = " Remaining Seat:" + 36;

var remaningSeat = 36;
for (let key in box) {
    box[key].addEventListener('click', () => {
        if (box[key].classList.contains("boxclicked")) {
            box[key].classList.remove("boxclicked");
             firstHeading.innerHTML= "Booked Seat:" + --bookedSeat; 
             secondHeading.innerHTML = " Remaining Seat:" + ++remaningSeat;
        }
        else {
            box[key].classList.add("boxclicked");
            firstHeading.innerHTML =  "Booked Seat:" + ++bookedSeat; 
            secondHeading.innerHTML = " Remaining Seat:" + --remaningSeat;
        }
    });
}

