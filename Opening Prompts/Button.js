function Button(word, x, y) {
  this.display = function(){

    // Button Outline
    strokeWeight(5);
    stroke(255);
    fill(0);
    rect(x, y, 100, 50);
  }
}