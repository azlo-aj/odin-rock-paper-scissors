

function onHover(e) {
    e.target.img.width = "250px";
}

function onMouseout(e) {
    e.target.img.width = "200px";
}

function pulsate(node) {
    node.style.fontSize = "64px";

}


let weapons = document.querySelectorAll('#weapon > *');
weapons.forEach(function(node) {node.addEventListener('mouseover', onHover)});
weapons.forEach(function(node) {node.addEventListener('mouseleave', onMouseout)});

let hp = document.querySelector('#player .health .hp');
hp.style.animation = "pulse 1s linear infinite;";



// let acceptableSelections = ['ROCK', 'PAPER', 'SCISSORS']
// let playerWins = 0
// let computerWins = 0

// function getComputerChoice() {
//     let roll = Math.random();
//     if (roll < 0.33) {
//         return "ROCK";
//     } else if (roll < 0.67) {
//         return "PAPER";
//     } else {
//         return "SCISSORS";
//     }
// }
// function playRound(playerSelection, computerSelection) {
//     playerSelection = playerSelection.toUpperCase();
//     if (acceptableSelections.includes(playerSelection) === false) {
//         console.log("That is not an acceptable choice.");
//         playerSelection = prompt("Please type your choice");
//         return playRound(playerSelection, computerSelection)
//     }
//     else if (playerSelection === computerSelection) {
//         return ("It's a tie!");
//     } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
//         return ("You win!");
//     } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
//         return ("You win!");
//     } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
//         return ("You win!");
//     } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
//         return ("You win!");
//     } else {
//         return ("You lose!");
//     }
// }
// function game() {
//     for (let games = 0; games < 5; games++) {
//         let computerSelection = getComputerChoice();
//         let playerSelection = prompt("Please type your choice");
//         let result = playRound(playerSelection, computerSelection);
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
