var question = "What did Douglas Engelbart make?";

var answers = [ 'Computer Mouse', 'The  Computer', 'Term Debug', 'HTML']; 

var answers = document.getElementByClassName("quizButton");

var correct = 1 //The first answer is at spot 1 and the last is at spot 4.

documnet.getElementById("question").innerHTML = question;

for(var spot=0; spot<answers.length; spot++)
{
    answerButtons[spot].innerHTML = answers[spot];
}