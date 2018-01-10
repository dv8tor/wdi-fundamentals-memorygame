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

// This function checks if there is a match for the two cards in play
function checkForMatch() {
	if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
		// Replaced alert with the following h2 element.
		document.getElementById('matchOrNot').textContent = 'MATCH FOUND!';	
		//alert("You found a match!");
	}
	else {
		// Replaced alert with the following h2 element.
		document.getElementById('matchOrNot').textContent = 'Sorry, try again.';
		//alert("Sorry, try again.");
	}
	// Display the match or no match message
	document.getElementById("matchOrNot").style.visibility = "visible";
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
			location.reload();
		}
}

// This function creates the board of four cards.
function createBoard() {
	// Initially hide this h2 element.  Only displays when checkForMatch is called.
	document.getElementById("matchOrNot").style.visibility = "hidden";
	for (var i=0; i<cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click",flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

createBoard();