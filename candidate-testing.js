const input = require('readline-sync');

/*const input = require('readline-sync');

let info = input.question("Please enter your age: ");*/

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName //
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ", 
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride", 
  "true", 
  "40", 
  "Trajectory", 
  "3"
];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Candidate Name: ");
} 

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //candidateAnswer = input.question(question);
 // }
 
// candidateAnswers = input.question(questions);
 /*for (let index = 0; index < questions; index++){
  for (let indexj = 0; indexj < correctAnswers.length; indexj++){
  
  }

  }
 }    */

for (let index = 0; index < questions.length; index++){
  candidateAnswer = input.question(questions[index]);
  candidateAnswers.push(candidateAnswer)
}

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  let numAnswersCorrect = 0;

for (let index = 0; index < candidateAnswers.length; index++){
  if (correctAnswers[index].toUpperCase() == candidateAnswers[index].toUpperCase()){
  console.log(`That's correct!`);
  numAnswersCorrect += 1
} else {
 console.log(`Wrong! You answered ${candidateAnswers[index]}, the correct answers were ${correctAnswers[index]}.`);
}
}

  let grade = (((numAnswersCorrect)/5)*100);  //TODO 3.2 use this variable to calculate the candidates score.
  
  if (grade === 0){
     console.log("0 correct, try again");
    } else if (grade === 100){
      console.log("100% correct, good job!");
    } else if (grade === 20) {
      console.log("20%, one answer correct");
    } else if (grade === 40) {
      console.log("40%, two answers right!");
    } else if (grade === 60) {
      console.log("60%, three answers right!");
    } else if (grade === 80) {
      console.log("80%, four out of five!")
    } else {}
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};