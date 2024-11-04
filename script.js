function getComputerChoice(){
    return(['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)])
}

function getHumanChoice(){
    let input = prompt('Your Turn: ')
    return(input.toLowerCase())
}

