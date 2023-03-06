function startGame() {
    
    const nameInput = document.getElementById("name-input");
    const playerName = nameInput.value;

    
    startFluffySnakeGame(playerName);

    
    const nameForm = document.getElementById("name-form");
    nameForm.style.display = "none";

    
    const submitButton = nameForm.querySelector('input[type="submit"]');
    
    submitButton.removeEventListener('click', startGame);
}

const nameForm = document.getElementById("name-form");
nameForm.addEventListener('submit', function(event) {
    event.preventDefault();
    startGame();
});
