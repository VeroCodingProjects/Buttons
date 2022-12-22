let chancesLeft = 2;

function startGame() {
    document.getElementById('main-button').style.visibility = 'hidden';
    let userInput = document.getElementById('user-input');
    let winnerIndex = Math.floor(Math.random() * userInput.value);
    createButtons(userInput, winnerIndex);
    chancesUpdate();
}

function chancesUpdate() {
    const shapeRole = document.createElement("h3");
    shapeRole.innerHTML = "Left chances"
    shapeRole.style.align = "center";
    document.body.appendChild(shapeRole);
    for (let i = 1; i < 4; ++i) {
        const chance = document.createElement("h3");
        chance.className = "circle";
        chance.style.align = "center";
        document.body.appendChild(chance);
    }
}

function hideElements() {
    let buttonNodes = document.getElementsByTagName("button");
    for (var i = 0, len = buttonNodes.length; i != len; ++i) {
        buttonNodes[0].parentNode.removeChild(buttonNodes[0]);
    }
    var formNodes = document.getElementsByTagName("form");
    for (var i = 0, len = formNodes.length; i != len; ++i) {
        formNodes[0].parentNode.removeChild(formNodes[0]);
    }
    var h3Nodes = document.getElementsByTagName("h3");
    for (var i = 0, len = h3Nodes.length; i != len; ++i) {
        h3Nodes[0].parentNode.removeChild(h3Nodes[0]);
    }
    resetTheGame();
}

function resetTheGame() {
    const resetButton = document.createElement("button");
    resetButton.innerHTML = "Reset the game"
    document.body.appendChild(resetButton);
    resetButton.className = "btn btn-warning";
    resetButton.onclick = function() {
        location.reload();
    }
}

function createButtons(userInput, winnerIndex) {
    for (let i = 0; i < userInput.value; ++i) {
        const btn = document.createElement("button");
        btn.onclick = function() {
            document.body.removeChild(document.body.lastChild);
            if (i == winnerIndex) {
                document.getElementById("final-update").innerText += "YOU WON!"
                hideElements();
            } else if (i != winnerIndex && chancesLeft >= 1) {
                --chancesLeft;
            } else if (chancesLeft == 0) {
                document.getElementById("final-update").innerText += "YOU LOST!"
                hideElements();
            }
        }
        btn.innerHTML = "Player " + (i + 1);
        document.body.appendChild(btn);
        btn.className = "btn btn-warning";
    }
}