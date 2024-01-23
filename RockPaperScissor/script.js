let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was drawn! Play again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (usrWin, userChoice, compChoice) => {
    if(usrWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        console.log("You Lose!");
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let usrWin = true;
        if(userChoice === "rock") {
            usrWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            usrWin = compChoice === "scissors" ? false : true;
        } else {
            usrWin = compChoice === "rock" ? false : true;
        }

        showWinner(usrWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})