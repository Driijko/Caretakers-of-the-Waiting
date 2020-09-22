function PlayPauseButton(layout) {

    this.layout = layout;
    this.image = imPlayButton;

    this.display = function() {
        if (this.layout === 0) {
            image(this.image, (width/2) - 140, height - 175, 40, 40);

        }
        else if (this.layout === 1) {
            image(this.image, (width/2) - 350, height - 100, 40, 40);
        }
    }

    this.input = function() {
        if (
            this.layout === 0
            && collidePointCircle(mouseX, mouseY, (width/2) - 120, height - 155, 40)
        ) {
            rect(50, 50, 50, 50);
        }
    }
}