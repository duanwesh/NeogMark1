
var readLineSync=require("readline-sync")
var quizApp=[
  
 {
    "question":"What's your name",
    "answer":"Nishant Panigrahi"
  },
  {
    "question":"What's your Age",
    "answer":"22"
  },
 {
    "question":"What's your Hobby",
    "answer":"Coding"
  },
  {
    "question":"What's your Fashion",
    "answer":"Nothing"
  },
  {
    "question":"What's your Strength",
    "answer":"Passion"
  }

];

console.log(quizApp);
var score=0
for(let i=0;i<quizApp.length;i++)
{
  //console.log("s")
  console.log(quizApp[i].question)
  var ans=readLineSync.question("Enter Answer")
  if(ans===quizApp[i].answer)
  {
    score=score+1;
  }

}

console.log("Your score is:"+score);