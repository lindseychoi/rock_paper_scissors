//INSTRUCTIONS:

//As a user, I want to play Rock, Paper, Scissors against an automated opponent.

//As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.

//As a user, I expect the computer to choose R, P, or S in return.

//As a user, I want the option to play again whether I win or lose.

//As a user, I want to see my total wins, ties, and losses after each round.

//Must use the alert(), confirm(), and prompt() methods to collect user input and display information to the user.

//The computer's selection must be random to ensure a fair game.



//MY CODE BELOW

//define functions
function randomNumber() {
    return Math.floor(Math.random() * 3);
}


function playGame(options) {

    var willContinue = confirm("Would you like to play Rock, Paper, Scissors?");
    var wins = 0;
    var loss = 0;
    var ties = 0;

    while (willContinue === true) {

        var compChooses = options[randomNumber()];
        var userChooses = prompt("Choose r for Rock, p for Paper, or s for Scissors!");

        if (!options.includes(userChooses.toLowerCase())) {
            alert("That is not an option, please use the following options: "+ options);
            continue;
        }
    
        if (compChooses === userChooses) {
            ties++;
            alert("It's a tie!");
        }
        else if (compChooses === "r" && userChooses === "p" || compChooses === "p" && userChooses === "s" || compChooses === "s" && userChooses === "r") {
            wins++;
            alert("I chose '" + compChooses + "'. You win!");
        }
        else if (compChooses === "p" && userChooses === "r" || compChooses === "r" && userChooses === "s" || compChooses === "s" && userChooses ==="p") {
            loss++;
            alert("I chose '" + compChooses + "'. You lose!");
        }
        else {
            alert("something went wrong, user is: "+userChooses+" comp is: "+compChooses);
        }
        
        willContinue = confirm("The score is " + wins + " wins. " + loss + " losses. " + ties + " ties. " + "Play again?");
    }
}

var options = ["r", "p", "s"];
console.log(options);

playGame(options);

//define event Listeners
