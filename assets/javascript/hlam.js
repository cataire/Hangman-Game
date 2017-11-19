var wordLibrary = ["mouse", "home", "stitch", "cup", "computer"];
var userWins = 0;
var userLoss = 0;

var word = wordLibrary[Math.floor(Math.random()*wordLibrary.length)];
console.log(word);



var letterArray = [];

function getLetters(){
for (var i = 0; i < word.length; i++) {
    console.log(word.charAt(i));
    letterArray.push(word.charAt(i));
    console.log("From new array: " + letterArray);
   
}

document.getElementById('game').textContent = "<h1> My word " + word.charAt(i) + ".</h1>";
}
getLetters(word);

function logUnder(){
	document.getElementById('game').textContent=letterArray;
}


letterArray.forEach(logUnder);






function buildSpots(word) {

var underScore = "";
for(var index=0; index<word.length; index++){
	console.log(" _ ");

	// basically it says for each letter add _
	underScore += " _ ";
}

document.getElementById('game').innerHTML="<h1>" + underScore + "</h1>";
}


buildSpots(word);
console.log(word.length);
console.log(word.charAt(0));


 document.onkeyup=function(event) {
  	var userGuess = event.key;
  	console.log(event.key);
  
  if (userGuess === word.charAt(0)){
  		console.log("Letter is right!");
  	}
	}