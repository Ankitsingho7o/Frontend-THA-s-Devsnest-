let start = document.querySelector(".start");
let questionsContaner = document.querySelector(".questions");
let next = document.querySelector(".next");
let questionHeading = document.querySelector(".questionsHeading");
let options = document.querySelector(".options");





const questions = [
  {
    question: "Who is the primeminster of India ?",
    answers: [
      {
        option: 4, correct: true
      },
      {
        option: 3, correct: false
      }
    ]
  },
  {
    question: "Who is te primeminster of India ?",
    answers: [
      {
        option: 4, correct: true
      },
      {
        option: 3, correct: false
      }
    ]
  },
  {
    question: "Who is the primeminster of  ?",
    answers: [
      {
        option: 4, correct: true
      },
      {
        option: 3, correct: false
      }
    ]
  },
  {
    question: "Who is the primem of India ?",
    answers: [
      {
        option: 4, correct: true
      },
      {
        option: 3, correct: false
      }
    ]
  },
  {
    question: "Who is  primeminster of India ?",
    answers: [
      {
        option: 4, correct: true
      },
      {
        option: 3, correct: false
      }
    ]
  }
]

let shuffledQuestions, currentQuestionsIndex;

start.addEventListener("click", startGame)
next.addEventListener("click", ()=> {
            currentQuestionsIndex++
            setNextQuestion()

})
function startGame() {
  start.classList.add("hide")
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionsIndex = 0;
  questionsContaner.classList.remove("hide");
  next.classList.remove("hide")
  setNextQuestion()
}

function setNextQuestion() {
  resetQuestion()
  showQuestions(shuffledQuestions[currentQuestionsIndex])
}

function showQuestions(ques) {
  questionHeading.innerHTML = ques.question;
  var answers = ques.answers;
  answers.forEach(answer => {
    let button = document.createElement("button")
    button.innerHTML = answer.option
    button.classList.add("btn")
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    options.appendChild(button);
  })

}

function resetQuestion() {
  while (options.firstChild) {
    options.removeChild(options.firstChild)
  }
}
function selectAnswer(e) {
  let selectedButton = e.target
  let correct = selectedButton.dataset.correct
  Array.from(options.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if(shuffledQuestions.length > currentQuestionsIndex+1){
        next.classList.remove("hide")
  }
  else
  {
    start.innerHTML = "Restart"
    next.classList.add("hide")
    start.classList.remove("hide")
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add("correct")
  } else {
    element.classList.add("wrong")
  }
}

function clearStatusClass(element) {
  element.classList.remove("wrong")
  element.classList.remove("correct")

}