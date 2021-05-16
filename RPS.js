function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const min = 0;
    const max = choices.length - 1;
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(choices[rand]);
}

computerPlay();