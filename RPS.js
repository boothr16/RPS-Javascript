// randomly selects rock, paper, or scissors
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const min = 0;
    const max = choices.length - 1;
    const rand = Math.floor(Math.random() * (max - min + 1)) + min; // true random, inclusive range
    console.log(choices[rand]);
    return choices[rand];
}
// gets user input
function getUserChoice() {
    let input = prompt("Choose rock, paper, or scissors.").toLowerCase();
    return input;
}
// compares result of computerPlay() and getUserChoice() functions to declare winner
function playRound(userChoice, computerChoice) {
    if (userChoice == computerChoice)
        alert("Tie!");
    else {
        if (computerChoice == "rock") {
            if (userChoice == "paper")
                alert("Player wins!");
            else if (userChoice == "scissors")
                alert("PC wins!");
            else
                alert("Invalid input.");
        }
        else if (computerChoice == "paper") {
            if (userChoice == "scissors")
                alert("Player wins!");
            else if (userChoice == "rock")
                alert("PC wins!");
            else
                alert("Invalid input.");            
        }
        else {
            if (userChoice == "rock")
                alert("Player wins!");
            else if (userChoice == "paper")
                alert("PC wins!");
            else
                alert("Invalid input.");            
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let me = getUserChoice();
        let pc = computerPlay();
        playRound(me, pc);
    }
}
