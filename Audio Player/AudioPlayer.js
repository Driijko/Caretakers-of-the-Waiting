function AudioPlayer() {

    this.track = auThemeMusic;
    this.isTrackLoading = false;
    this.trackTitle = "Main Theme";

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

    // Positioning and Size
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
    this.fadeIn = true;
    let fadeInAlpha = 255;

    // Create parts of audio player
    const playbackSection = new PlaybackSection(this.layout, this.track);
    const volumeSection = new VolumeSection(this.layout, this.track);
    const trackTitle = new TrackTitle(this.layout);

    this.loadTrack = function(filePath, title) {
        this.track = loadSound(filePath);
        trackTitle.title = "... loading";
        this.trackTitle = title;
        this.isTrackLoading = true;
    }

    this.registerTrack = function() {
        if (this.isTrackLoading && this.track.isLoaded()) {
            trackTitle.title = this.trackTitle;
            playbackSection.setTrack(this.track); 
            volumeSection.track = this.track;
            this.isTrackLoading = false;
        }
    }
    
    // this.setTrack(auThemeMusic);

    this.display = function() {

        // background(0);

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

    this.trackFollow = function() {
        playbackSection.trackFollow();
    }

    this.play = function() {
        playbackSection.play();
    }
}