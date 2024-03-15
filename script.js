// Create a variable to hold valid user input in the global scope as it will be accessed by multiple functions
let userHand = ``;

// Create a variable to hold pc input in the global scope as it will be accessed by multiple functions
let pcHand = ``;

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
};

// Create a function that will count what hand the user has chosen so far and store it in the object gameData
function moveCount(hand) {
    switch (hand) {
        case `R`:
            ++gameData.moveHistory.rock;
            break;
        case `P`:
            ++gameData.moveHistory.paper;
            break;
        case `S`:
            ++gameData.moveHistory.scissors;
            break;
    };
}

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
                moveCount(hand);
                console.log(`User choice: ${hand}`);
                // if it is not a valid input, ask user to try again
            } else {
                alert(`"${hand}" is invalid, please enter valid input.`);
                console.log(`Invalid input: ${hand}`);
                userInput = prompt(`R, S, or P?`);
            }
        };
}

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
    };
    console.log(`PC choice: ${pcHand}`);
}

// Create a function that decides if the user has won, lost or drew
function gameResult(user, pc) {
    if (user === pc) {
        return 'draw';
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

// create a var to store the results of each game
let wld = ``;

// Create a function that will count the results of each game and store it in the object gameData
function resultCount(result) {
    ++gameData.gamesPlayed;
    switch (result) {
        case `draw`:
            ++gameData.draws;
            break;
        case `win`:
            ++gameData.wins;
            break;
        case `lose`:
            ++gameData.losses;
            break;
    };
    console.log(wld);
}

// Create function that will alert the user of: pc hand, result of the game
function choiceResult() {
    alert(`PC has chosen ${pcHand}.`);
    alert(`You ${wld}!`)
}

// Create a function that will alert the user of the stats
function stats() {
    alert(`
    Games played: ${gameData.gamesPlayed}
        Wins: ${gameData.wins}
        Draws: ${gameData.draws}
        Loses: ${gameData.losses}
    Move History
        Rock: ${gameData.moveHistory.rock}
        Paper: ${gameData.moveHistory.paper}
        Scissors: ${gameData.moveHistory.scissors}`);
}

let gameContinue = true;

// create a loop that will end when the user cancels
while (gameContinue) {
    // call function with user input
    validInput();
    // Call generateHand function
    generateHand();
    wld = gameResult(userHand, pcHand);
    resultCount(wld);
    choiceResult();
    let userStillGame = confirm(`Do you still want to continue?`);
    if (userStillGame === false) {
        gameContinue = false;
    }
};

stats();