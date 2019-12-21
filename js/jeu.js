

//On page loading, a random number between 1 and 1000 is generated.
var randomNumber = Math.floor(Math.random() * 1000) + 1;

//Counter, if the player enters a number, +1 try
var tryNumber = 0;

do {
    //The player is asked to enter a number
    var playerNumber = prompt('Entrer un nombre entier entre 1 et 1000');

    //Leaves the game if the player clicks on cancel (=> if playerNumber returns "null")
    if (playerNumber === null) {
        break;
    }

    //The player is told if the expected number is lesser or greater
    if(isNaN(playerNumber)) {
        alert('Veuillez entrer un nombre !');
        
    } else {
        tryNumber += 1;  //add 1 to the try counter
        if (playerNumber < randomNumber) {
            alert("Nope, c'est plus haut que ça");
            } else if (playerNumber > randomNumber) {
            alert("Nope, c'est plus bas que ça");            
            } else {
            alert("Bravo, vous avez trouvé !");    
            }
        }

// Repeat until the number is found or the number of try is reached
} while (playerNumber != randomNumber && tryNumber <10);

