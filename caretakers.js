// Debugging
let test = true;

// Graphics Layer
let g;

// Declare variables for objects
let mode;
let openingPrompts;
let audioPlayer;
let tree;
let poster;
let act;
let mouse;

// Audio /////////////////////////////////////////////////////////////
let auStartButton;

// Acts and Theme Music
// let auThemeMusic;
// let auAct1;
// let auAct2;
// let auAct3;
// let auAct4;
// let auAct5;
let audio = [];

// Images //////////////////////////////////////////////////////////
// Poster Art
let imPoster;
// Icons
let imPlayButton;
let imPauseButton;
let imMuteButton;
let imFullVolumeButton;

function preload() {
  // auStartButton = loadSound("./assets/audio/startButton.wav");

  // Acts and Theme Music
  // auThemeMusic = loadSound("./assets/audio/acts and music/themeMusic.mp3");
  // auThemeMusic.setLoop(true);
  // auAct1 = loadSound("./assets/audio/acts and music/act1.mp3");
  // auAct2 = loadSound("./assets/audio/acts and music/act2.mp3");
  // auAct3 = loadSound("./assets/audio/acts and music/act3.mp3");
  // auAct4 = loadSound("./assets/audio/acts and music/act4.mp3");
  // auAct5 = loadSound("./assets/audio/acts and music/act5.mp3");

  // Poster Art
  imPoster = loadImage("./assets/images/poster art/mainPoster.jpg");

  // Audio Player Icons
  // imPlayButton = loadImage("./assets/images/icons/play.svg");
  // imPauseButton = loadImage("./assets/images/icons/pause.svg");
  // imMuteButton = loadImage("./assets/images/icons/mute.svg");
  // imFullVolumeButton = loadImage("./assets/images/icons/fullVolume.svg");
}



function setup() {

  // Opening Prompts Start Button
  auStartButton = loadSound("./assets/audio/startButton.wav");

  // Audio Player Icons
  imPlayButton = loadImage("./assets/images/icons/play.svg");
  imPauseButton = loadImage("./assets/images/icons/pause.svg");
  imMuteButton = loadImage("./assets/images/icons/mute.svg");
  imFullVolumeButton = loadImage("./assets/images/icons/fullVolume.svg");


  // Load Acts and Theme Music
  auThemeMusic = loadSound("./assets/audio/acts and music/themeMusic.mp3");
  auThemeMusic.setLoop(true);

  // Initial view
  document.documentElement.style.overflow = "hidden";
  createCanvas(windowWidth, windowHeight);
  background(0);

  // Intialize objects unaffected by transistion to fullscreen
  poster = new Poster();
  openingPrompts = new OpeningPrompts();
  
  mouse = new Mouse();

  mode = "opening poster";

  // Dev Mode
  // mode = "initialize";
  frameRate(30);
}


function draw() {

  background(0);

  ///////////////////////////////////////////////////////
  if (mode === "opening poster") {
    poster.display();
    poster.input();
  }
  else if (mode === "opening prompts") {
    openingPrompts.display();
    openingPrompts.input();
  } //////////////////////////////////////////////////////
  else if (mode === "initialize") {

    // Seperate Graphics Layer
    g = createGraphics(width, height);

    // Create Objects
    audioPlayer = new AudioPlayer();
    if (openingPrompts.audioEnabled) {
      audioPlayer.play();
    }
    tree = new Tree();
    act = new Act("1", "Seeds");

    mode = "opening animation";
  } ///////////////////////////////////////////////////////////
  // We've moved past intialization
  else {

    // Display seperate graphics layer
    image(g, 0, 0);

    ////////////////////////////////////////////////////////////
    if (mode === "opening animation") {
      audioPlayer.display();
      audioPlayer.input();
      audioPlayer.trackFollow();
      tree.grow();
      tree.display();
      act.display();

    } ///////////////////////////////////////////////////////////
  }
}