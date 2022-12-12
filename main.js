function generateButtons() {
    document.getElementById('mainButton').style.visibility = 'hidden';
    let userInput = document.querySelector("#userInput");
    var random = Math.floor(Math.random() * userInput.value);
    let counter = 1;
    for (let i = 1; i <= userInput.value; ++i) {
        const btn = document.createElement("button");
        btn.onclick = function() {
            if (i == random - 1 && counter <= 3) {
                alert('You did it'); 
                ++counter;
                return false;
            } else if (counter < 3 && i != random - 1) {
                alert('Try again! You have ' + (3 - counter) + ' chances left!');
                ++counter;
                return false;
            } else {
                alert.className = "alert alert-succes";
                alert("You lost");
                window.location.reload();
            }
        }
        btn.innerHTML = "Player " + i;
        document.body.appendChild(btn);
        btn.className = "btn btn-warning";
    }
}