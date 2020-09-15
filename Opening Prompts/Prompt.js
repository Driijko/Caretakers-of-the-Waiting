function Prompt(prompt) {
  this.display = function() {
    const yesButton = new Button("yes", 20, 50);
    yesButton.display();
    const noButton = new Button("no", 150, 50);
    noButton.display();
  }
}