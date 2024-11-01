function rollDice() {
    const diceNumbers = [1, 2, 3, 4, 5, 6];
    const randomIndex = Math.floor(Math.random() * diceNumbers.length);
    return diceNumbers[randomIndex];
}

function playGame() {
    let userA, userB;

    while (true) {
        userA = rollDice(); 
        console.log(`A-მ გააგორა: ${userA}`);
        
        if (userA === 3) {
            console.log("A-მ გაიმარჯვა");
            break; 
        }

        userB = rollDice();
        console.log(`B-მ გააგორა: ${userB}`);
        
        if (userB === 3) {
            console.log("B-მ გაიმარჯვა");
            break;
        }
    }
}

playGame();
