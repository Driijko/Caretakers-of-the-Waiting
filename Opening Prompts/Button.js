function Button(word, x, y) {

  this.display = function(){

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
}