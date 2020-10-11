function Poster() {

    let fadeAlpha = 0;

    this.display = function() {
        image(imPoster, 7, 10, width - 14, height - 70);

        noStroke();
        fill(0, fadeAlpha);
        rect(7, 10, width - 14, height - 70);


        if (fadeAlpha < 150){
            fadeAlpha += 1;
        }

        textAlign(CENTER, CENTER);
        textSize(60);
        stroke(0, 255, 0, fadeAlpha + 10);
        strokeWeight(10);
        fill(255, fadeAlpha + 10);
        text("ENTER", 0, height/3, width, 100);


        noStroke();
        textSize(23);
        fill("green");
        text("A radio play in 5 acts", 0, height - 60, width, 60);
    }

    this.input = function() {
        if (
            mouseIsPressed
            && collidePointRect(mouseX, mouseY, 7, 10, width - 14, height - 70)
        ) {
            mode = "opening prompts";
        }
    }
}