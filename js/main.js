//*-------------------------------------------------------------------------*/
// Name:    Memory Game
// Program: main.js
// Author:  Danny Villanueva
// Date:    7-January-2018
// Description:
//          This is the JS program to control the logic for the Memory Game.
//          The alert to display that either a match was found or to try again
//          was replaced with an h2 element.  The visibility and text of the 
//          h2 element is controlled in this script.  This was done because
//          the 2nd card that was selected would not get displayed until the
//          OK button was clicked on the alert box and did not look very good.
//
//          10-Jan-2018:
//          * Added logic to keep track of score or number of matches.
//          * Added number of times the user has played.
//          * Added logic for reset button.
//*-------------------------------------------------------------------------*/

// cards array objects
var cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: 'images/queen-of-hearts.png'
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: 'images/queen-of-diamonds.png'
},
{
rank: 'king',
suit: 'hearts',
cardImage: 'images/king-of-hearts.png'
},
{
rank: 'king',
suit: 'diamonds',
cardImage: 'images/king-of-diamonds.png'
}
];

// This array holds the cards in play
var cardsInPlay = [];

// The Win and Play counts are stored at the browser session level.
// User will have to close browser to reset counts.
var winCount = sessionStorage.getItem("winCountS");
var playCount = sessionStorage.getItem("playCountS");

// This function is used for testing
/* resetPlays(); */

if (winCount===null) {
	winCount=0;
};
if (playCount===null) {
	playCount=0;
};

// This function checks if there is a match for the two cards in play
function checkForMatch() {
	console.log("In checkForMatch");
	if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
		// Replaced alert with the following h2 element.
		document.getElementById('matchOrNot').textContent = 'MATCH FOUND!';	
		//alert("You found a match!");
		winCount++;
	}
	else {
		// Replaced alert with the following h2 element.
		document.getElementById('matchOrNot').textContent = 'Sorry, try again.';
		//alert("Sorry, try again.");
	}
	
	playCount++; // Increment the playCount
	// Display the score, match or no match message and reset button
	document.getElementsByClassName("score")[0].textContent = "You've matched " + winCount + " of " + playCount + " plays.";
	document.getElementsByClassName("score")[0].style.visibility = "visible";
	document.getElementById("matchOrNot").style.visibility = "visible";
	document.getElementsByTagName("button")[0].style.visibility = "visible";

	// Save the win/match and play counts to the browser session
	sessionStorage.setItem("winCountS", winCount);
	sessionStorage.setItem("playCountS", playCount);
}

// This function flips a card and puts the card in the cardsInPlay array.
// If two cards are in play, then we can check for a match.
function flipCard() {
	var cardId = this.getAttribute("data-id");
	this.setAttribute("src",cards[cardId].cardImage);
	cardsInPlay.push({suit: cards[cardId].suit, rank:cards[cardId].rank});
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
	// If user attempts to click another card, reload the page to start again.
	else if (cardsInPlay.length === 3) {
			resetPage();
		}
}

// This function creates the board of four cards.
function createBoard() {
	// Initially hide this h2 element.  Only displays when checkForMatch is called.
	document.getElementById("matchOrNot").style.visibility = "hidden";
	document.getElementsByTagName("button")[0].style.visibility = "hidden";
	for (var i=0; i<cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click",flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

function resetPage() {
	location.reload();
}

// Function used for testing.  Reset the counts in the browser session.
function resetPlays() {
	winCount = 0;
	playCount = 0;
	sessionStorage.setItem("winCountS", winCount);
	sessionStorage.setItem("playCountS", playCount);
}

createBoard();