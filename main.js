function generateButtons() {
    document.getElementById('mainButton').style.visibility = 'hidden';
    let userInput = document.querySelector("#userInput");
    let winnerIndex = Math.floor(Math.random() * userInput.value);
    if (userInput.value < 2 || userInput.value > 999) {
        window.location.reload();
        return 0;
    }
    let chancesLeft = 2;
    for (let i = 0; i < userInput.value; ++i) {
        const btn = document.createElement("button");
        btn.onclick = function() {
            document.body.removeChild(document.body.lastChild);
            if (i == winnerIndex) {
                const winningMessage = document.createElement("h2");
                winningMessage.innerHTML = "YOU DID IT!"
                document.body.appendChild(winningMessage);
            } else if (i != winnerIndex && chancesLeft >= 1) {
                --chancesLeft;
            } else if (chancesLeft == 0) {
                alert("You lost!")
                window.location.reload();
            }
        }
        btn.innerHTML = "Player " + (i + 1);
        document.body.appendChild(btn);
        btn.className = "btn btn-warning";
    }
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