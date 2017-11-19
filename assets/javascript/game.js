
//Variables

var wordLibrary = ["mouse", "home", "stitch", "cup", "computer"];
var userInputString = []; //whatever user pressed
var letterArray = []; //array from letters
var userWins = 0;
var userLoss = 0;
var guessesLeft = 12;
var underScore = []; //for showing underscores instead of letters


var word = wordLibrary[Math.floor(Math.random()*wordLibrary.length)];
console.log(word);


//Functions

function scoreUpdate() 
{
    $("#game").html(
      `<h1>`+ underScore.join(' ') + `<br><br><br>
      Your wins: `+ userWins + `<br>
      Your losses: ` + userLoss +
      `<br>Guesses left: `+ guessesLeft + `<br>
      Your guesses: ` + userInputString +  `</h1>`);
};


function startGame() 
{

  $("#game").html("<h1>This is The Hangman Game.<br> Can you guess a word I'm thinking of? <br> Press any key!</h2>");

  document.onkeyup = function (event) 
  {

  buildSpots();
  getLetters();
  scoreUpdate();
  wordCheck();
  
  }
};

function endGame() {

  $("#game").html("<h1> Do you want to play again? <br><br> Press any key!</h2>");

  document.onkeyup = function(event) {

  userInputString = [];
  guessesLeft = 12;
  underScore = [];
  letterArray = [];
  buildSpots();
  getLetters();
  scoreUpdate();
  wordCheck();}
};

function getLetters()
{

    for (var i = 0; i < word.length; i++) 
    {

    letterArray.push(word.charAt(i));

    }

    console.log("Word array: " + letterArray);
 };



function buildSpots() 
{

  for(var index=0; index<word.length; index++)

  {

  underScore.push(" _ ");

  }
};

function winning()
{

  var final = underScore.toString();
  console.log("Final: " + final);

  if (letterArray == final) 

  {
    userWins++;
    scoreUpdate();
    alert("You guessed right!");
    endGame();
  }
};

function losing() 

{
  if (guessesLeft === 0) 
    {

      userLoss++;
      scoreUpdate();
      alert("You lost!");
      endGame();

    }
};


//Main flow
function wordCheck() 
{

 document.onkeyup = function(event) 
 {
    var userGuess = event.key;
    
      if (userInputString.indexOf(userGuess) !== -1)
      {

      alert("You've already tried this letter. Try another!");
      }

     if ((userGuess === "a" || userGuess === "b" || userGuess === "c" || userGuess === "d" ||
        userGuess === "f" || userGuess === "e" || userGuess === "g" || userGuess === "h" ||
        userGuess === "i" || userGuess === "j" || userGuess === "k" || userGuess === "l" ||
        userGuess === "m" || userGuess === "n" || userGuess === "o" || userGuess === "p" ||
        userGuess === "q" || userGuess === "r" || userGuess === "s" || userGuess === "t" ||
        userGuess === "u" || userGuess === "v" || userGuess === "w" || userGuess === "x" ||
        userGuess === "y" || userGuess === "z") && userInputString.indexOf(userGuess) == -1) 
     {

          userInputString.push(userGuess);
          guessesLeft--;
          scoreUpdate();


        for(var index = 0; index<letterArray.length; index++)
        {

          if (userGuess === letterArray[index])
          {
              console.log("Letter is right! " + [index+1]);
              underScore[index] = userGuess;
              scoreUpdate();             
              winning();
              return;
          }

        }
        scoreUpdate();
        losing();
      }

      else

      {
        console.log("Please press a letter key");
      }
  }
};

    
startGame();      