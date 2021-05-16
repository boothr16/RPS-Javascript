// randomly selects rock, paper, or scissors
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const min = 0;
    const max = choices.length - 1;
    const rand = Math.floor(Math.random() * (max - min + 1)) + min; // true random, inclusive range
    return choices[rand];
}
// gets user input
function getUserChoice() {
    let input = prompt("Choose rock, paper, or scissors.").toLowerCase();
    return input;
}