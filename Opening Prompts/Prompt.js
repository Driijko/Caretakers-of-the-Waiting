function Prompt(prompt, offset) {

  // User Selection
  this.selection = null;

  // Create Buttons
  const yesButton = new Button("YES", (width/2) - 125, (height/2) - 140 + offset);
  const noButton = new Button("NO", (width/2) + 20, (height/2) - 140 + offset);

  this.display = function() {

    // Prompt
    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(min(width * 0.09, 30));
    text(prompt, (width / 2) - 150, (height/2) - 200 + offset, 300, 50);

    // Buttons
    yesButton.display();
    noButton.display();
  }

  this.input = function() {

    // Button Inputs
    yesButton.input();
    noButton.input();

    // Selection
    if (yesButton.clicked) {
      this.selection = "yes";
    }
    else if (noButton.clicked) {
      this.selection = "no";
    }

    if (this.selection === "yes") {
      yesButton.selected = true;
      noButton.selected = false;
    }
    else if (this.selection === "no") {
      noButton.selected = true;
      yesButton.selected = false;
    }

  }
}