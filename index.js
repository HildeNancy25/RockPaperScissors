var moves = document.getElementById("moves");
const rockEmo = document.getElementById("rock");
const paperEmo = document.getElementById("paper");
const scissorsEmo = document.getElementById("scissors");

rockEmo.innerHTML = ("👊");
paperEmo.innerHTML = ("🖐️");
scissorsEmo.innerHTML = ("✌️");

//the functions

const getUserChoice = (userInput) =>{
    // userInput = userInput.toLowerCase();

    if (userInput === rockEmo || userInput === paperEmo || userInput === scissorsEmo){
        return userInput;
    } 
};

var input = getUserChoice(moves);

const getComputerChoice = () =>{
    const random = Math.floor(Math.random() * 3);

    if (random === 0){
        return 'rock';
    } else if (random === 1){
        return 'paper';
    } else if (random === 2){
        return 'scissors';
    } else {
        return 'computer error';
    }
};
const rdm = getComputerChoice('scissors');

let userWin = 0;
let computerWin = 0;
const determineWinner = (userChoice, computerChoice) =>{
    if (userChoice === computerChoice){
        document.getElementById("output").innerHTML = "no one scored.";
    }
    if (userChoice === paperEmo){
        if (computerChoice === 'rock'){
            userWin++;
            document.getElementById("output").innerHTML = "your score: "+ userWin + "  computer score: "+ computerWin ;
        } 
        else {
            computerWin++;
            document.getElementById("output").innerHTML = "your score: "+ userWin + "  computer score: "+ computerWin ;
        }
    }

    if (userChoice === rockEmo){
        if (computerChoice === 'scissors'){
            userWin++;
            document.getElementById("output").innerHTML = "your score: "+ userWin + "  computer score: "+ computerWin ;
        } else {
            computerWin++;
            document.getElementById("output").innerHTML = "your score: "+ userWin + "  computer score: "+ computerWin ;            
        }
    }

    if (userChoice === scissorsEmo){
        if (computerChoice === 'paper'){
            userWin++;
            document.getElementById("output").innerHTML = "your score: "+ userWin + "  computer score: "+ computerWin ;
        } else {
            computerWin++;
            document.getElementById("output").innerHTML = "your score: "+ userWin + "  computer score: "+ computerWin ;
        }
    } 
}; 

var result = determineWinner(input, rdm);

function playGame (){
    var userChoice = getUserChoice(paperEmo);
    var computerChoice = getComputerChoice(rockEmo);
    console.log(determineWinner(userChoice , computerChoice));
}

