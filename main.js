function generateButtons() {
    let userInput = document.querySelector("#userInput");
    var random = Math.floor(Math.random() * userInput.value);
    let counter = 1;
    for (let i = 0; i < userInput.value; ++i) {
    const btn = document.createElement("button");
    btn.onclick = function() {
        if (i == random && counter <= 3) {
            alert('You did it 🤩🤩🤩🤩🤩'); 
            ++counter;
            return false;
        } else if (counter < 3 && i != random) {
            alert('Try again! You have ' + (3 - counter) + ' chances left!');
            ++counter;
            return false;
        } else {
            alert("You lost 💀");
        }
    }
    btn.innerHTML = "Player " + i;;
    document.body.appendChild(btn);
    btn.style.backgroundColor = "#F4A460";
    }
} 
// you have three chances to guess the button. If you did't do it, you lost the game;
// You'll be told how many chances you are left with;