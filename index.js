//constructor function 
function Question(question, answers, correct ){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion = function () {
    console.log(this.question);

    for (i=0; i<this.answers.length; i++) {
        console.log( i + ' ' + this.answers[i])
    }
};

Question.prototype.checkAnswer = function (ans, callback) {
    let sc;

    if (ans === this.correct){
        console.log('Correct answer!');
        sc = callback(true);
    } else {
        console.log('Wrong answer!');

        sc = callback(false);
    }

    this.displayScore(sc);
};

Question.prototype.displayScore = function (score) {
    console.log ('Your current score is :'+ score);
    console.log ('---------------------------');
};

let q1 = new Question ('Is JavaScript the coolest programming language in the world?', ['Yes','No'], 0 );
let q2 = new Question ('What is the name of this course?', ['John','Micheal', 'Jonas'], 2 );
let q3 = new Question ('What does best describe coding?', ['Boring','Hard', 'Fun'], 2 );

let questions = [q1, q2, q3];

function score () {
    let sc = 0;
    return function (correct){
        if(correct){
            sc++;
        }
        return sc;
    }
}

let keepScore = score();

function nextQuestion () {
    let n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();
    
    let answer = prompt('Please select the correct answer.');
    
    
  if (answer !== 'exit') {
    questions[n].checkAnswer(parseInt(answer), keepScore);
    nextQuestion ();

  }
}
 nextQuestion ();
