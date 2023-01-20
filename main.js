let chancesLeft = 3;

function startGame(formData) {
    formData.button.style.visibility = 'hidden';
    let winnerIndex = Math.floor(Math.random() * formData.input.value);
    createButtons(data.input.value, winnerIndex);
}

function createButtons(input) {
    for (let i = 0; i < input; ++i) {
        const btn = document.createElement("button");
        btn.onclick = changeStatus;
        btn.innerHTML = "Player " + (i + 1);
        document.getElementById("game-status").appendChild(btn);
        btn.className = "btn btn-warning";
    }
}

function changeStatus(i, winnerIndex) {
    if (i == winnerIndex) {
        document.getElementById("game-result").innerText = "YOU WON!\n";
        document.getElementById("game-status").style.visibility = 'hidden';
        resetTheGame();
    } else if (i != winnerIndex && chancesLeft > 1) {
        --chancesLeft;
    } else if (chancesLeft == 1) {
        document.getElementById("game-result").innerText = "YOU LOST!\n";
        document.getElementById("game-status").style.visibility = 'hidden';
        resetTheGame();
    }
}

function resetTheGame() {
    const resetButton = document.createElement("button");
    resetButton.innerHTML = "Reset the game"
    document.getElementById("game-result").appendChild(resetButton);
    resetButton.className = "btn btn-warning";
    resetButton.onclick = function() {
        window.location = window.location; 
    }
}
