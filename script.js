// global vars

let humanPoints = 0;
let botPoints = 0;

function getComputerChoice(){
    let compChoice;
    let fstchoice = Math.random();
    console.log(fstchoice);
    if (fstchoice < 1/3) {
        compChoice = "Rock";
    } else if (fstchoice < 2/3) {
        compChoice = "Scissors";
    } else {
        compChoice = "Paper";
    }
    return compChoice;


}

function getHumanChoice(){

    let hmnChoice = prompt("What are you choosing? (Scissors, Rock,Paper):");
    return hmnChoice;
    

}

function winCheck(hmnChoice, compChoice, botPoints, humanPoints){

    if (hmnChoice == compChoice){
        console.log("Remis!");
    }
    else if(hmnChoice == "Rock" || hmnChoice =="rock" && compChoice == "Scissors"){
        console.log("Human won!");
        humanPoints++;
    }

    else if(hmnChoice == "Rock" || hmnChoice =="rock" && compChoice == "Paper"){
        console.log("Bot won!");
        botPoints++;
    }

    else if(hmnChoice == "Paper" || hmnChoice =="paper" && compChoice == "Rock"){
        console.log("Human won!");
        humanPoints++;
    }

    else if(hmnChoice == "Paper" || hmnChoice =="paper" && compChoice == "Scissors"){
        console.log("Bot won!");
        botPoints++;
    }

    else if(hmnChoice == "Scissors" || hmnChoice =="scissors" && compChoice == "Paper"){
        console.log("Human won!");
        humanPoints++;
    }
    else if(hmnChoice == "Scissors" || hmnChoice =="scissors" && compChoice == "Rock"){
        console.log("Bot won!");
        botPoints++;
    }
    else{
        console.log("Something went terribly wrong...");
    }


}

function winCheckTotal(){

    if(botPoints > humanPoints){
        console.log(`Bot won! Stats: ${botPoints}:${humanPoints}!`);
    }
    else if(botPoints < humanPoints){
        console.log(`Human won! Stats: ${humanPoints}:${botPoints}!`);
    }
    else{
        console.log("DRAW");
    }
}


function GameCycle() {
    let compChoice = getComputerChoice();
    let hmnChoice = getHumanChoice();
    
    winCheck(hmnChoice, compChoice, botPoints, humanPoints);
    console.log(`I picked: ${compChoice}`);
    console.log(`U picked: ${hmnChoice}`);
}


GameCycle();