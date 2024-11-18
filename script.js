// Link for the image used in the home screen (Also indicated in citation page): https://live.staticflickr.com/2613/3748597620_4d06934c19_b.jpg
// All Other images except for home screen image are from Code.Org database


// Variables to created, which contain the certain data chosen from the data set that has been chosen
var characterName = getColumn("DC Comics Characters", "Name");
var characterStatus = getColumn("DC Comics Characters", "Status");
var fiftyCharacters = [];
var score = 0;
var guess = "";
var index = "";


//On events used to move from home screen to citation screen and back 
onEvent("homeScreenCitationButton", "click", function( ) {
  setScreen("citationScreen");
});
onEvent("citationScreenImage", "click", function( ) {
    setScreen("homeScreen");
});
onEvent("resultsScreenImageOne", "click", function( ) {
  setScreen("homeScreen");
});


//On events to go from the home screen to the questions screen all the way to the final page with the result
onEvent("homeScreenStartButton", "click", function( ) {
  score = 0;
  setScreen("firstQuestionScreen");
  characterFilterDown();
  randomCharacterFirstQuestion();
});
onEvent("firstQuestionScreenButtonOne", "click", function( ) {
  setScreen("secondQuestionScreen");
  guess = getText("firstQuestionScreenButtonOne");
  addScore();
  randomCharacterSecondQuestion();
});
onEvent("firstQuestionScreenButtonTwo", "click", function( ) {
  setScreen("secondQuestionScreen");
  guess = getText("firstQuestionScreenButtonTwo");
  addScore(guess);
  randomCharacterSecondQuestion();
});
onEvent("firstQuestionScreenButtonThree", "click", function( ) {
  setScreen("secondQuestionScreen");
  guess = getText("firstQuestionScreenButtonThree");
  addScore(guess);
  randomCharacterSecondQuestion();
});
onEvent("firstQuestionScreenButtonFour", "click", function( ) {
  setScreen("secondQuestionScreen");
  guess = getText("firstQuestionScreenButtonFour");
  addScore(guess);
  randomCharacterSecondQuestion();
});
onEvent("secondQuestionScreenButtonOne", "click", function( ) {
  setScreen("thirdQuestionScreen");
  guess = getText("secondQuestionScreenButtonOne");
  addScore(guess);
  randomCharacterThirdQuestion();
});
onEvent("secondQuestionScreenButtonTwo", "click", function( ) {
  setScreen("thirdQuestionScreen");
  guess = getText("secondQuestionScreenButtonTwo");
  addScore(guess);
  randomCharacterThirdQuestion();
});
onEvent("secondQuestionScreenButtonThree", "click", function( ) {
  setScreen("thirdQuestionScreen");
  guess = getText("secondQuestionScreenButtonThree");
  addScore(guess);
  randomCharacterThirdQuestion();
});
onEvent("secondQuestionScreenButtonFour", "click", function( ) {
  setScreen("thirdQuestionScreen");
  guess = getText("secondQuestionScreenButtonFour");
  addScore(guess);
  randomCharacterThirdQuestion();
});
onEvent("thirdQuestionScreenButtonOne", "click", function( ) {
  setScreen("fourthQuestionScreen");
  guess = getText("thirdQuestionScreenButtonOne");
  addScore(guess);
  randomCharacterFourthQuestion();
});
onEvent("thirdQuestionScreenButtonTwo", "click", function( ) {
  setScreen("fourthQuestionScreen");
  guess = getText("thirdQuestionScreenButtonTwo");
  addScore(guess);
  randomCharacterFourthQuestion();
});
onEvent("thirdQuestionScreenButtonThree", "click", function( ) {
  setScreen("fourthQuestionScreen");
  guess = getText("thirdQuestionScreenButtonThree");
  addScore(guess);
  randomCharacterFourthQuestion();
});
onEvent("thirdQuestionScreenButtonFour", "click", function( ) {
  setScreen("fourthQuestionScreen");
  guess = getText("thirdQuestionScreenButtonFour");
  addScore(guess);
  randomCharacterFourthQuestion();
});
onEvent("fourthQuestionScreenButtonOne", "click", function( ) {
  setScreen("fifthQuestionScreen");
  guess = getText("fourthQuestionScreenButtonOne");
  addScore(guess);
  randomCharacterFifthQuestion();
});
onEvent("fourthQuestionScreenButtonTwo", "click", function( ) {
  setScreen("fifthQuestionScreen");
  guess = getText("fourthQuestionScreenButtonTwo");
  addScore(guess);
  randomCharacterFifthQuestion();
});
onEvent("fourthQuestionScreenButtonThree", "click", function( ) {
  setScreen("fifthQuestionScreen");
  guess = getText("fourthQuestionScreenButtonThree");
  addScore(guess);
  randomCharacterFifthQuestion();
});
onEvent("fourthQuestionScreenButtonFour", "click", function( ) {
  setScreen("fifthQuestionScreen");
  guess = getText("fourthQuestionScreenButtonFour");
  addScore(guess);
  randomCharacterFifthQuestion();
});
onEvent("fifthQuestionScreenButtonOne", "click", function( ) {
  setScreen("resultsScreen");
  guess = getText("fifthQuestionScreenButtonOne");
  addScore(guess);
  setText("resultsScreenLabelTwo", ("You Scored " + "") + score + " " +"questions out of 5 correctly!");
  scoreReaction();
  randomCharacterFifthQuestion();
});
onEvent("fifthQuestionScreenButtonTwo", "click", function( ) {
  setScreen("resultsScreen");
  guess = getText("fifthQuestionScreenButtonTwo");
  addScore(guess);
  setText("resultsScreenLabelTwo", ("You Scored " + "") + score + " " +"questions out of 5 correctly!");
  scoreReaction(guess);
  randomCharacterFifthQuestion();
});
onEvent("fifthQuestionScreenButtonThree", "click", function( ) {
  setScreen("resultsScreen");
  guess = getText("fifthQuestionScreenButtonThree");
  addScore(guess);
  setText("resultsScreenLabelTwo", ("You Scored " + "") + score + " " +"questions out of 5 correctly!");
  scoreReaction(guess);
  randomCharacterFifthQuestion();
});
onEvent("fifthQuestionScreenButtonFour", "click", function( ) {
  setScreen("resultsScreen");
  guess = getText("fifthQuestionScreenButtonFour");
  addScore(guess);
  setText("resultsScreenLabelTwo", ("You Scored " + "") + score + " " +"questions out of 5 correctly!");
  scoreReaction();
  randomCharacterFifthQuestion();
});


// Function to filter down 3500 characters from the DC universe who are included in the intial data set.
// 3500 filtered down to 50, which are the most popular DC characters.
// Popularity in characters makes it easier for users to score higher.
function characterFilterDown() {
  characterName = getColumn("DC Comics Characters", "Name");
  fiftyCharacters = [];
  for (var i = 0; i < characterName.length; i++) {
    if (fiftyCharacters.length < 50) {
      appendItem(fiftyCharacters, characterName[i]);
    }
  }
}


// Function which makes sure that a same quesiton doesn't repeat.
// This is so there are 5 different characters everytime.
// This is to make the quiz as hard as possible.
function randomCharacterFirstQuestion() {
  index = randomNumber(0, fiftyCharacters.length -1);
  setText("firstQuestionScreenLabelTwo", fiftyCharacters [index]);
}
function randomCharacterSecondQuestion() {
  index = randomNumber(0, fiftyCharacters.length -1);
  setText("secondQuestionScreenLabelTwo", fiftyCharacters [index]);
}
function randomCharacterThirdQuestion() {
  index = randomNumber(0, fiftyCharacters.length -1);
  setText("thirdQuestionScreenLabelTwo", fiftyCharacters [index]);
}
function randomCharacterFourthQuestion() {
  index = randomNumber(0, fiftyCharacters.length -1);
  setText("fourthQuestionScreenLabelTwo", fiftyCharacters [index]);
}
function randomCharacterFifthQuestion() {
  index = randomNumber(0, fiftyCharacters.length -1);
  setText("fifthQuestionScreenLabelTwo", fiftyCharacters [index]);
}


// Function added to make sure that the score variable works properly where if the correct answer is clicked, then the score goes up by + 1
function addScore(userInput) {
  if (userInput == characterStatus[index]) {
    score = score + 1;
  }
}


// Score function added as a reaction for the score which is gotten from the quiz
function scoreReaction() {
  if (score >= 4) {
    setImageURL("resultsScreenImageTwo", "icon://fa-smile-o");
  } else if (score == 3) {
    setImageURL("resultsScreenImageTwo", "icon://fa-meh-o");
  } else {
    setImageURL("resultsScreenImageTwo", "icon://fa-frown-o");
  }
}
