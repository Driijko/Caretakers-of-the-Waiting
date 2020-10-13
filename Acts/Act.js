function Act(num, title) {
    this.num = num;
    this.title = title;

    this.display = function() {

        ellipseMode(CENTER);
        stroke(255);
        strokeWeight(2, 200);
        fill(0, 180);
        ellipse((width/2), 150, 200, 150);

        textAlign(CENTER, CENTER);
        textSize(25);
        noStroke();
        fill(255);
        text(`Act ${this.num}`, (width/2) - 100, 70, 200, 100);

        textSize(40);
        text(`${this.title}`, (width/2) - 95, 120, 200, 100);
    }
}