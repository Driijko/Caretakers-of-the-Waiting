function AudioPlayer() {

    // Layout
    // The layout variable is assigned an integer which identifies
    // what type of layout we want for the audio player's display.
    // This value is passed on to each part of the audio player so that
    // each part positions itself accordingly.
    if (width < 740) {
        this.layout = 0;
    }
    else {
        this.layout = 1;
    }

    // Positioning
    if (this.layout === 0) {
        this.xOffset = -150;
        this.yOffset = -190;
        this.width = 300;
        this.height = 180;
    }
    else if (this.layout === 1) {
        this.xOffset = -365;
        this.yOffset = -110;
        this.width = 730;
        this.height = 100;
    }

    // Fade In
    this.fadeIn = false;
    let fadeInAlpha = 255;

    // Create parts of audio player
    const playbackSection = new PlaybackSection(this.layout);
    const volumeSection = new VolumeSection(this.layout);
    const trackTitle = new TrackTitle(this.layout);

    this.display = function() {

        // Audio Player outline
        stroke(255);
        strokeWeight(5);
        fill(0);
        rect((width/2) + this.xOffset, height + this.yOffset, this.width, this.height);


        // Display parts
        playbackSection.display();
        volumeSection.display();
        trackTitle.display();

        // Fade In
        if (this.fadeIn) {
            noStroke();
            fill(0, fadeInAlpha);
            rect((width/2) + this.xOffset - 3, height + this.yOffset - 3, this.width + 6, this.height + 6);
            fadeInAlpha -= 2;
            if (fadeInAlpha <= 0) {
                this.fadeIn = false;
            }
        }

    }

    this.input = function() {
        playbackSection.input();
        volumeSection.input();
    }
}