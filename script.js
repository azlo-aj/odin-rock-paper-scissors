const maxHP = 3
let playerHP = maxHP
let computerHP = maxHP
let imgs = document.querySelectorAll('img');
let wait = false;
let computerHealth = document.querySelector('#computer .health');
let playerHealth = document.querySelector('#player .health');
let h1 = document.querySelector('#middle > h1');
let button = document.querySelector('button');
let weapon = document.querySelector('#weapon');
let mid = document.querySelector('#middle');

function reset() {
    // let all = document.querySelectorAll('body *');
    // all.forEach((node) => {node = ""});
    if (mid.contains(button)) {
        mid.removeChild(button);
    }
    computerHealth.innerHTML = "";
    playerHealth.innerHTML = "";

    let heart = document.createElement('div');
    heart.setAttribute('class', 'hp');
    heart.textContent = "♥";
    for (i=0; i < maxHP; i++) {
        computerHealth.appendChild(heart.cloneNode(true));
        playerHealth.appendChild(heart.cloneNode(true));
        // weapon.removeChild(button);
    }
    startPulse();
}

reset()

function startPulse(){
    let player = document.querySelector('#player .health .hp');
    let computer = document.querySelector('#computer .health .hp');
    player.style.animation = "pulse 0.8s linear infinite";
    computer.style.animation = "pulse 0.8s linear infinite";
}
startPulse();

function onHover(e) {
    e.target.style.width = "250px";
}
function onMouseout(e) {
    e.target.style.width = "";
}
imgs.forEach(function(node) {node.addEventListener('mouseover', onHover)});
imgs.forEach(function(node) {node.addEventListener('mouseleave', onMouseout)});


// let rock = document.getElementById('rock');
// let paper = document.getElementById('paper');
// let scissors = document.getElementById('scissors');

function animateChoice(e) {
    // if (wait) {
    //     return;
    // }
    e.target.style.animation = "select 0.6s linear 1";
    
}



function getComputerChoice() {
    let roll = Math.random();
    if (roll < 0.33) {
        return "rock";
    } else if (roll < 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}


function winRound() {
    wait = true;
    h1.textContent = "GOOD JOB! KEEP GOING...";
    h1.style.color = "yellowgreen";
    h1.addEventListener('animationend', () => {h1.style.animation = "";})
    h1.style.animation = "bounce 0.3s linear 1";
    let hp = document.querySelector('#computer .health .hp')
    hp.style.animation = "explode 1s linear 1";
    hp.addEventListener('animationend', () => {
        if (computerHP == 0){return}
        h1.style.color = "white";
        computerHealth.removeChild(document.querySelector('#computer .health .hp'));

        computerHP--;
        if (computerHP !== 0) {
            startPulse();
            wait = false;}
        else {checkHPs()}
    })
}
function loseRound() {
    wait = true;
    h1.textContent = "OH NO! TRY AGAIN...";
    h1.style.color = "red";
    h1.addEventListener('animationend', () => {h1.style.animation = "";})
    h1.style.animation = "shake 0.3s linear 1";
    let hp = document.querySelector('#player .health .hp')
    hp.style.animation = "explode 1s linear 1";
    hp.addEventListener('animationend', () => {
        if (playerHP == 0){return}
        playerHealth.removeChild(document.querySelector('#player .health .hp'));
        h1.style.color = "white";
        
        playerHP--;
        if (playerHP !== 0) {
            startPulse();
            wait = false;}
        else {checkHPs()}
    })
}


function tieRound() {
    wait = true;
    h1.textContent = "IT'S A TIE!";
    h1.style.color = "cyan";
    h1.style.animation = "squish 0.3s linear 1";
    h1.addEventListener('animationend', () => {
        h1.style.animation = "";
        h1.style.color = "white";
        wait = false;
    })
}

function checkHPs() {
    if ((playerHP === 0 || computerHP === 0)) {
        if (playerHP === 0) {
            h1.textContent = "YOU LOSE";
        }
        if (computerHP === 0) {
            h1.textContent = "YOU WIN";
        }
        let replay = document.createElement('button');
        replay.textContent = "PLAY AGAIN";
        replay.style.color = "white";
        
        
        weapon.style.transform = "scale(1, 0)";
        weapon.style.opacity = "0%";
        if (!(mid.contains(button))) {
            replay.addEventListener('click', reset);
            mid.appendChild(replay);
            h1.after(replay);
            
        }
    }

}


function playRound(e) {
    if (wait || playerHP === 0 || computerHP === 0) {
        return;
    }
    wait = true;
    e.currentTarget.addEventListener('animationend', (e) => {e.currentTarget.style.animation = "";})
    e.currentTarget.style.animation = "select 0.3s linear 1";
    let playerChoice = e.currentTarget.getAttribute('id');
    let computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) {
        tieRound();
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        winRound();
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        winRound();
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        winRound();
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        winRound();
    } else {
        loseRound();
    }
    // checkHPs();
}


imgs.forEach(function(node) {node.addEventListener('click', playRound)});

// function game() {
//     for (let games = 0; games < 5; games++) {
//         let computerChoice = getComputerChoice();
//         let playerChoice = prompt("Please type your choice");
//         let result = playRound(playerChoice, computerChoice);
//         console.log(result)
//         if (result.includes("win")) {
//             playerWins += 1;
//         } else if (result.includes("lose")) {
//             computerWins += 1;
//         } else {
//             continue;
//         }
//     } 
//     if (playerWins === computerWins) {
//         return "THERE ARE NO WINNERS!"
//     } else if (playerWins > computerWins) {
//         return "YOU ARE THE CHAMPION!"
//     } else if (playerWins < computerWins) {
//         return "YOU ARE A LOSER"
//     }
// }

// console.log(game())
