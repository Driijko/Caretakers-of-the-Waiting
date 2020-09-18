function Button(word, x, y) {

  this.clicked = false;
  this.selected = false;

  this.display = function(){

    // Button represents current selection
    if (this.selected) {
      // Button Outline
      strokeWeight(5);
      stroke(255);
      fill(0);
      rect(x, y, 100, 50);

      // Button Text
      noStroke();
      fill(255);
      text(word, x, y, 100, 50);
    }
    // Button does not represent current selection
    else {
      // Button Outline
      strokeWeight(5);
      stroke(50);
      fill(0);
      rect(x, y, 100, 50);

      // Button Text
      noStroke();
      fill(50);
      text(word, x, y, 100, 50);
    }


  }

  this.input = function() {

    // Button is clicked
    if (collidePointRect(mouseX, mouseY, x, y, 100, 50) && mouseIsPressed) {
      this.clicked = true;
    }
    // Button is not clicked
    else {
      this.clicked = false;
    }
  }
}