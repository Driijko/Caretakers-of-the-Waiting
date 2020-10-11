function OpeningPrompts() {

  let startButtonClicked = false;

  this.audioEnabled = false;
  
  // Create Prompts and FadeOut (for FadeOut see helperfunctions.js)
  const fullScreenPrompt = new Prompt("Enable Fullscreen?", 0);
  const audioPrompt = new Prompt("Enable Audio?", 150);
  const fadeOutTime = 60;
  const fadeOut = new FadeOut((width/2) - 200, (height/2) - 200, 400, 400, fadeOutTime);

  this.display = function() {

    // Display prompts
    fullScreenPrompt.display();
    audioPrompt.display();


    // Selections have all been made
    if (fullScreenPrompt.selection && audioPrompt.selection) {
      // Start Button Outline
      strokeWeight(5);
      
      if (startButtonClicked) {
        fill(255, 0, 200);
        stroke(50);      
      }
      else {
        fill(0);
        stroke(255);
      }
      rect((width/2) - 100, (height/2) + 120, 200, 75, 100);

      // Start Button Text
      if (startButtonClicked) {
        fill(0);
      }
      else {
        fill(255);
        noStroke();
      }
      textSize(40);
      text("START", (width/2) - 100, (height/2) + 120, 200, 75); 
    }
    // Selections have not all been made
    else {
      // Start Button Outline
      strokeWeight(5);
      stroke(20);
      fill(0);
      rect((width/2) - 100, (height/2) + 120, 200, 75, 100);

      // Start Button Text
      noStroke();
      fill(20);
      textSize(40);
      text("START", (width/2) - 100, (height/2) + 120, 200, 75);       
    }

    // Fadeout
    fadeOut.display();
  }

  this.input = function() {

    // Prompt Inputs
    fullScreenPrompt.input();
    audioPrompt.input();

    // Start Button Hover after selections have all been made
    if (fullScreenPrompt.selection && audioPrompt.selection
        && collidePointRect(mouseX, mouseY, (width/2) - 100, (height/2) + 120, 200, 75)) 
    {
      cursor("pointer");

      // Start button clicked
      if (mouseIsPressed) {

        startButtonClicked = true;

        // Initiate fade out
        fadeOut.start = true;

        // Sound effect
        if (audioPrompt.selection === "yes") {
          auStartButton.play();
        }

      }
    }
    else {
      cursor("default");
    }

    if (fadeOutTime === fadeOut.timer) {

      // If user has selected fullscreen option, transistion to fullscreen
      if (fullScreenPrompt.selection === "yes") {
        transistionToFullScreen(); // see helperfunctions.js
      }
      

      // If user has selected enable audio option, begin playing theme music
      if (audioPrompt.selection === "yes") {
        this.audioEnabled = true;
      }

      // mode = "opening animation";
      mode = "initialize";
    }    
  }
}