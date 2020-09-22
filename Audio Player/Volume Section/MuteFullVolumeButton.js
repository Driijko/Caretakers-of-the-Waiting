function MuteFullVolumeButton(layout) {

    this.layout = layout;
    this.image = imFullVolumeButton;

    this.display = function() {
        if (this.layout === 0) {
            image(this.image, (width/2) - 140, height - 105, 40, 40);
        }
        else if (this.layout === 1) {
            image(this.image, (width/2) + 70, height - 100, 40, 40);
        }
    }

    this.input = function() {
        if (
            ((
                this.layout === 0
                && collidePointCircle(mouseX, mouseY, (width/2) - 120, height - 85, 40)
            )
            ||
            (
                this.layout === 1
                && collidePointCircle(mouseX, mouseY, (width/2) + 100, height - 80, 40)
            ))
            && mouse.clicked
        ) {
            if (this.image === imMuteButton) {
                this.image = imFullVolumeButton;
            }
            else {
                this.image = imMuteButton;
            }
        }
    }
}