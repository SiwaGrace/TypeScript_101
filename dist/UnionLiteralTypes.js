"use strict";
// **********************
// ----------------------
// Union & Literal Types
// ----------------------
// **********************
Object.defineProperty(exports, "__esModule", { value: true });
//****** Weather Formatter ******//
function formatTemp(temp) {
    console.log(`${temp}°C`);
}
formatTemp("3");
function CurrencyFormat(a, currency) {
    const upperCurrency = currency.toUpperCase();
    console.log(`${a} ${upperCurrency}`);
}
CurrencyFormat(400, "usd");
function playRound(player, computer) {
    if (player === computer) {
        console.log("it's a tie");
        return;
    }
    if ((player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")) {
        console.log("Player wins!");
    }
    else {
        console.log("Computer wins!");
    }
}
// 3. Example usage
playRound("rock", "scissors"); // ✅ Player wins
playRound("paper", "rock"); // ✅ Player wins
playRound("rock", "paper"); // ✅ Computer wins
playRound("scissors", "scissors"); // ✅ Tie
//# sourceMappingURL=UnionLiteralTypes.js.map