const choices = ["rock", "paper", "scissor"];

// Generating a random choice for the computer player
function computerPlay() {
  const rand = Math.floor(Math.random() * choices.length);
  return choices[rand];
}


let rock = document.getElementById("fist");
let paper = document.getElementById("hand");
let scissor = document.getElementById("scissor");

// scores functions
let userScore = localStorage.getItem('userScore') ? parseInt(localStorage.getItem('userScore')) : 0;
let pcScore = localStorage.getItem('computerScore') ? parseInt(localStorage.getItem('computerScore')) : 0;

function updateScores() {
  document.getElementById('myscore').innerText = userScore;
  document.getElementById('csecore').innerText = pcScore;
  localStorage.setItem('userScore', userScore);
  localStorage.setItem('computerScore', pcScore);
}

updateScores();


let userrock = document.getElementById("iffistwin");
let userpaper = document.getElementById("ifhandwin");
let userscissor = document.getElementById("ifscissorwin");

let pcrock = document.getElementById("fistwinpc");
let pcpaper = document.getElementById("handwinpc");
let pcscissor = document.getElementById("scissorwinpc");

const footer = document.getElementById("foot");
const left = document.getElementById("leftd");
const right = document.getElementById("rightd");
const text3 = document.getElementById("winnerloser");

const nextbtn = document.getElementById("nextbtn");

// Very Important ID'd
const cont1 = document.getElementById("cont1");
const cont2 = document.getElementById("cont2");

let playbtn = document.getElementById("playbutn");

const toggleBtn = document.getElementById('btn');
const toggleDiv = document.getElementById('rule');
const cross = document.getElementById('cross');

toggleBtn.addEventListener('click', () => {
  console.log('clicked');
  toggleDiv.classList.remove('hidden');
  cross.classList.remove('hidden');
});

cross.addEventListener('click', () => {
  toggleDiv.classList.add('hidden');
  cross.classList.add('hidden');
});

playbtn.addEventListener("click", function () {
  // Hide the play button and next button
  playbtn.classList.add("hidden");
  nextbtn.classList.add("hidden");
  
  // Hide the text and footer
  text3.classList.add("hidden");
  footer.classList.remove("hidden");
  

  left.classList.add("hidden");
  right.classList.add("hidden");

  var userElements = [userrock, userpaper, userscissor];
  var pcElements = [pcrock, pcpaper, pcscissor];
  
 
   function hideElements(elements) {
     for (var i = 0; i < elements.length; i++) {
       elements[i].classList.add("hidden");
       elements[i].classList.remove("rounded-gradient-borders");
     }
   }
  
  // Hide user and PC elements
  hideElements(userElements);
  hideElements(pcElements);
});

function afterclick() {
  text3.classList.remove("hidden");
  playbtn.classList.remove("hidden");
  footer.classList.add("hidden");
  left.classList.remove("hidden");
  right.classList.remove("hidden");
}

function win() {
  document.getElementById("text1").innerHTML = "You WIN";
  playbtn.innerHTML = "Play Again";
  nextbtn.classList.remove("hidden");
}

function lose() {
  document.getElementById("text1").innerHTML = "You LOSE";
  playbtn.innerHTML = "Play Again";
}

function tie() {
  document.getElementById("text1").innerHTML = "Tie UP";
  playbtn.innerHTML = "Replay";
}

nextbtn.addEventListener("click", function () {
  nextbtn.classList.add("hidden");
  cont1.classList.add("hidden");
  cont2.classList.remove("hidden");
});

function displayComputerChoice(computerChoice) {
  // Hide all computer choices initially
  pcrock.classList.add("hidden");
  pcpaper.classList.add("hidden");
  pcscissor.classList.add ("hidden");

  // Display the computer's choice
  if (computerChoice === "rock") {
    pcrock.classList.remove("hidden");
  } else if (computerChoice === "paper") {
    pcpaper.classList.remove("hidden");
  } else if (computerChoice === "scissor") {
    pcscissor.classList.remove("hidden");
  }
}

function playGame(userChoice) {
  const computerChoice = computerPlay();
  let resultMessage = "";

  // Determine the outcome
  if (userChoice === computerChoice) {
    resultMessage = "It's a Tie!";
    tie();
  } else if (
    (userChoice === "rock" && computerChoice === "scissor") ||
    (userChoice === "scissor" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    userScore++;
    resultMessage = "You Win!";
    win();
  } else {
    pcScore++;
    resultMessage = "You Lose!";
    lose();
  }

  // Update the scores in the display and localStorage
  updateScores();
  document.getElementById("text1").innerText = resultMessage;

  // Display the computer's choice
  displayComputerChoice(computerChoice);
}

// Event listeners for user choices
rock.addEventListener("click", function () {
  afterclick();
  userrock.classList.remove("hidden");
  playGame('rock');
});

paper.addEventListener("click", function () {
  afterclick();
  userpaper.classList.remove("hidden");
  playGame('paper');
});

scissor.addEventListener("click", function () {
  afterclick();
  userscissor.classList.remove("hidden");
  playGame('scissor');
});
