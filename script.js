// Create a variable to hold valid user input in the global scope as it will be accessed by multiple functions
let userHand = ``;

// Create a function that will loop until the user enters a correct input
function validInput(hand) {
    // Start off by creating a prompt in which users can enter a value and store it in a variable
    let userInput = prompt(`R, S, or P?`);
    // Create an array in which has a list of valid inputs to compare user input to
    let rps = [`R`, `P`, `S`];
    // loop while the input is not valid
    while (!rps.includes(hand)) {
            // make sure user input is capitalised to that it has the same value as the array
            hand = userInput.toLocaleUpperCase();
            // log to see if it works
            // if it is a valid input, store input into userHand
            if (rps.includes(hand)) {
                userHand = hand;
                console.log(`User choice: ${hand}`);
                // if it is not a valid input, ask user to try again
            } else {
                alert(`"${hand}" is invalid, please enter valid input.`);
                console.log(`Invalid input: ${hand}`);
                userInput = prompt(`R, S, or P?`);
            }
        };
}

// Create a variable to hold pc input in the global scope as it will be accessed by multiple functions
let pcHand = ``;

// Create a function that will random generate RPS for the computer
function generateHand() {
    // create local variable for the function which randomly generates a number between 0 (inclusive) and 3 (exclusive), then rounds it down to the integer. the possible numbers that can be generated are 0, 1, and 2
    let num = Math.floor(Math.random()*3);
    console.log(num);
    // depending on the output by using switch cases (strict equality), pcHand will be assign either RPS
    switch (num) {
        case 0:
            pcHand = `R`;
            break;
        case 1:
            pcHand = `S`;
            break;
        case 2:
            pcHand = `P`;
            break;
    }
    console.log(`PC choice: ${pcHand}`);
}

// Create an object that will store the user's data
let gameData = {
    gamesPlayed: 0,
    wins: 0,
    losses: 0,
    draws: 0,
    moveHistory: {
        rock: 0,
        paper: 0,
        scissors: 0,
    }
}

function gameResult(user, pc) {
    if (user === pc) {
        return 'tie';
    }
    if (user === `R` && pc === `S`) {
        return `win`;
    }
    if (user === `R` && pc === `P`) {
        return `lose`;
    }
    if (user === `S` && pc === `R`) {
        return `lose`;
    }
    if (user === `S` && pc === `P`) {
        return `win`;
    }
    if (user === `P` && pc === `R`) {
        return `win`;
    }
    if (user === `P` && pc === `S`) {
        return `lose`;
    }
}

let gameContinue = true;

// create a loop that will end when the user cancels
while (gameContinue) {
    // call function with user input
    validInput();
    // Call generateHand function
    generateHand();
    console.log(gameResult(userHand, pcHand));
    gameData.gamesPlayed = gameData.gamesPlayed + 1;
    let userStillGame = confirm(`Do you still want to continue?`);
    if (userStillGame === false) {
        gameContinue = false;
    }
};

console.log(`Games played: ${gameData.gamesPlayed}`);
console.log(gameData);