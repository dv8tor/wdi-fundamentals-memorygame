//*-------------------------------------------------------------------------*/
// Name:    Memory Game
// Program: main.js
// Author:  Danny Villanueva
// Date:    7-January-2018
// Description:
//          This is the JS program to control the logic for the Memory Game.
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
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}
		else {
			alert("Sorry, try again.");
		}
}

// This function flips a card and puts the card in the cardsInPlay array.
// If two cards are in play, then we can check for a match.
// If only one card is in play, tell the user to flip another card.
function flipCard(cardId) {
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);	
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	if (cardsInPlay.length === 2) {
		checkForMatch();
		}
		else {
		// Set this alert later...	alert("Flip another card");
		}
}

flipCard(0);
flipCard(2);