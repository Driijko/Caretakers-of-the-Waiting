function Act(num, title) {
    let alpha = 0;
    this.num = num;
    this.title = title;

    this.display = function() {

        if (alpha < 255) {
            alpha += 2;
        }

        ellipseMode(CENTER);
        stroke(255, alpha);
        strokeWeight(2);
        fill(0, alpha - 60);
        ellipse((width/2), 150, 200, 150);

        textAlign(CENTER, CENTER);
        textSize(25);
        noStroke();
        fill(255, alpha);
        text(`Act ${this.num}`, (width/2) - 100, 70, 200, 100);

        textSize(40);
        text(`${this.title}`, (width/2) - 95, 120, 200, 100);
    }
}