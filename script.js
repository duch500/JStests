// global vars

let humanPoints = 0;
let botPoints = 0;

function getComputerChoice() {
    let compChoice;
    let fstchoice = Math.random();
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
    let hmnChoice = prompt("What are you choosing? (Scissors, Rock, Paper): ");
    return hmnChoice;
}

function winCheck(hmnChoice, compChoice) {
    if (hmnChoice.toLowerCase() === compChoice.toLowerCase()) {
        alert("DRAW this time!");
    } else if (
        (hmnChoice.toLowerCase() === "rock" && compChoice.toLowerCase() === "scissors") ||
        (hmnChoice.toLowerCase() === "paper" && compChoice.toLowerCase() === "rock") ||
        (hmnChoice.toLowerCase() === "scissors" && compChoice.toLowerCase() === "paper")
    ) {
        alert(`Human won! \n \nI picked: ${compChoice} \nYou picked: ${hmnChoice}`);
        humanPoints++;
    } else {
        alert(`Bot won! \n \nI picked: ${compChoice} \nYou picked: ${hmnChoice}`);
        botPoints++;
    }
}

function winCheckTotal() {
    if (botPoints > humanPoints) {
        return `Bot won! Stats: ${botPoints}:${humanPoints}!`;
    } else if (botPoints < humanPoints) {
        return `Human won! Stats: ${humanPoints}:${botPoints}!`;
    } else {
        return `DRAW! Stats: ${humanPoints}:${botPoints}!`;
    }
}

function GameCycle() {
    let numberRounds;
    while (true) {
        numberRounds = parseInt(prompt("How many rounds do you want to play? : "));

        // Sprawdzenie czy numberRounds jest poprawną liczbą
        if (!isNaN(numberRounds) && numberRounds > 0 && numberRounds <= 20) {
            break; // wyjście z pętli, gdy liczba rund jest poprawna
        } else {
            alert("INVALID AMOUNT OF ROUNDS!");
        }
    }

    for (let x = 0; x < numberRounds; x++) {
        let compChoice = getComputerChoice();
        let hmnChoice = getHumanChoice();
        winCheck(hmnChoice, compChoice);
    }

    let win = winCheckTotal();
    alert(win);
}

GameCycle();
