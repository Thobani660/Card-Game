
// const backcard = document.querySelectorAll(".back");
// const frontcard =  document.querySelectorAll(".front");
// let  x = ["A", "B", "C", "D", "E", "F", "G", "H"];

// for ( let i = 0 ; i < x.length; i=+2){
//    var num = document.getElementsByClassName("back")[i].innerHTML =  x;
//    console.log(x);
//      }

const cards = document.querySelectorAll('.card');
const pairs = [];
let flippedCards = [];
let matchedPairs = [];

// console.log("cards")

cards.forEach((card) => {
  card.addEventListener('click', () => {
    // Flip the card
    card.classList.toggle('flipped');



    // Add to flipped cards array
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      const card1 = flippedCards[0];
      const card2 = flippedCards[1];

      // Check if they match
      if (card1.dataset.letter === card2.dataset.letter) {
        console.log(card1.dataset.letter);
        pairs.push(card1.dataset.letter);
        
      } else {
        // Timeout for not matching cards

        setTimeout(() => {
          card1.classList.remove('flipped');
          card2.classList.remove('flipped');
        }, 1000);
      }
      

      // Reset flipped cards
      flippedCards = [];
    }
    console.log(card)

  });
});

  document.getElementById("NewGame").addEventListener("click",  ()  => {
  cards.forEach((card) => {
    card.classList.remove("flipped");
    console.clear("newGame");
  });
  matchedPairs = [];
});
// function NrGame() {

// if (card1.dataset.letter === card2.dataset.letter) {
//   card1.dataset.letter
// }

// }

