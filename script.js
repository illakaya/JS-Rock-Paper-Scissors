// Start off by creating a prompt in which users can enter a value and store it in a variable
let userInput = prompt(`R, S, or P?`);
// Log to see if it works
console.log(userInput);

// Create an array in which has a list of valid inputs
let rps = [`R`, `P`, `S`];

// Create a variable to hold valid user input
let userHand = ``;

// Create a function that will loop until the user enters a correct input
function validInput(hand) {
    do {
        // make sure user input is capitalised to that it has the same value as the array
        hand = userInput.toLocaleUpperCase();
        // log to see if it works
        console.log(hand);
        // if it is a valid input, store input into userHand
        if (rps.includes(hand)) {
            userHand = hand;
            // if it is not a valid input, ask user to try again
        } else {
            alert(`"${hand}" is invalid, please enter valid input.`);
            userInput = prompt(`R, S, or P?`);
        }
        // loop while the input is not valid
    } while (!rps.includes(hand));
}

validInput(userInput);