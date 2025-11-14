// **********************
// ----------------------
// 4 Union & Literal Types
// ----------------------
// **********************

//****** Weather Formatter ******//

function formatTemp(temp: number | string) {
  console.log(`${temp}°C`);
}
formatTemp("3");
//****** Currency Formatter ******//
type Currency = "USD" | "EUR" | "GBP" | "GHS";
function CurrencyFormat(a: number, currency: string) {
  const upperCurrency = currency.toUpperCase() as Currency;
  console.log(`${a} ${upperCurrency}`);
}

CurrencyFormat(400, "usd");
//***** Rock–Paper–Scissors Game *****//
type Move = "rock" | "paper" | "scissors";

function playRound(player: Move, computer: Move) {
  if (player === computer) {
    console.log("it's a tie");
    return;
  }

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    console.log("Player wins!");
  } else {
    console.log("Computer wins!");
  }
}

// 3. Example usage
playRound("rock", "scissors"); // ✅ Player wins
playRound("paper", "rock"); // ✅ Player wins
playRound("rock", "paper"); // ✅ Computer wins
playRound("scissors", "scissors"); // ✅ Tie
