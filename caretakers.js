// Initialize Variables
let mode;
let openingPrompts;
let audioPlayer;

// Audio /////////////////////////////////////////////////////////////
let auStartButton;

// Acts and Theme Music
let auThemeMusic;
let auAct1;
let auAct2;
let auAct3;
let auAct4;
let auAct5;

function preload() {
  auStartButton = loadSound("./assets/audio/startButton.wav");

  // Acts and Theme Music
  // auThemeMusic = loadSound("./assets/audio/acts and music/themeMusic.mp3");
  // auAct1 = loadSound("./assets/audio/acts and music/act1.mp3");
  // auAct2 = loadSound("./assets/audio/acts and music/act2.mp3");
  // auAct3 = loadSound("./assets/audio/acts and music/act3.mp3");
  // auAct4 = loadSound("./assets/audio/acts and music/act4.mp3");
  // auAct5 = loadSound("./assets/audio/acts and music/act5.mp3");
}



function setup() {

  // Initial view
  document.documentElement.style.overflow = "hidden";
  createCanvas(windowWidth, windowHeight);

  // Define Variables
  openingPrompts = new OpeningPrompts();
  audioPlayer = new AudioPlayer();
  // mode = "opening prompts";

  // Dev Mode
  mode = "opening animation";
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {

  background(0);

  if (mode === "opening prompts") {
    openingPrompts.display();
    openingPrompts.input();
  }
  else if (mode === "opening animation") {
    audioPlayer.display();
  }
}