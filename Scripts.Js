const quiz = [

{
question:"Which language is used for web pages?",
answers:["Python","HTML","Java","C++"],
correct:1
},

{
question:"Which symbol is used for IDs in CSS?",
answers:[".","#","*","@"],
correct:1
},

{
question:"JavaScript is a ____ language.",
answers:["Programming","Database","Operating System","Compiler"],
correct:0
},

{
question:"Which company developed Java?",
answers:["Google","Microsoft","Sun Microsystems","Apple"],
correct:2
},

{
question:"CSS stands for?",
answers:[
"Cascading Style Sheets",
"Creative Style Sheet",
"Computer Style Sheet",
"Colorful Style Sheet"
],
correct:0
}

];

const startBtn=document.getElementById("startBtn");
const quizBox=document.getElementById("quizBox");
const startScreen=document.getElementById("startScreen");
const resultBox=document.getElementById("resultBox");
const question=document.getElementById("question");
const answers=document.getElementById("answers");
const nextBtn=document.getElementById("nextBtn");
const scoreText=document.getElementById("score");
const questionNo=document.getElementById("questionNo");
const timer=document.getElementById("timer");

let current=0;
let score=0;
let time=30;
let interval;

startBtn.onclick=function(){
    startScreen.classList.add("hide");
    quizBox.classList.remove("hide");
    loadQuestion();
}

function loadQuestion(){

    clearInterval(interval);

    time=30;
    timer.innerHTML=time;

    interval=setInterval(function(){

        time--;

        timer.innerHTML=time;

        if(time==0){

            clearInterval(interval);

            nextQuestion();

        }

    },1000);

    questionNo.innerHTML="Question "+(current+1)+" / "+quiz.length;

    question.innerHTML=quiz[current].question;

    answers.innerHTML="";

    quiz[current].answers.forEach(function(answer,index){

        const btn=document.createElement("button");

        btn.innerHTML=answer;

        btn.onclick=function(){

            checkAnswer(index,btn);

        }

        answers.appendChild(btn);

    });

}

function checkAnswer(index,btn){

    clearInterval(interval);

    const buttons=answers.querySelectorAll("button");

    buttons.forEach(function(b){

        b.disabled=true;

    });

    if(index==quiz[current].correct){

        btn.classList.add("correct");

        score++;

    }

    else{

        btn.classList.add("wrong");

        buttons[quiz[current].correct].classList.add("correct");

    }

}

nextBtn.onclick=function(){

    nextQuestion();

}

function nextQuestion(){

    current++;

    if(current<quiz.length){

        loadQuestion();

    }

    else{

        finishQuiz();

    }

}

function finishQuiz(){

    quizBox.classList.add("hide");

    resultBox.classList.remove("hide");

    scoreText.innerHTML="Your Score : "+score+" / "+quiz.length;

}
