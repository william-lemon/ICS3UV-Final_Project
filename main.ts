/**
 * @author William Lemon
 * @version 1.0.0
 * @date 2026-01-09
 * @fileoverview NBA Trivia Game - Base Version (20 Questions)
*/

//Intro
console.log("NBA TRIVIA GAME");
console.log("----------------");
console.log("Answer each question by typing A, B, C, or D.");
console.log("The game will tell you if your answer is correct.");
console.log("Question values: 1-5(1), 6-10(3), 11-15(5), 16-20(7).");
console.log("Good luck!");

// Questions
const questions: string[] = [
  "How many teams are in the NBA?",
  "Which team did Michael Jordan win all six championships with?",
  "Who won NBA Finals MVP in 2019?",
  "What team originally drafted Kobe Bryant?",
  "How many fouls does it take to foul out in an NBA game?",

  "Which player is known for the nickname “The Answer”?",
  "Which team won the NBA championship in 2020?",
  "Which position usually brings the ball up the court?",
  "Which player is famous for the “Sky Hook” shot?",
  "How long is a standard NBA game?",

  "Which team has won the most NBA championships?",
  "Who became the NBAs all-time leading scorer in 2023?",
  "Which team went 73-9 during the 2015-2016 season?",
  "Which player scored 100 points in a single NBA game?",
  "Which NBA team won its first championship in 2019?",

  "Who was the first player to be unanimously voted NBA MVP?",
  "Which player holds the NBA record for most career assists?",
  "Which team did Shaquille ONeal win his first NBA championship with?",
  "What year was the NBA founded?",
  "Which player is nicknamed “The Greek Freak”?"
];

// Answer choices
const choices: string[][] = [
  ["A. 28", "B. 30", "C. 32", "D. 26"],
  ["A. Chicago Bulls", "B. Los Angeles Lakers", "C. Miami Heat", "D. New York Knicks"],
  ["A. Kawhi Leonard", "B. Stephen Curry", "C. LeBron James", "D. Kevin Durant"],
  ["A. Los Angeles Lakers", "B. Charlotte Hornets", "C. Philadelphia 76ers", "D. Boston Celtics"],
  ["A. 4", "B. 5", "C. 6", "D. 7"],

  ["A. Kobe Bryant", "B. Allen Iverson", "C. Tracy McGrady", "D. Dwyane Wade"],
  ["A. Miami Heat", "B. Toronto Raptors", "C. Golden State Warriors", "D. Los Angeles Lakers"],
  ["A. Shooting Guard", "B. Small Forward", "C. Power Forward", "D. Point Guard"],
  ["A. Shaquille ONeal", "B. Hakeem Olajuwon", "C. Kareem Abdul-Jabbar", "D. Tim Duncan"],
  ["A. 40 minutes", "B. 48 minutes", "C. 50 minutes", "D. 60 minutes"],

  ["A. Los Angeles Lakers", "B. Chicago Bulls", "C. Golden State Warriors", "D. Boston Celtics"],
  ["A. Kareem Abdul-Jabbar", "B. Michael Jordan", "C. Kobe Bryant", "D. LeBron James"],
  ["A. Chicago Bulls", "B. Cleveland Cavaliers", "C. Golden State Warriors", "D. San Antonio Spurs"],
  ["A. Michael Jordan", "B. Kobe Bryant", "C. LeBron James", "D. Wilt Chamberlain"],
  ["A. Golden State Warriors", "B. Toronto Raptors", "C. Milwaukee Bucks", "D. Brooklyn Nets"],

  ["A. LeBron James", "B. Shaquille ONeal", "C. Michael Jordan", "D. Stephen Curry"],
  ["A. Magic Johnson", "B. John Stockton", "C. Chris Paul", "D. Oscar Robertson"],
  ["A. Orlando Magic", "B. Miami Heat", "C. Los Angeles Lakers", "D. Phoenix Suns"],
  ["A. 1940", "B. 1943", "C. 1946", "D. 1950"],
  ["A. Nikola Jokic", "B. Luka Dončić", "C. Giannis Antetokounmpo", "D. Kristaps Porziņģis"]
];

// Correct answers
const correctAnswers: string[] = [
  "B", "A", "A", "B", "C",
  "B", "D", "D", "C", "B",
  "D", "D", "C", "D", "B",
  "D", "B", "C", "C", "C"
];

// Score variable
let score = 0;

// Loop through questions
let questionIndex = 0;

while (questionIndex < questions.length) {
  console.log("\nQuestion " + (questionIndex + 1) + ": " + questions[questionIndex]);

  let choiceIndex = 0;
  while (choiceIndex < choices[questionIndex].length) {
    console.log(choices[questionIndex][choiceIndex]);
    choiceIndex = choiceIndex + 1;
  }

  let userAnswer = prompt("Enter your answer (A, B, C, or D):");

  if (userAnswer && userAnswer.toUpperCase() === correctAnswers[questionIndex]) {
    console.log("Correct!");

// Add points based on question number
if (questionIndex < 5) {
  score = score + 1;
} else if (questionIndex < 10) {
  score = score + 3;
} else if (questionIndex < 15) {
  score = score + 5;
} else {
  score = score + 7;
}

  } else {
  console.log("Wrong.");
}

console.log("Current Score: " + score);
questionIndex = questionIndex + 1;
}

console.log("\nQuiz complete!");
console.log("Final Score: " + score);