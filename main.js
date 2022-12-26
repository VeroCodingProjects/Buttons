let chancesLeft = 3;

//getting the input and creating the buttons and the life circles
function startGame() {
    document.getElementsByTagName('button')[0].style.visibility = 'hidden';
    let winnerIndex = Math.floor(Math.random() * document.getElementsByTagName('input')[0].value);
    createButtons(document.getElementsByTagName('input')[0], winnerIndex);
    createCircles();
}

// creating the buttons
function createButtons(userInput, winnerIndex) {
    for (let i = 0; i < userInput.value; ++i) {
        const btn = document.createElement("button");
        btn.onclick = function() {
            changingStatus(i, winnerIndex);
        }
        btn.innerHTML = "Player " + (i + 1);
        document.getElementsByTagName("div")[0].appendChild(btn);
        btn.className = "btn btn-warning";
    }
}
// creating the circles
function createCircles() {
    for (let i = 1; i < 4; ++i) {
        const chance = document.createElement("h3");
        chance.className = "circle";
        chance.style.align = "center";
        document.getElementsByTagName("div")[0].appendChild(chance);
    }
}

// updating the status of the game
function changingStatus(i, winnerIndex) {
    document.getElementsByTagName("div")[0].removeChild(document.getElementsByTagName("div")[0].lastChild);
    if (i == winnerIndex) {
        document.getElementsByTagName("h1")[0].innerText = "YOU WON!\n"
        document.getElementsByTagName("div")[0].style.visibility = 'hidden';
        resetTheGame();
    } else if (i != winnerIndex && chancesLeft > 1) {
        --chancesLeft;
    } else if (chancesLeft == 1) {
        document.getElementsByTagName("h1")[0].innerText = "YOU LOST!\n"
        document.getElementsByTagName("div")[0].style.visibility = 'hidden';
        resetTheGame();
    }
}

//after the winning or the loss, the user will get the cance to restart the game
function resetTheGame() {
    const resetButton = document.createElement("button");
    resetButton.innerHTML = "Reset the game"
    document.getElementsByTagName("h1")[0].appendChild(resetButton);
    resetButton.className = "btn btn-warning";
    resetButton.onclick = function() {
        refreshPage();
    }
}

//refreshes the game
function refreshPage() {
    window.location.reload();
}