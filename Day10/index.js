var box = document.querySelectorAll(".box");
var heading = document.querySelector(".score");
let flip = 0;
// let scores = 0;


function win() {
    let matched_cards = document.querySelectorAll(".matched");
    if (matched_cards.length == 12) {
        // console.log(matched_cards.length);
        alert("You won");
        location.reload();
    }
}



function shuffle() {
    box.forEach((box) => {
        let rand = Math.floor(Math.random() * 13);
        box.style.order = rand;
    });
}

shuffle();

for (let a in box) {
    box[a].addEventListener('click', () => {
        if (!box[a].classList.contains("flip") && flip < 2) {
            box[a].classList.add("flip")
            flip++;
        };
        if (flip == 2) {
            var fliped = document.querySelectorAll(".flip");
            let f1 = fliped[0].childNodes[2].src;
            let f2 = fliped[1].childNodes[2].src;
            // console.log(f1, f2);
            setTimeout(() => {
                for (let i in fliped) {
                    if (f1 == f2) {
                        fliped[i].classList.add("matched");
                        // fliped[0].classList.add("matched");
                        // fliped[1].classList.add("matched");
                        win();

                    }
                    if (fliped[i].classList.contains("flip")) {
                        fliped[i].classList.remove("flip");
                    }
                    flip = 0;
                }
            }, 600)

        }
    })
}