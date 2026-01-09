/**
 * @author William Lemon
 * @version 1.0.0
 * @date 2026-01-098
 * @fileoverview NBA Trivia Game - Base Version (First 5 Questions)
*/

// Questions
const questions: string[] = [
  "How many teams are in the NBA?",
  "Which team did Michael Jordan win all six championships with?",
  "Who won NBA Finals MVP in 2019?",
  "What team originally drafted Kobe Bryant?",
  "How many fouls does it take to foul out in an NBA game?"
];

// Answer choices
const choices: string[][] = [
  ["A. 28", "B. 30", "C. 32", "D. 26"],
  ["A. Chicago Bulls", "B. Los Angeles Lakers", "C. Miami Heat", "D. New York Knicks"],
  ["A. Kawhi Leonard", "B. Stephen Curry", "C. LeBron James", "D. Kevin Durant"],
  ["A. Los Angeles Lakers", "B. Charlotte Hornets", "C. Philadelphia 76ers", "D. Boston Celtics"],
  ["A. 4", "B. 5", "C. 6", "D. 7"]
];

// Correct answers
const correctAnswers: string[] = ["B", "A", "A", "B", "C"];

// Loop through questions
let questionIndex = 0;

while (questionIndex < questions.length) {
  console.log("\nQuestion " + (questionIndex + 1) + ": " + questions[questionIndex]);

  // Loop through choices
  let choiceIndex = 0;
  while (choiceIndex < choices[questionIndex].length) {
    console.log(choices[questionIndex][choiceIndex]);
    choiceIndex = choiceIndex + 1;
  }

  // Get user input
  let userAnswer = prompt("Enter your answer (A, B, C, or D):");

  // Check if answer is correct
  if (userAnswer && userAnswer.toUpperCase() === correctAnswers[questionIndex]) {
    console.log("Correct!");
  } else {
    console.log("Wrong.");
  }

  questionIndex = questionIndex + 1;
}

console.log("\nQuiz complete!");
