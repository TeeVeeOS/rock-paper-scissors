let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    return(['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)])
}

function getHumanChoice(){
    let input = prompt('Your Turn: ')
    return(input.toLowerCase())
}

function playRound(humanChoice, computerChoice){
    let result;

    if (humanChoice == computerChoice){
        result = 'Tie!';
    }
    else if (
        (humanChoice == 'rock' && computerChoice == 'scissors') ||
        (humanChoice == 'scissors' && computerChoice == 'paper') ||
        (humanChoice == 'paper' && computerChoice == 'rock') 
    ){
        result = `You win! ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
    }
    else {
        result = `You lose! ${computerChoice} beats ${humanChoice}!`;
        computerScore++
    }

    updateScore();
    displayResult(result);
    evalGame();
}

function displayResult(result){
    const resultDiv = document.getElementById('results');
    resultDiv.textContent = result;
}

function evalGame(){
    const resultDiv = document.getElementById('results');
    if(humanScore == 5){
        resultDiv.textContent = `You win! You scored ${humanScore} points and CPU scored ${computerScore} points!`
        resetGame();
    }
    else if(computerScore == 5){
        resultDiv.textContent = `You lose! You scored ${humanScore} points and CPU scored ${computerScore} points!`
        resetGame();
    }
}

function updateScore(){
    const playerScoreDiv = document.getElementById('player-score');
    const computerScoreDiv = document.getElementById('computer-score');
    playerScoreDiv.textContent = `Player Score: ${humanScore}`
    computerScoreDiv.textContent = `Computer Score: ${computerScore}`
}

function resetGame(){
    humanScore = 0;
    computerScore = 0;
    updateScore();
}

const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')

rockButton.addEventListener('click', () => playRound('rock', getComputerChoice()));
paperButton.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissorsButton.addEventListener('click', () => playRound('scissors', getComputerChoice()));

