function generateButtons() {
    document.getElementById('mainButton').style.visibility = 'hidden';
    let userInput = document.querySelector("#userInput");
    if (userInput.value > 100) {
        window.location.reload();
        alert("The input must be a number under 100 and over 1");
        return 0;
    }
    let winnerIndex = Math.floor(Math.random() * userInput.value);
    let leftChances = 2;
    for (let i = 0; i < userInput.value; ++i) {
        const btn = document.createElement("button");
        btn.onclick = function() {
            if (i == winnerIndex) {
                alert('You did it');
                window.location.reload();
            } else if (leftChances > 0 && i != winnerIndex) {
                alert('Try again! You have ' + leftChances + ' chances left!');
                --leftChances;
            } else {
                alert("You lost");
                window.location.reload();
            }
        }
        btn.innerHTML = "Player " + (i + 1);
        document.body.appendChild(btn);
        btn.className = "btn btn-warning";
    }
}