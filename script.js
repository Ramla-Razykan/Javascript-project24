let secretNum = 5;
let attempts = 0;

function checkGuess() {
    let guessNum = Number(document.getElementById("userGuess").value);
    let resultText = "";

    attempts++;

    if (secretNum === guessNum) {
        resultText = `Bingo! Correct answer! You guessed it in ${attempts} attempt.`;
    }
    else if (guessNum === secretNum - 1 || guessNum === secretNum + 1) {
        resultText = `Close enough to the correct answer!`;
        document.getElementById("result").style.color = "orange";
    }
    else {
        resultText = `Incorrect guess! Try again.`;
        document.getElementById("result").style.color = "red";
    }

    document.getElementById("result").innerText = resultText;
}

document.getElementById("submitGuess").addEventListener("click", checkGuess);
