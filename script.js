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
let middle = document.querySelector('#middle');
let t0 = performance.now();


function startPulse(){
    let player = document.querySelector('#player .health .hp');
    let computer = document.querySelector('#computer .health .hp');
    player.style.animation = "pulse 0.8s linear infinite";
    computer.style.animation = "pulse 0.8s linear infinite";
}

function reset() {
    let button = document.querySelector('button');
    if (middle.contains(button)) {
        middle.removeChild(button);
    }
    computerHealth.innerHTML = "";
    playerHealth.innerHTML = "";
    h1.textContent = "CHOOSE YOUR WEAPON";
    weapon.style.transform = "scale(1, 1)";
    weapon.style.opacity = "100%";

    let heart = document.createElement('div');
    heart.setAttribute('class', 'hp');
    heart.textContent = "♥";
    for (i=0; i < maxHP; i++) {
        computerHealth.appendChild(heart.cloneNode(true));
        playerHealth.appendChild(heart.cloneNode(true));
    }
    startPulse();
    playerHP = maxHP
    computerHP = maxHP
}

function checkHPs() {
    if ((playerHP === 0 || computerHP === 0)) {
        
        if (playerHP === 0) {
            h1.textContent = "YOU LOSE";
        }
        if (computerHP === 0) {
            h1.textContent = "YOU WIN";
        }
        let replayButton = document.createElement('button');
        replayButton.textContent = "PLAY AGAIN";
        replayButton.style.color = "white";
        
        let button = document.querySelector('button');
        weapon.style.transform = "scale(1, 0)";
        weapon.style.opacity = "0%";
        if (!(middle.contains(button))) {
            middle.appendChild(replayButton);
            replayButton.addEventListener('click', reset); 
            h1.after(replayButton);
}}}

function winRound() {
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
            startPulse()}
        else {checkHPs()}
})}

function loseRound() {
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
            startPulse()}
        else {checkHPs()}
})}

function tieRound() {
    h1.textContent = "IT'S A TIE!";
    h1.style.color = "cyan";
    h1.style.animation = "squish 0.3s linear 1";
    h1.addEventListener('animationend', () => {
        h1.style.animation = "";
        h1.style.color = "white";
        checkHPs();
})}

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
function playRound(e) {
    let t1 = performance.now();
    if (!((t1-t0) > 700)) {
        return;
    }
    if (playerHP === 0 || computerHP === 0) {
        return;
    }
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
    checkHPs();
    t0 = performance.now();
}


imgs.forEach(function(node) {node.addEventListener('click', playRound)});
imgs.forEach(function(node) {node.addEventListener('mouseover', (e) => {e.target.style.width = "250px"})});
imgs.forEach(function(node) {node.addEventListener('mouseleave', (e) => {e.target.style.width = ""})});
reset();
