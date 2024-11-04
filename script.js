function getComputerChoice(){
    return(['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)])
}

function getHumanChoice(){
    let input = prompt('Your Turn: ')
    return(input.toLowerCase())
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    
    if (humanChoice == computerChoice){
        console.log('Tie!')
    }
    else if (
        (humanChoice == 'rock' && computerChoice == 'scissors') ||
        (humanChoice == 'scissors' && computerChoice == 'paper') ||
        (humanChoice == 'paper' && computerChoice == 'rock') 
    ){
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    }
    else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
    }
}

playRound(getHumanChoice(), getComputerChoice());