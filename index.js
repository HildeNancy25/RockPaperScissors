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

const determineWinner = (userChoice, computerChoice) =>{
    if (userChoice === computerChoice){
        document.getElementById("output").innerHTML = "no one scored.";
    }
    if (userChoice === paperEmo){
        if (computerChoice === 'rock'){
            document.getElementById("output").innerHTML = "your score: 1  computer score: 0";
        } 
        else {
            document.getElementById("output").innerHTML = "your score: 0  computer score: 1";
        }
    }

    if (userChoice === rockEmo){
        if (computerChoice === 'scissors'){
            document.getElementById("output").innerHTML = 'your score: 1  computer score: 0';
        } else {
            document.getElementById("output").innerHTML = 'your score: 0  computer score: 1';
        }
    }

    if (userChoice === scissorsEmo){
        if (computerChoice === 'paper'){
            document.getElementById("output").innerHTML = 'your score: 1  computer score: 0';
        } else {
            document.getElementById("output").innerHTML = 'your score: 0  computer score: 1';
        }
    } 
}; 

var result = determineWinner(input, rdm);

function playGame (){
    var userChoice = getUserChoice(paperEmo);
    var computerChoice = getComputerChoice(rockEmo);
    console.log(determineWinner(userChoice , computerChoice));
}

