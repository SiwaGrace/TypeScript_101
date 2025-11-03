import * as readline from "readline";

// **********************
// ----------------------
// Arrays, Loops & Conditionals
// ----------------------
// **********************

//****** Random Quote Generator ******//

const quotes: string[] = [
  "Believe you can and you're halfway there. — Theodore Roosevelt",
  "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
  "The future depends on what you do today. — Mahatma Gandhi",
  "Start where you are. Use what you have. Do what you can. — Arthur Ashe",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Your limitation—it’s only your imagination.",
  "Sometimes later becomes never. Do it now.",
  "Success doesn’t just find you. You have to go out and get it.",
  "It always seems impossible until it’s done. — Nelson Mandela",
];
const quoteLength = quotes.length;

let generateQuote = quotes[Math.floor(Math.random() * quoteLength)];

console.log(generateQuote);

// ****** Student Grade Tracker ******//
type student = {
  name: string;
  scores: number[];
};

const students: student[] = [
  { name: "Grace", scores: [85, 90, 88] },
  { name: "Daniel", scores: [70, 75, 72] },
  { name: "Ama", scores: [95, 92, 98] },
  { name: "Kwesi", scores: [60, 65, 63] },
  { name: "Efua", scores: [78, 80, 82] },
];

function calculateAverage(scores: number[]): number {
  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

students.forEach((student) => {
  const avg = calculateAverage(student.scores);
  console.log(`${student.name}'s average score is ${avg.toFixed(2)}`);
});

//***** Todo List (Console App) *****//
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todos: string[] = [];

function showMenu() {
  console.log(`
  1. Add a todo
  2. View todos
  3. Delete a todo
  4. Exit`);

  rl.question("Welcome to your Todo List!", (answer) => {
    if (answer === "1") addTodo();
    else if (answer === "2") viewTodos();
    else if (answer === "3") deleteTodo();
    else if (answer === "4") rl.close();
    else {
      console.log("Invalid option.");
    }
  });
}

function addTodo() {
  rl.question("Enter new todo: ", (task) => {
    todos.push(task);
    console.log(`✅ Added: ${task}`);
    showMenu();
  });
}

function viewTodos() {
  console.log("\nYour Todos:");
  todos.forEach((todo, index) => console.log(`${index + 1}. ${todo}`));
  showMenu();
}

function deleteTodo() {
  rl.question("Enter the number of the todo to delete: ", (num) => {
    const index = parseInt(num) - 1;
    if (index >= 0 && index < todos.length) {
      console.log(`🗑️ Deleted: ${todos[index]}`);
      todos.splice(index, 1);
    } else {
      console.log("Invalid number.");
    }
    showMenu();
  });
}

showMenu();
