"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
// **********************
// ----------------------
// Type Basics & Functions (Easiest)
// ----------------------
// **********************
//********* Age Validator *********//
function ageValidator(age) {
    switch (true) {
        case age > 25:
            alert("old enough");
            break;
        case age < 25:
            alert("too young");
            break;
        default:
            alert("your are the perfect age");
            break;
    }
}
ageValidator(23);
//********* Unit Converter *********//
// Kilometers ↔ Miles
const convertKmM = (value, unit) => {
    return unit === "km" ? value * 0.621371 : value * 1.60934;
};
console.log(convertKmM(10, "km"));
console.log(convertKmM(10, "mi"));
// Celsius ↔ Fahrenheit
const convertCeFa = (value, unit) => {
    return unit === "f" ? ((value - 32) * 5) / 9 : (value * 9) / 5 + 32;
};
console.log(`43 km = ${convertCeFa(20, "c")} miles`);
console.log(`20°C = ${convertCeFa(68, "f")}°F`);
//****** Simple Calculator CLI *******//
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function calculate(a, operator, b) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a + b;
        case "*":
            return a + b;
        case "/":
            return b !== 0 ? a / b : NaN;
        default:
            throw new Error("Invalid operator");
    }
}
rl.question("Enter first number: ", (num1) => {
    rl.question("Enter operator (+, -, *, /): ", (op) => {
        rl.question("Enter second number: ", (num2) => {
            const result = calculate(Number(num1), op, Number(num2));
            console.log(`Result: ${result}`);
            rl.close();
        });
    });
});
//# sourceMappingURL=typeBasics.js.map