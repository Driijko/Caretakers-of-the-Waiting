function Prompt(prompt, offset) {

  const yesButton = new Button("YES", 0);



  this.display = function() {

    // Prompt
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(min(width * 0.07, 30));
    text(prompt, (width / 2) - 150, (height * 0.15) + offset, 300, 50);

    // Buttons
    yesButton.display();
  }
}