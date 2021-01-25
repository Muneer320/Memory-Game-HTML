var i = 0;
var pOneName = "Player 1";
var pTwoName = "Player 2";
var gameBodyPage = document
 .getElementById("gameBody");
var gameMenuPage = document
 .getElementById("gameMenu");
const gameImg = [
  //https://pabyhk.mimo.run/img/light-icon.png
 "data:image/png;base64,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",
 "https://pabyhk.mimo.run/img/dark-icon.png",
 "https://pabyhk.mimo.run/img/ninja-icon.png",
 "https://a0kn4z.mimo.run/img/buggy.png",
 "https://a0kn4z.mimo.run/img/coupe.png",
 "https://a0kn4z.mimo.run/img/truck.png",
 "https://a0kn4z.mimo.run/img/van.png"
];
var newGameImg = ["", "", "",
 "", "",
 "", "", "", "", "", "", ""
];
var gameImgCount = 1;
var buttonImg = [];
var playerTurn = document
 .createElement("p");
playerTurn.setAttribute("id",
 "pTurn");
var gameButton = [];
var drawnNumberList = [];
var chosenFigureCount = 0;
var chosenFigureList = [0, 0];
var pOnePoints = 0;
var pTwoPoints = 0;
var pOneTurn = true;
var scoreboardOne = document
 .createElement("p");
var scoreboardTwo = document
 .createElement("p");
var playAgain = document
 .createElement("button");
playAgain.innerHTML =
 "Play again";
playAgain.setAttribute(
 "onclick",
 "resetGame()");
var brArray = [];
var brArrayCount = 0;
var randomMissMsg = [
 "It wasn't the right choice...",
 "Not this time...",
 "Looks like you missed your turn...",
 "Try again!", "Uh-Oh!"
];
var rmmNumber;
var clickToContinue = document
 .createElement("p");
clickToContinue.innerHTML =
 "Press any button to continue";
var disabledButton = [false,
 false,
 false, false, false, false,
 false,
 false, false, false, false,
 false
];

function createButtons() {
 for (i = 0; i <= 11; i++) {
  gameButton.push(document
   .createElement("button"));
  var chosenFigureFor =
   "chosenFigure(" + (i + 1) +
   ")";
  gameButton[i].setAttribute(
   "onclick", chosenFigureFor);
  gameButton[i].setAttribute(
   "id",
   i);
  gameButton[i].setAttribute(
   "class",
   "gameButtonClass");
  buttonImg.push(document
   .createElement("img"));
  buttonImg[i].src = gameImg[0];
  buttonImg[i].width = 80;
  buttonImg[i].height = 80;
  var idFor = "button" + (i +
  1);
  buttonImg[i].id = idFor;
 }
}
createButtons();

function verifyNames() {
 if (document.getElementById(
   "pOneInput").value != "") {
  pOneName = document
   .getElementById(
    "pOneInput").value;
 } else {
  pOneName = "Player 1";
 }

 if (document.getElementById(
   "pTwoInput").value != "") {
  pTwoName = document
   .getElementById(
    "pTwoInput").value;
 } else {
  pTwoName = "Player 2";
 }

 if (pOneName === pTwoName) {
  alert(
   "The names can't be the same!"
   );
 } else {
  gameBodyPage.removeChild(
   gameMenuPage);
  createGame();
 }
}

function createGame() {
 gameBodyPage.appendChild(
  playerTurn);
 playerTurn.innerHTML =
  "It's " +
  pOneName + "'s turn!";
 scoreboardOne.innerHTML =
  pOneName +
  "'s points: " + pOnePoints;
 gameBodyPage.appendChild(
  scoreboardOne);
 scoreboardTwo.innerHTML =
  pTwoName +
  "'s points: " + pTwoPoints;
 gameBodyPage.appendChild(
  scoreboardTwo);
 for (i = 0; i <= 11; i++) {
  gameBodyPage.appendChild(
   gameButton[i]);
  gameButton[i].appendChild(
   buttonImg[i]);
  if ((i + 1) % 3 === 0) {
   brArray[brArrayCount] =
    document
    .createElement("br");
   gameBodyPage.appendChild(
    brArray[
     brArrayCount]);
   brArrayCount++;
  }
 }
 var isDrawnHappening = true;
 var drawnNumber1;
 var drawnNumber2;

 while (isDrawnHappening) {
  drawnNumber1 = Math.floor(Math
   .random() * 12) + 1;
  drawnNumber2 = Math.floor(Math
   .random() * 12) + 1;
  if (drawnNumber1 !==
   drawnNumber2) {
   for (i = 0; i <=
    drawnNumberList
    .length; i++) {
    if (drawnNumber1 !==
     drawnNumberList[i] &&
     drawnNumber2 !==
     drawnNumberList[i]) {
     if (i === drawnNumberList
      .length) {
      drawnNumberList.push(
       drawnNumber1);
      drawnNumberList.push(
       drawnNumber2);
      newGameImg[drawnNumber1 -
        1] =
       (gameImg[gameImgCount]);
      newGameImg[drawnNumber2 -
        1] =
       (gameImg[gameImgCount]);
      gameImgCount++;
     }
    } else {
     i = drawnNumberList.length;
    }
   }
  }
  if (drawnNumberList.length ===
   12) {
   isDrawnHappening = false;
  }
 }
}

function chosenFigure(
 buttonNumber) {
 var chosenFigureFor2 =
  "button" +
  buttonNumber;
 document.getElementById(
   chosenFigureFor2).src =
  newGameImg[buttonNumber - 1];
 if (chosenFigureCount < 1) {
  chosenFigureList[0] =
   buttonNumber;
  document.getElementById((
    chosenFigureList[0] - 1))
   .disabled = true;
  chosenFigureCount++;
 } else {
  chosenFigureList[1] =
   buttonNumber;
  document.getElementById((
    chosenFigureList[1] - 1))
   .disabled = true;
  if (document.getElementById((
    "button" +
    chosenFigureList[0]))
   .src === document
   .getElementById((
    "button" +
    chosenFigureList[1]))
   .src) {
   disabledButton[
    chosenFigureList[
     0] - 1] = true;
   disabledButton[
    chosenFigureList[
     1] - 1] = true;
   if (pOneTurn) {
    pOnePoints++;
    scoreboardOne.innerHTML =
     pOneName + "'s points: " +
     pOnePoints;
   } else {
    pTwoPoints++;
    scoreboardTwo.innerHTML =
     pTwoName + "'s points: " +
     pTwoPoints;
   }
  } else {
   playerTurn.innerHTML =
    randomMissMsg[Math.floor(
     Math
     .random() * 5)];
   for (i = 0; i <= 11; i++) {
    gameButton[i].setAttribute(
     "onclick",
     "waitForClick()");
    gameButton[i].disabled =
     false;
    gameBodyPage.appendChild(
     clickToContinue);
   }
  }
  chosenFigureCount = 0;
 }
 if (pOnePoints + pTwoPoints ===
  6) {
  gameBodyPage.removeChild(
   scoreboardOne);
  gameBodyPage.removeChild(
   scoreboardTwo);
  if (pOnePoints > pTwoPoints) {
   playerTurn.innerHTML =
    pOneName +
    " is the winner! (" +
    pOnePoints + " points)";
  } else if (pOnePoints <
   pTwoPoints) {
   playerTurn.innerHTML =
    pTwoName +
    " is the winner! (" +
    pTwoPoints + " points)";
  } else {
   playerTurn.innerHTML =
    "Match drawn!";
  }
  brArray[brArrayCount] =
   document
   .createElement("br");
  gameBodyPage.appendChild(
   brArray[
    brArrayCount]);
  brArrayCount++;
  gameBodyPage.appendChild(
   playAgain);
 }
}

function waitForClick() {
 for (i = 0; i <= 11; i++) {
  var chosenFigureFor =
   "chosenFigure(" + (i + 1) +
   ")";
  gameButton[i].setAttribute(
   "onclick", chosenFigureFor);
  gameButton[i].disabled =
   disabledButton[i];
 }
 document.getElementById((
   "button" +
   chosenFigureList[0])).src =
  gameImg[0];
 document.getElementById((
   "button" +
   chosenFigureList[1])).src =
  gameImg[0];
 pOneTurn = !pOneTurn;
 if (pOneTurn) {
  playerTurn.innerHTML =
   "It's " +
   pOneName + "'s turn!";
 } else {
  playerTurn.innerHTML =
   "It's " +
   pTwoName + "'s turn!";
 }
 gameBodyPage.removeChild(
  clickToContinue);
}

function resetGame() {
 newGameImg = ["", "", "", "",
  "",
  "", "", "", "", "", "", ""
 ];
 gameImgCount = 1;
 buttonImg = [];
 gameButton = [];
 drawnNumberList = [];
 chosenFigureCount = 0;
 chosenFigureList = [0, 0];
 pOnePoints = 0;
 pTwoPoints = 0;
 pOneTurn = true;
 for (i = 0; i <= 11; i++) {
  gameBodyPage.removeChild(
   document
   .getElementById(i));
 }
 for (i = 0; i < brArray
  .length; i++) {
  gameBodyPage.removeChild(
   brArray[
    i]);
 }
 brArray = [];
 brArrayCount = 0;
 disabledButton = [false, false,
  false, false, false, false,
  false,
  false, false, false, false,
  false
 ];
 i = 0;
 gameBodyPage.removeChild(
  playerTurn);
 gameBodyPage.removeChild(
  playAgain);
 createButtons();
 createGame();
}