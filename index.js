
var readLineSync=require("readline-sync")
const chalk = require('chalk');
var quizApp=[
  
 {
    "question":"What type of bird delivers mission instructions to Zenitsu?",
    "answer":"Sparrow"
  },
  {
    "question":"What is not a form of Breathing used at least once in the manga series",
    "answer":"Steel Breathing"
  },
 {
    "question":"What is the name of the blacksmith who crafts Inosuke's second pair of blades?",
    "answer":"Kozo Kanamori"
  },
  {
    "question":"Who always passes out while sleeping",
    "answer":"Zenitsu"
  },
  {
    "question":"Who's the head of demons",
    "answer":"Muzan"
  }

];

var score=0,cache=0
for(let i=0;i<quizApp.length;i++)
{
  console.log(chalk.blue.bold(quizApp[i].question))
  var ans=readLineSync.question("Enter Answer")
  if(ans===quizApp[i].answer)
  {
    console.log(chalk.green.underline("You slayed the demon"));
    score=score+1;

  }
  else
  {
    
    console.log(chalk.red.underline("You have been defeated by demon this round !"));
    score=score-1;

  }
 console.log("Your Health is: "+score)
}

if(score>0 && score===5)
console.log(chalk.green.bold("You have defeated Muzan"));
else 
console.log(chalk.red.bold("Improve your technique mate Muzan is strong"));