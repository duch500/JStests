// global vars

let humanPoints = 0;
let botPoints = 0;

function getComputerChoice() {
    let compChoice;
    let fstchoice = Math.random();
    // alert(fstchoice);
    if (fstchoice < 1/3) {
        compChoice = "Rock";
    } else if (fstchoice < 2/3) {
        compChoice = "Scissors";
    } else {
        compChoice = "Paper";
    }
    return compChoice;
}

function getHumanChoice() {
    let hmnChoice = prompt("What are you choosing? (Scissors, Rock, Paper):");
    return hmnChoice;
}

function winCheck(hmnChoice, compChoice) {
    if (hmnChoice.toLowerCase() === compChoice.toLowerCase()) {
        alert("Remis podczas tej rundy!");
    } else if (
        (hmnChoice.toLowerCase() === "rock" && compChoice.toLowerCase() === "scissors") ||
        (hmnChoice.toLowerCase() === "paper" && compChoice.toLowerCase() === "rock") ||
        (hmnChoice.toLowerCase() === "scissors" && compChoice.toLowerCase() === "paper")
    ) {
        alert("Human won!");
        humanPoints++;
    } else {
        alert("Bot won!");
        botPoints++;
    }
}

function winCheckTotal() {
    if (botPoints > humanPoints) {
        alert(`Bot won! Stats: ${botPoints}:${humanPoints}!`);
    } else if (botPoints < humanPoints) {
        alert(`Human won! Stats: ${humanPoints}:${botPoints}!`);
    } else {
        alert(`REMIS! Stats: ${humanPoints}:${botPoints}!`);
    }
}


function GameCycle() {

    let numberRounds = parseInt(prompt("How many rounds do you want to play? : "));

    if (numberRounds <= 0 || numberRounds > 20){
        alert("Niedopuszczalna ilość rund!");
    }

    for (let x = 0; x != numberRounds; x++){

        let compChoice = getComputerChoice();
        let hmnChoice = getHumanChoice();


    
        winCheck(hmnChoice, compChoice);
        alert(`I picked: ${compChoice} \n U picked: ${hmnChoice}`);
    

    }

    let win = winCheckTotal();

    alert(win);


    
}

GameCycle();
