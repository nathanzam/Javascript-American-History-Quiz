$(document).ready(function() {
      function askQuestion(doubleArray) {
        var numCorrect = 0;
        var answerGiven = "";
        for (var i = 0; i < twoArr.length; i++) {
          answerGiven = prompt(twoArr[i][0]).toUpperCase();
          if (answerGiven == twoArr[i][1]) {
            var content = document.getElementById('correct');
            //console.log("Question " + i + ". Answer given: " + answerGiven + ". Correct! <br>");
            content.innerHTML += "<li>Question " + (i + 1) + ". Answer given: " + answerGiven + ". Correct! </li>";
            numCorrect++;
          } else {
            var content = document.getElementById('incorrect');
            //console.log("Question " + i + 1 + ". Answer given: " + answerGiven + ". Correct answer: " + twoArr[i][1] + ". <br>");
            content.innerHTML += "<li>Question " + (i + 1) + ". Answer given: " + answerGiven + ". Correct answer: " + twoArr[i][1] + ". </li>";
          }
        }
        var content = document.getElementById('numberCorrect');
        content.innerHTML = "You Got " + numCorrect + " correct!";


      }
      var twoArr = [
        ["Who was the last name of the first President of the US?", "WASHINGTON"],
        ["How many amendments are in the bill of rights?", "10"],
        ["How many stars are on the American flag?", "50"],
        ["How many stripes are on the American flag", "13"],
        ["What year were there 3 different US president holding office?", "1841"]
      ];
      askQuestion(twoArr);
    });




    /*var question = {
      questionString = "",
      answerGiven = "",
      correctAnswer = "",

      askQuestion:function(){
        answerGiven = prompt(questionString);
        if (answerGiven == correctAnswer){
          var push = document.getElementByClassName('correct');
          push.innerHTML = "Question " + questionNumber + ". Answer given: " + answerGiven + ". Correct! <br>";

        }else{
          var push = document.getElementByClassName('incorrect');
          push.innerHTML = "Question " + questionNumber + ". Answer given: " + answerGiven + ". Correct answer: " + correctAnswer + ". <br>";
        }
      }
    }
    var 0
    var 1
    var 2
    var 3
    var 4
    */
