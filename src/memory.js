class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) return undefined;
    for (let i = 0; i < this.cards.length-2; i++){
      const j = i + Math.floor(Math.random()*(this.cards.length - i));
      const temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1;
    if(card1 === card2){
      this.pairsGuessed += 1;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    // ... write your code here
    if(this.pairsGuessed === this.cards.length/2){
      return true;
    } else return false;
  }
}
