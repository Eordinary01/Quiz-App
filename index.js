const quizData = [
  {
question: "What does GHz stand for?",
    a: "Gigahotz",
    b: "Gigahetz",
    c: "Gigahatz",
    d: "Gigahertz",
    correct: "d"
  },
  {
question: "Which computer hardware device provides an interface for all other connected devices to communicate?",
    a: "CPU",
    b: "Hard Disk Drive",
    c: "Mothboard",
    d: "RAM",
    correct: "c"
  },
  {
question:"How many kilobytes in one gigabyte (in decimal)?",
a:"1000000",
b:"1024",
c:"1000",
d:"1048576",
correct:"a"
  },
  {
question:"Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
a:"Microsoft",
b:"Apple",
c:"Atari",
d:"Facebook",
correct:"b"
  },
  {
question:"The C programming language was created by this American computer scientist. ",
    a:"Dennis Ritchie",
    b:"Tim Berners Lee",
    c:"al-Khwārizmī",
    d:"Willis Ware",
    correct:"a"
  },
  {
    question:"Which soccer team won the Copa Am&eacute;rica Centenario 2016? ",
a:"Argentina",
b:"Chile",
c:"Brazil",
d:"Colombia",
correct:"b"
  },
  {

      question:"What is the oldest team in Major League Baseball? ",
      a:"Chicago Cubs",
      b:"Cincinnati Reds",
      c:"St. Louis Cardinals",
      d:"Atlanta Braves",
      correct:"d"
    },
  {

question:"Who won the 2015 College Football Playoff (CFP) National Championship?  ",
    a:"Alabama Crimson Tide",
    b:"Ohio State Buckeyes",
    c:"Clemson Tigers",
    d:"Wisconsin Badgers",
    correct:"b"
    },
  {

    question:"Who rode on horseback to warn the Minutemen that the British were coming during the U.S. Revolutionary War? ",
a:"Thomas Paine",
b:"Henry Longfellow",
c:"Paul Revere",
d:"Nathan Hale",
correct:"c"
    },
  {

    
question:"When India got Independance?",
a:"1946",
b:"1947",
c:"1948",
d:"1945",
correct:"b"
    },
];




let currentQuiz = 0;
let score = 0;
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

loadQuiz();

function loadQuiz(){
  deSelected();
  
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  
  }

  function getSelected(){

  let  answer = undefined;

  answerEls.forEach((answerEl)=>{
  if(answerEl.checked){
  answer = answerEl.id;
  
  }
  
  });
  return answer;

  }

  function deSelected(){
    answerEls.forEach((answerEl)=>{
      answerEl.checked = false;
    });
  }
    
    
    
submitBtn.addEventListener('click',()=>{

  const answer = getSelected();
  console.log(answer)
  
  if(answer){
    if(answer === quizData[currentQuiz].correct){
      score++;
    }
      currentQuiz++;
      

      if(currentQuiz <quizData.length){
          loadQuiz();
  
        }
        else{
         quiz.innerHTML = `<h2> You answered correctly at ${score}/${quizData.length} questions.</h2> <button onClick="location.reload()">Reload</button>`
        }
      }
      
    
    
});