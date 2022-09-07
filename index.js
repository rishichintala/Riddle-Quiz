var rls = require("readline-sync");
const chalk = require("chalk");
console.log(chalk.black.bgWhiteBright('Welcome to Riddle Quiz! --> created by Sai Rishith\n'));
console.log(chalk.magenta.bold("Game Rules are: Every Right Answer, your score increases by one and for Every Wrong Answer, your score decreases by one. Answer every question in lower case only!!\n"));
var player = rls.question("Enter Your Name: \n");
console.log(chalk.bgBlack.bold("Welcome to the quiz " + player.toUpperCase() + "!!\n"));

var score = 0;
function riddleQuiz(question, rightAnswer) {
  var playerAnswer = rls.question(chalk.yellow(question));
  if (playerAnswer.toLowerCase() === rightAnswer) {
    console.log(chalk.green.bold("You are correct!!\n"));
    score = score + 1;
  }
  else {
    console.log(chalk.red.bold("you are wrong!!\n"));
    score = score - 1;
  }
}

const questionsList = [
  {
    question: "Some say I put doctors out of business. Sometimes I am sour. Other times, I am sweet. You can eat me, and you can drink me. What am I?\n", answer: "apple"
  },
  {
    question: "Sam's dad has 3 daughters. Two are named Stephanie and Amanda. What's the name of the third daughter?\n", answer: "sam"
  },
  {
    question: "What is so fragile that saying its name break it?\n", answer: "silence"
  },
  {
    question: "The more of them you take, the more you leave behind. What are they?\n", answer: "footsteps"
  },
  {
    question: " I am an odd number. Take away just one letter and I become even. What number am I?\n", answer: "seven"
  }

];

var questionIndex = 0;
while (questionIndex < questionsList.length) {
  var hey = riddleQuiz(questionsList[questionIndex].question, questionsList[questionIndex].answer);
  questionIndex++;
}
console.log(chalk.cyanBright.bold.bgBlack(player + " Your Final Score is " + score + "\n"));

var topScores = [
  {
    name: "Rishi", score: "5"
  },
  {
    name: "Rock", score: "3"
  },
  {
    name: "Rick", score: "2"
  }
];

console.log(chalk.black.bold.bgBlue("These are top scores and if you beat the top scores, screenshot me and I will update the leaderboard!!\n"));

for (var topScoreIndex = 0; topScoreIndex < topScores.length; topScoreIndex++) {
  console.log(chalk.black.bold.bgYellowBright(topScores[topScoreIndex].name, topScores[topScoreIndex].score + "\n"));
}
console.log(chalk.green(("Thanks for playing!! " + player.toUpperCase())));

