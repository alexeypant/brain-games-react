export default {
    gameName: 'Even number',
    gameDescription: "Is the following number even?",
    question: '',
    correctAnswer: '',
    generateTask(){
      const randNum = Math.round(Math.random() * 100);
      this.question = `${randNum}`;
      this.correctAnswer = (randNum % 2 === 0) ? 'yes' : 'no';
    }
  }
