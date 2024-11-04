function getComputerChoice(){
    return(['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)])
}

function getHumanChoice(){
    let input = prompt('Your Turn: ')
    return(input.toLowerCase())
}

function playGame(){
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

    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore){
        console.log(`You win! Final score: User(${humanScore}), Computer(${computerScore})`);
    }
    else if (humanScore < computerScore){
        console.log(`You lose! Final score: User(${humanScore}), Computer(${computerScore})`);
    }
    else {
        console.log(`Tie game! Final score: User(${humanScore}), Computer(${computerScore})`);
    }
}

playGame();