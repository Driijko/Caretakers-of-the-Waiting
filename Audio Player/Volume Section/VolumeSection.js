function VolumeSection(layout) {
    this.layout = layout;

    const muteFullVolumeButton = new MuteFullVolumeButton(this.layout);
    const volumeSlider = new VolumeSlider(this.layout);

    this.display = function() {
        muteFullVolumeButton.display();
        volumeSlider.display();
    }

    this.input = function() {
        if (this.layout === 0) {
            
        }
    }
}