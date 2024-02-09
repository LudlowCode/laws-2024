var correctQuestions = new Set();

function loaded() {
    console.log("The page has now loaded");
}
function showRight(questionNumber){
    document.getElementById(questionNumber).style= "color:green;"
    correctQuestions.add (questionNumber);
    document.getElementById("feedback-area").innerHTML= "wowzers you got it right";
    updateCorrect();
}
function updateCorrect(){
    document.getElementById("correct-answer").innerHTML= "number of questions correct: "+ correctQuestions.size;
}
function showWrong(questionNumber){
    document.getElementById(questionNumber).style= "color:red;"
    document.getElementById("feedback-area").innerHTML= "get it right next time";
}